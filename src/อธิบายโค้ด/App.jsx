// นำเข้า React และ useState hook สำหรับใช้สถานะ (state)
import React, { useState } from "react";

// นำเข้า Component LoginPage สำหรับหน้าเข้าสู่ระบบ
import LoginPage from "./components/LoginPage";

// นำเข้า Component MainApp สำหรับหน้าแสดงรูปแมว + คอมเมนต์
import MainApp from "./components/MainApp";

// สร้าง Component หลักของแอป
const App = () => {
  // กำหนด state สำหรับเก็บผู้ใช้ที่กำลังล็อกอินอยู่ (เริ่มต้น = null คือยังไม่มีผู้ใช้ล็อกอิน)
  const [currentUser, setCurrentUser] = useState(null);

  // สร้าง array ของผู้ใช้ที่สามารถล็อกอินได้ (กำหนด ID, username, ชื่อ และสีปุ่ม)
  const users = [
    { id: 1, username: "catLover1", name: "ร๊ากแมว 1", color: "bg-pink-500" },
    { id: 2, username: "catLover2", name: "ทาสแมว 2", color: "bg-blue-500" },
  ];

  // ฟังก์ชันจัดการเมื่อมีการล็อกอิน โดยรับผู้ใช้และบันทึกไว้ใน currentUser
  const handleLogin = (user) => setCurrentUser(user);

  // ฟังก์ชันจัดการเมื่อล็อกเอาต์ โดยเคลียร์ค่า currentUser กลับเป็น null
  const handleLogout = () => setCurrentUser(null);

  // ถ้ามีผู้ใช้ล็อกอินแล้ว ให้แสดง MainApp และส่ง props ให้ใช้งานได้ (user + logout)
  // ถ้ายังไม่มีผู้ใช้ล็อกอิน ให้แสดงหน้า LoginPage และส่ง props user + login function
  return currentUser ? (
    <MainApp user={currentUser} onLogout={handleLogout} />
  ) : (
    <LoginPage users={users} onLogin={handleLogin} />
  );
};

// ส่งออก Component App ไปใช้งานในโปรเจกต์
export default App;
