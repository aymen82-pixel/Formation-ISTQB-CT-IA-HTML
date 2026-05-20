import re
from pathlib import Path
text = Path('data.js').read_text(encoding='utf-8')
qs = re.findall(r'{\s*id:\s*(\d+),.*?stem:\s*"([^\"]*)".*?options:\s*\[([^\]]*)\]', text, re.S)
for idx, stem, opts in qs:
    opts_list = re.findall(r'"([^\"]*)"', opts)
    print(f'Q{idx}: {stem}')
    for i, o in enumerate(opts_list, start=1):
        print(f'  {chr(96+i)}) {o}')
    print()
