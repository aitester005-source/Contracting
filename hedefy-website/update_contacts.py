import os

directory = r"c:\Users\999327\AI\Hedefy Scaffolding Contracting\hedefy-website"
extensions = ['.tsx', '.ts', '.md']

replacements = {
    "+971 50-4529978": "+971 55 942 3074",
    "50-4529978": "55 942 3074",
    "+971504529978": "+971559423074",
    "971504529978": "971559423074",
    "info@hedefy-scaff.com": "ai.tester005@gmail.com"
}

for root, _, files in os.walk(directory):
    if "node_modules" in root or ".next" in root:
        continue
    for file in files:
        if any(file.endswith(ext) for ext in extensions):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements.items():
                new_content = new_content.replace(old, new)
                
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
