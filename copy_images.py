import shutil
import os

base_extracted = r"C:\Users\999327\AI\Hedefy Scaffolding Contracting\hedefy-website\public\images\extracted_pdf"
base_dest = r"C:\Users\999327\AI\Hedefy Scaffolding Contracting\hedefy-website\public\images\portfolio"

mapping = {
    "page6_img4.jpeg": "motor-city.jpg",
    "page7_img4.jpeg": "sustainable-city.jpg",
    "page8_img3.jpeg": "sharjah-government.jpg",
    "page9_img3.jpeg": "damac-lagoons.jpg",
    "page4_img5.jpeg": "minaret.jpg",
    "page4_img7.jpeg": "tank.jpg",
    "page5_img3.jpeg": "event1.jpg",
    "page1_img6.jpeg": "renovation.jpg",
    "page5_img6.jpeg": "event2.jpg"
}

for src, dest in mapping.items():
    src_path = os.path.join(base_extracted, src)
    dest_path = os.path.join(base_dest, dest)
    shutil.copy2(src_path, dest_path)
    print(f"Copied {src} to {dest}")
