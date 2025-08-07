import React from "react";
import Header from "./Header";
import CatImage from "./CatImage";
import CommentSection from "./CommentSection";

const MainApp = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            สวัสดี {user.name}!
          </h2>
        </div>
        <CatImage />
        <CommentSection currentUser={user} />
      </div>
    </div>
  );
};

export default MainApp;
