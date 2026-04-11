import fitz # PyMuPDF
import os

pdf_path = r"C:\Users\999327\AI\Hedefy Scaffolding Contracting\Hedefy Scaffolding Profile.pdf"
out_dir = r"C:\Users\999327\AI\Hedefy Scaffolding Contracting\hedefy-website\public\images\extracted_pdf"

os.makedirs(out_dir, exist_ok=True)

try:
    doc = fitz.open(pdf_path)
    image_count = 0
    for page_index in range(len(doc)):
        page = doc[page_index]
        image_list = page.get_images(full=True)
        
        for image_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_filename = os.path.join(out_dir, f"page{page_index+1}_img{image_index+1}.{image_ext}")
            with open(image_filename, "wb") as f:
                f.write(image_bytes)
            image_count += 1
            
    print(f"Extracted {image_count} images to {out_dir}")
except Exception as e:
    print(f"Error: {e}")
