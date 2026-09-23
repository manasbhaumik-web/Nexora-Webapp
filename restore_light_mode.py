import os
import re

def restore_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    orig = content
    content = re.sub(r'\bbg-[#0F172A]\b', 'bg-white', content)
    content = re.sub(r'\bbg-white/5\b', 'bg-slate-50', content)
    content = re.sub(r'\bbg-white/10\b', 'bg-slate-100', content)
    content = re.sub(r'\bborder-white/10\b', 'border-slate-200', content)
    content = re.sub(r'\bborder-white/20\b', 'border-slate-300', content)
    
    # Restore text classes
    content = re.sub(r'\btext-gray-300\b', 'text-slate-700', content)
    content = re.sub(r'\btext-gray-400\b', 'text-slate-600', content)
    
    # Selective text-white replacement (heading/body text to slate-900 where appropriate)
    content = re.sub(r'font-heading text-display-md font-bold text-white', 'font-heading text-display-md font-bold text-slate-900', content)
    content = re.sub(r'font-heading text-[#0F172A] font-bold text-white', 'font-heading text-slate-900 font-bold', content)
    content = re.sub(r'font-heading text-display-sm font-bold text-white', 'font-heading text-display-sm font-bold text-slate-900', content)
    content = re.sub(r'font-heading text-heading-md font-bold text-white', 'font-heading text-heading-md font-bold text-slate-900', content)

    if content != orig:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Restored {filepath}")

dirs_to_scan = ['app', 'components']
for d in dirs_to_scan:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                restore_file(os.path.join(root, file))
