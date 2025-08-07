# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

เว็บแอปพลิเคชันสำหรับสุ่มรูปแมวน่ารัก พร้อมระบบล็อกอินและแสดงความคิดเห็นแบบเรียลไทม์ โดยใช้ React.js และตกแต่งด้วย Tailwind CSS เพื่อประสบการณ์ใช้งานที่สวยงามและทันสมัย

🔧 ฟีเจอร์หลัก
✅ ระบบล็อกอินจำลอง (Fake Login)

🐱 สุ่มภาพแมวแบบเรียลไทม์จาก API

💬 แสดงความคิดเห็น พร้อมลบได้

🎨 UI สวยงาม ดูสะอาดตา พร้อมใช้งาน

🛠️ เทคโนโลยีที่ใช้
React.js
Vite
Tailwind CSS
The Cat API

🧱 โครงสร้าง Component
src/
│
├── components/
│ ├── Header.jsx // แสดงชื่อแอปและผู้ใช้งาน
│ ├── LoginForm.jsx // ฟอร์มล็อกอินผู้ใช้งาน
│ ├── CatImage.jsx // ส่วนแสดงและสุ่มภาพแมว
│ └── CommentSection.jsx // ระบบแสดงความคิดเห็น
│
├── App.jsx // รวม Component หลัก
└── main.jsx // จุดเริ่มต้นของแอป

👨‍💻 ผู้พัฒนา
นันทกานต์ ศิริตันตานนท์
