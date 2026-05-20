import re
from pathlib import Path
text = Path('data.js').read_text(encoding='utf-8')
qs = re.findall(r'{\s*id:\s*(\d+),.*?stem:\s*"([^\"]*)".*?options:\s*\[([^\]]*)\]', text, re.S)
lines=[]
for idx, stem, opts in qs:
    opts_list = re.findall(r'"([^\"]*)"', opts)
    lines.append(f'Q{idx}: {stem}')
    for i,o in enumerate(opts_list,start=1):
        lines.append(f'  {chr(96+i)}) {o}')
    lines.append('')
Path('question_texts.txt').write_text('\n'.join(lines), encoding='utf-8')
