import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const htmlFiles = readdirSync(root).filter((file) => file.endsWith('.html'));
const css = readFileSync(join(root, 'style.css'), 'utf8');

for (const file of htmlFiles) {
  const html = readFileSync(join(root, file), 'utf8');
  assert.match(html, /<link rel="stylesheet" href="style\.css">/, `${file} must load the shared design system`);
  assert.doesNotMatch(html, /<style[\s>]/, `${file} must not keep page-local style blocks`);
  assert.doesNotMatch(html, /\uFFFD/, `${file} must be valid UTF-8 without replacement characters`);
  assert.doesNotMatch(html, /#534AB7|#EEEDFE|#26215C/i, `${file} must not use the legacy purple palette`);
}

assert.match(css, /--accent:\s*var\(--color-primary\)/, 'compat accent must use Action Blue from DESIGN.md');
assert.match(css, /--radius-lg:\s*var\(--radius-lg-design\)/, 'compat radius must use the 18px design token');
assert.doesNotMatch(css, /#534AB7|#EEEDFE|#26215C/i, 'legacy purple palette must not remain in style.css');
