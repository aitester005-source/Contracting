import os

directory = r"c:\Users\999327\AI\Hedefy Scaffolding Contracting\hedefy-website"
extensions = ['.tsx', '.ts', '.md', '.json', '.js']

replacements = {
    "ai.tester005@gmail.com": "info@hedefy-scaff.com",
    "0559423074": "0529885372",
    "055-9423074": "052-9885372",
    "+971 55 942 3074": "+971 52 988 5372",
    "971559423074": "971529885372",
    "+971559423074": "+971529885372"
}

for root, _, files in os.walk(directory):
    if "node_modules" in root or ".next" in root or ".git" in root:
        continue
    for file in files:
        if any(file.endswith(ext) for ext in extensions):
            filepath = os.path.join(root, file)
            # Skip the script itself
            if "update_contacts_v2.py" in file:
                continue
                
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements.items():
                    new_content = new_content.replace(old, new)
                    
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")
            except Exception as e:
                print(f"Error processing {filepath}: {e}")
