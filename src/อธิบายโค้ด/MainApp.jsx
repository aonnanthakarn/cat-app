import React from "react"; // นำเข้า React library
import Header from "./Header"; // นำเข้าคอมโพเนนต์ Header
import CatImage from "./CatImage"; // นำเข้าคอมโพเนนต์ CatImage (ใช้แสดงรูปแมว)
import CommentSection from "./CommentSection"; // นำเข้าคอมโพเนนต์ CommentSection (ใช้แสดงความคิดเห็น)

// สร้างคอมโพเนนต์หลักของแอป MainApp รับ props มาสองตัวคือ user และ onLogout
const MainApp = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      {/* กล่องหลักของหน้า มีพื้นหลังสีเทาอ่อน และความสูงเต็มจอ */}
      <Header user={user} onLogout={onLogout} />{" "}
      {/* แสดง Header ด้านบน โดยส่งข้อมูลผู้ใช้และฟังก์ชันออกจากระบบไปด้วย */}
      <div className="max-w-2xl mx-auto px-4">
        {" "}
        {/* กล่องเนื้อหาหลัก จัดกึ่งกลางหน้า กำหนดความกว้างสูงสุด และมี padding */}
        <div className="mb-6">
          {" "}
          {/* กล่องข้อความต้อนรับ */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            สวัสดี {user.name}!
          </h2>
        </div>
        <CatImage /> {/* แสดงรูปแมวแบบสุ่ม */}
        <CommentSection currentUser={user} />{" "}
        {/* แสดงส่วนความคิดเห็น โดยส่งข้อมูลผู้ใช้ปัจจุบันไปให้ */}
      </div>
    </div>
  );
};

export default MainApp; // ส่งออกคอมโพเนนต์ MainApp เพื่อให้ไฟล์อื่นเรียกใช้ได้
