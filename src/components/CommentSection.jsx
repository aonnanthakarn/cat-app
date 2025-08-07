// src/components/CommentSection.jsx
import React, { useState } from "react";

const CommentSection = ({ currentUser }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment.trim(),
        user: currentUser,
        timestamp: new Date().toLocaleString("th-TH"),
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  const deleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-xl">💬</span>
        <h3 className="text-xl font-semibold text-gray-800">ความคิดเห็น</h3>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
          {comments.length}
        </span>
      </div>

      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex space-x-3">
          <div
            className={`w-10 h-10 ${currentUser.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
          >
            {currentUser.name.charAt(0)}
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={`${currentUser.name} คิดอย่างไรกับน้องแมวตัวนี้...`}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              rows="3"
            />
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-gray-500">
                {newComment.length}/1000 ตัวอักษร
              </span>
              <button
                onClick={addComment}
                disabled={!newComment.trim()}
                className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors"
              >
                ส่งความคิดเห็น
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="text-4xl mb-2">🤔</p>
            <p className="text-lg font-medium">ยังไม่มีความคิดเห็น</p>
            <p className="text-sm">
              เป็นคนแรกที่แสดงความคิดเห็นเกี่ยวกับน้องแมวตัวนี้!
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex space-x-3">
              <div
                className={`w-10 h-10 ${comment.user.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
              >
                {comment.user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg p-4">
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

export default CommentSection;
