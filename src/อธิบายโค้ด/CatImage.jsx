// นำเข้า React และ Hook ที่จำเป็น
import React, { useEffect, useState } from "react";

// Component สำหรับแสดงภาพแมว
const CatImage = () => {
  // สร้าง state สำหรับเก็บ URL รูปแมว, สถานะโหลด, และ error
  const [catImageUrl, setCatImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // ฟังก์ชันโหลดรูปแมวใหม่
  const loadNewCat = async () => {
    setLoading(true); // เริ่มโหลด
    setError(false); // รีเซ็ต error ก่อนโหลด

    try {
      // สร้าง URL แบบสุ่ม (ใส่ timestamp เพื่อป้องกันการ cache)
      const timestamp = new Date().getTime();
      const newCatUrl = `https://cataas.com/cat?${timestamp}`;
      setCatImageUrl(newCatUrl); // ตั้งค่า URL รูปแมว
    } catch (err) {
      // ถ้ามี error ระหว่างโหลด
      console.error("Error loading cat:", err);
      setError(true);
    } finally {
      setLoading(false); // ไม่ว่า error หรือสำเร็จ ก็หยุดโหลด
    }
  };

  // เมื่อ component โหลดครั้งแรก ให้โหลดรูปแมวทันที
  useEffect(() => {
    loadNewCat();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* พื้นที่สำหรับแสดงรูปแมว */}
      <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
        {loading ? (
          // ถ้ากำลังโหลด
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
            <p className="text-gray-600">กำลังโหลดรูปแมว...</p>
          </div>
        ) : error ? (
          // ถ้าโหลดไม่สำเร็จ
          <div className="text-center text-gray-500">
            <p className="text-4xl mb-2">😿</p>
            <p>โหลดรูปแมวไม่สำเร็จ</p>
          </div>
        ) : catImageUrl ? (
          // ถ้าโหลดสำเร็จและมี URL รูปแมว
          <img
            src={catImageUrl}
            alt="Random Cat"
            className="w-full h-full object-cover"
            onError={() => {
              // ถ้าโหลดรูปไม่ได้
              console.error("Failed to load cat image");
              setError(true);
            }}
            onLoad={() => setLoading(false)} // เมื่อโหลดเสร็จให้หยุดสถานะ loading
          />
        ) : (
          // สถานะเริ่มต้นก่อนโหลดรูป
          <div className="text-center text-gray-500">
            <p className="text-4xl mb-2">🐱</p>
            <p>กำลังเตรียมรูปแมว...</p>
          </div>
        )}

        {/* ปุ่มโหลดรูปแมวใหม่ */}
        <button
          onClick={loadNewCat}
          disabled={loading} // ป้องกันการกดระหว่างโหลด
          className="absolute bottom-4 right-4 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white px-4 py-2 rounded-full shadow-lg transition-colors flex items-center space-x-2"
        >
          <span className={loading ? "animate-spin" : ""}>🔄</span>
          <span>แมวใหม่</span>
        </button>
      </div>

      {/* เครดิตที่มาของรูป */}
      <div className="p-4 bg-gray-50">
        <p className="text-sm text-gray-600 text-center">
          รูปแมวจาก{" "}
          <a
            href="https://cataas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            cataas.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default CatImage;
