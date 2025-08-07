import React from "react";

const Header = ({ user, onLogout }) => {
  return (
    <div className="bg-white shadow-sm p-4 mb-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          🤩น้อง แมว เหมียว🤩
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div
              className={`w-8 h-8 ${user.color} rounded-full flex items-center justify-center text-white font-bold`}
            >
              {user.name.charAt(0)}
            </div>
            <span className="font-medium text-gray-700">{user.name}</span>
          </div>
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

export default Header;
