// นำเข้า React เพื่อใช้งาน JSX และ Component
import React from "react";

// สร้าง Functional Component ชื่อ Header ซึ่งรับ props มา 2 ตัวคือ user และ onLogout
const Header = ({ user, onLogout }) => {
  return (
    // กล่องหัวด้านบน มีเงาและระยะห่างด้านล่าง
    <div className="bg-white shadow-sm p-4 mb-6">
      {/* จัดให้อยู่กึ่งกลางหน้าจอ กำหนดความกว้างสูงสุด และจัดเรียงแนวนอนระหว่างซ้าย-ขวา */}
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* ชื่อแอป */}
        <h1 className="text-2xl font-bold text-gray-800">
          🤩น้อง แมว เหมียว🤩
        </h1>

        {/* ส่วนของข้อมูลผู้ใช้และปุ่มออกจากระบบ */}
        <div className="flex items-center space-x-4">
          {/* แสดงชื่อผู้ใช้ และ icon วงกลมที่มีตัวอักษรตัวแรกของชื่อ */}
          <div className="flex items-center space-x-2">
            {/* วงกลมสี (กำหนดจาก user.color เช่น bg-blue-500) และตัวอักษรตัวแรกของชื่อ */}
            <div
              className={`w-8 h-8 ${user.color} rounded-full flex items-center justify-center text-white font-bold`}
            >
              {user.name.charAt(0)}
            </div>

            {/* แสดงชื่อผู้ใช้เต็ม */}
            <span className="font-medium text-gray-700">{user.name}</span>
          </div>

          {/* ปุ่มออกจากระบบ (เมื่อคลิกจะเรียกฟังก์ชัน onLogout) */}
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          >
            ออกจากระบบ
          </button>
        </div>
      </div>
    </div>
  );
};

// ส่งออก Component Header เพื่อให้สามารถนำไปใช้ที่อื่นได้
export default Header;
