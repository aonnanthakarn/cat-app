// นำเข้า useState จาก React สำหรับการจัดการ state ภายใน component
import React, { useState } from "react";

// สร้างคอมโพเนนต์ CommentSection โดยรับ currentUser เป็น props
const CommentSection = ({ currentUser }) => {
  // สร้าง state สำหรับเก็บความคิดเห็นทั้งหมด
  const [comments, setComments] = useState([]);
  // สร้าง state สำหรับเก็บข้อความความคิดเห็นใหม่ที่ผู้ใช้กำลังพิมพ์
  const [newComment, setNewComment] = useState("");

  // ฟังก์ชันสำหรับเพิ่มความคิดเห็นใหม่
  const addComment = () => {
    if (newComment.trim()) {
      // สร้างอ็อบเจกต์ความคิดเห็นใหม่
      const comment = {
        id: Date.now(), // ใช้ timestamp เป็น id
        text: newComment.trim(), // ตัดช่องว่างหน้าหลัง
        user: currentUser, // เก็บข้อมูลผู้ใช้ปัจจุบัน
        timestamp: new Date().toLocaleString("th-TH"), // เวลาปัจจุบันแบบไทย
      };
      // เพิ่มความคิดเห็นใหม่เข้า array เดิม
      setComments([...comments, comment]);
      // เคลียร์กล่องข้อความ
      setNewComment("");
    }
  };

  // ฟังก์ชันสำหรับลบความคิดเห็นตาม id
  const deleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    // กล่องหลักของ section ความคิดเห็น
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      {/* หัวข้อ "ความคิดเห็น" พร้อมไอคอนและตัวนับจำนวน */}
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-xl">💬</span>
        <h3 className="text-xl font-semibold text-gray-800">ความคิดเห็น</h3>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
          {comments.length}
        </span>
      </div>

      {/* กล่องพิมพ์ข้อความใหม่ */}
      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex space-x-3">
          {/* รูป avatar ของผู้ใช้ */}
          <div
            className={`w-10 h-10 ${currentUser.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
          >
            {currentUser.name.charAt(0)} {/* แสดงอักษรแรกของชื่อ */}
          </div>
          <div className="flex-1">
            {/* กล่อง textarea สำหรับพิมพ์ความคิดเห็น */}
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)} // อัปเดต state
              placeholder={`${currentUser.name} คิดอย่างไรกับน้องแมวตัวนี้...`}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              rows="3"
            />
            <div className="flex justify-between items-center mt-3">
              {/* แสดงจำนวนตัวอักษร */}
              <span className="text-sm text-gray-500">
                {newComment.length}/1000 ตัวอักษร
              </span>
              {/* ปุ่มส่งความคิดเห็น */}
              <button
                onClick={addComment}
                disabled={!newComment.trim()} // ปิดถ้าไม่มีข้อความ
                className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors"
              >
                ส่งความคิดเห็น
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* แสดงรายการความคิดเห็น */}
      <div className="space-y-4">
        {/* ถ้ายังไม่มีความคิดเห็น */}
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="text-4xl mb-2">🤔</p>
            <p className="text-lg font-medium">ยังไม่มีความคิดเห็น</p>
            <p className="text-sm">
              เป็นคนแรกที่แสดงความคิดเห็นเกี่ยวกับน้องแมวตัวนี้!
            </p>
          </div>
        ) : (
          // ถ้ามีความคิดเห็นแล้ว แสดงแต่ละรายการ
          comments.map((comment) => (
            <div key={comment.id} className="flex space-x-3">
              {/* รูป avatar ของผู้คอมเมนต์ */}
              <div
                className={`w-10 h-10 ${comment.user.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
              >
                {comment.user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg p-4">
                  {/* แสดงชื่อและเวลาพร้อมปุ่มลบถ้าเป็นของตัวเอง */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">
                      {comment.user.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        {comment.timestamp}
                      </span>
                      {comment.user.id === currentUser.id && (
                        <button
                          onClick={() => deleteComment(comment.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                          title="ลบความคิดเห็น"
                        >
                          🗑️
                        </button>
                      )}
                    </div>
                  </div>
                  {/* ข้อความความคิดเห็น */}
                  <p className="text-gray-700 leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// ส่งออกคอมโพเนนต์ CommentSection ไปใช้ที่อื่น
export default CommentSection;
