from PyPDF2 import PdfReader

reader = PdfReader("src/assets/offcampus.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text()
print(text)
