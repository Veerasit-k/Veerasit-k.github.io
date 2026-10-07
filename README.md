# 🌟 Modern Research & Developer Portfolio (GitHub Pages)

เว็บ Portfolio & Resume สไตล์ Modern High-Tech Glassmorphism ที่ออกแบบมาสำหรับนักวิจัย (Researcher), AI Engineer, และ Software Developer โดยเฉพาะ รองรับการทำงานบน **GitHub Pages** ได้ทันทีโดยไม่ต้องรัน build pipeline หรือติดตั้ง server เพิ่มเติม!

---

## ✨ ไฮไลท์และฟีเจอร์เด่น
- 🎨 **Modern Dark & Light Theme**: สลับโหมดมืด-สว่างได้ พร้อมบันทึกค่าลงใน LocalStorage
- 🌌 **Ambient Aurora Glow Background**: พื้นหลังแสงเรืองแบบเคลื่อนไหวสุดพรีเมียม
- ⌨️ **Dynamic Typewriter Headline**: ข้อความสลับตำแหน่งงานแบบพิมพ์สด
- 📄 **Interactive CV Quick View**: ป๊อปอัปพรีวิว CV ทันทีบนหน้าเว็บ พร้อมปุ่มกดพิมพ์ / Save as PDF
- 🧠 **Project Filter**: ตัวกรองผลงานแบ่งตามหมวดหมู่ (AI & ML, Systems, Web)
- 📚 **Publications / Research Section**: รองรับการแสดงผลงานวิจัย, ลิงก์ arXiv, และปุ่มคัดลอก BibTeX
- 📱 **Fully Responsive**: รองรับทุกขนาดหน้าจอ ตั้งแต่มือถือจนถึงหน้าจอขนาดใหญ่
- 📋 **One-Click Copy Email & Quick Contact Form**: คัดลอกอีเมลลงคลิปบอร์ดด้วยคลิกเดียว

---

## 🚀 วิธีเปิดดูบนเครื่องของคุณทันที (Local Preview)

### วิธีที่ 1: ดับเบิลคลิกเปิดไฟล์
ดับเบิลคลิกไฟล์ `index.html` เพื่อเปิดดูผ่านเว็บเบราว์เซอร์ได้ทันที!

### วิธีที่ 2: รันผ่าน Python Local Server (แนะนำ)
เปิด Terminal ในโฟลเดอร์นี้ แล้วรัน:
```bash
python -m http.server 8000
```
แล้วเปิดเบราว์เซอร์ไปที่: `http://localhost:8000`

---

## 🌐 วิธีนำขึ้น GitHub Pages (ภายใน 2 นาที ฟรี 100%)

### ขั้นตอนที่ 1: สร้าง Repository บน GitHub
1. ไปที่ [GitHub](https://github.com) แล้วกด **New repository**
2. ตั้งชื่อ Repository:
   - **แนะนำให้ตั้งชื่อว่า:** `<username>.github.io` (เช่น หาก username คือ `somchai`, ให้ตั้งว่า `somchai.github.io`)
   - หรือตั้งชื่อว่า `portfolio` ก็ได้
3. เลือกเป็น **Public** แล้วกด **Create repository**

### ขั้นตอนที่ 2: Push โค้ดขึ้น GitHub
เปิด Terminal ในโฟลเดอร์โปรเจกต์นี้ (`c:\Research\portfolio`) แล้วรันคำสั่ง:
```bash
git init
git add .
git commit -m "feat: initial portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### ขั้นตอนที่ 3: เปิดใช้งาน GitHub Pages
1. ในหน้า GitHub Repository ของคุณ เข้าไปที่แท็บ **Settings**
2. เมนูด้านซ้ายเลือก **Pages**
3. ที่หัวข้อ **Build and deployment**:
   - Source: เลือก **Deploy from a branch**
   - Branch: เลือก **main** และโฟลเดอร์ **/(root)**
4. กดปุ่ม **Save**
5. รอ 1-2 นาที คุณจะได้ URL เช่น:
   👉 `https://<your-username>.github.io/`

---

## 📝 วิธีแก้ไขข้อมูลเป็นของคุณเอง
- **ข้อมูลส่วนตัวและข้อความ**: เปิดไฟล์ [index.html](file:///c:/Research/portfolio/index.html) แล้วแก้ไขชื่อ, ประวัติ, ลิงก์ GitHub, LinkedIn, อีเมล และรายการสกิล
- **รูปภาพโปรไฟล์**: นำรูปถ่ายของคุณมาเซฟทับไฟล์ `assets/images/profile.jpg`
- **รูปผลงานโปรเจกต์**: นำรูปภาพสกรีนช็อตผลงานมาใส่ในโฟลเดอร์ `assets/images/`
