import re
from pathlib import Path
text = Path('data.js').read_text(encoding='utf-8')
kwsec = re.search(r'keywords:\s*\{(.*?)\n\s*\},\n\s*// Définitions courtes', text, re.S)
keys = set()
if kwsec:
    block = kwsec.group(1)
    for s in re.findall(r'"([^"]+)"', block):
        keys.add(s)
defsec = re.search(r'keywordDefinitions:\s*\{(.*?)\n\s*\}\s*\};', text, re.S)
defs = set()
if defsec:
    block = defsec.group(1)
    for s in re.findall(r'"([^"]+)"\s*:', block):
        defs.add(s)
missing = sorted(keys - defs)
print('Missing definitions count:', len(missing))
for m in missing:
    print(m)
