import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generic Replacements for backgrounds and borders (fairly safe)
    content = content.replace('bg-[#0F172A]', 'bg-slate-50 dark:bg-[#0F172A]')
    content = content.replace('bg-[#1E293B]', 'bg-white dark:bg-[#1E293B]')
    content = content.replace('border-white/10', 'border-slate-200 dark:border-white/10')
    content = content.replace('border-white/20', 'border-slate-300 dark:border-white/20')
    content = content.replace('bg-white/5', 'bg-white dark:bg-white/5')
    content = content.replace('bg-white/10', 'bg-slate-100 dark:bg-white/10')

    # Safe text color replacements (avoiding text-white which is everywhere)
    content = content.replace('text-slate-200', 'text-slate-700 dark:text-slate-200')
    content = content.replace('text-slate-300', 'text-slate-600 dark:text-slate-300')
    content = content.replace('text-slate-400', 'text-slate-500 dark:text-slate-400')
    content = content.replace('text-gray-300', 'text-slate-600 dark:text-gray-300')
    content = content.replace('text-gray-400', 'text-slate-600 dark:text-gray-400')
    
    # Shadows
    content = content.replace('shadow-[0_20px_50px_rgba(0,0,0,0.8)]', 'shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

dirs = ['components/home', 'components/layout', 'components/shared']
for d in dirs:
    for filename in os.listdir(d):
        if filename.endswith('.tsx'):
            # Skip HeroSection to keep it dark
            if filename == 'HeroSection.tsx':
                continue
            process_file(os.path.join(d, filename))

print('Refactoring complete.')
