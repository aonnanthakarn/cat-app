import React from "react";

const LoginPage = ({ users, onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          🤩น้อง แมว เหมียว🤩
        </h1>
        <p className="text-center text-gray-600 mb-6">
          เลือกผู้ใช้เพื่อเข้าสู่ระบบ
        </p>

        <div className="space-y-3">
          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => onLogin(user)}
              className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center"
            >
              <div
                className={`w-10 h-10 ${user.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}
              >
                {user.name.charAt(0)}
              </div>
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
