import React from "react";

// สร้างคอมโพเนนต์ LoginPage รับ props: users (รายชื่อผู้ใช้) และ onLogin (ฟังก์ชันเข้าสู่ระบบ)
const LoginPage = ({ users, onLogin }) => {
  return (
    // กำหนดให้หน้า Login เต็มหน้าจอ และจัดกึ่งกลางทั้งแนวตั้ง-แนวนอน
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* กล่อง Login แบบมีเงาและขอบมน ดูเป็นมืออาชีพ */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* หัวเรื่องหลักของหน้า */}
        <h1 className="text-3xl font-bold text-center mb-6">
          🤩น้อง แมว เหมียว🤩
        </h1>

        {/* คำอธิบายให้ผู้ใช้เลือกบัญชีเพื่อเข้าสู่ระบบ */}
        <p className="text-center text-gray-600 mb-6">
          เลือกผู้ใช้เพื่อเข้าสู่ระบบ
        </p>

        {/* ส่วนแสดงปุ่มผู้ใช้ทั้งหมดแบบ list */}
        <div className="space-y-3">
          {/* วนลูปแสดงปุ่ม Login สำหรับแต่ละผู้ใช้ */}
          {users.map((user) => (
            <button
              key={user.id} // ต้องมี key เพื่อให้ React จัดการ efficiently
              onClick={() => onLogin(user)} // เมื่อคลิกจะเรียกฟังก์ชัน onLogin พร้อมส่งข้อมูล user
              className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center"
            >
              {/* แสดงชื่อย่อของผู้ใช้ในวงกลมสีตาม user.color */}
              <div
                className={`w-10 h-10 ${user.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}
              >
                {user.name.charAt(0)} {/* ดึงอักษรตัวแรกของชื่อผู้ใช้ */}
              </div>

              {/* แสดงชื่อเต็มและ username ของผู้ใช้ */}
              <div className="text-left">
                <div className="font-semibold text-gray-800">{user.name}</div>
                <div className="text-sm text-gray-500">@{user.username}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
