import React, { useEffect, useState } from "react";

const CatImage = () => {
  const [catImageUrl, setCatImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadNewCat = async () => {
    setLoading(true);
    setError(false);

    try {
      const timestamp = new Date().getTime();
      const newCatUrl = `https://cataas.com/cat?${timestamp}`;
      setCatImageUrl(newCatUrl);
    } catch (err) {
      console.error("Error loading cat:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNewCat();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
            <p className="text-gray-600">กำลังโหลดรูปแมว...</p>
          </div>
        ) : error ? (
          <div className="text-center text-gray-500">
            <p className="text-4xl mb-2">😿</p>
            <p>โหลดรูปแมวไม่สำเร็จ</p>
          </div>
        ) : catImageUrl ? (
          <img
            src={catImageUrl}
            alt="Random Cat"
            className="w-full h-full object-cover"
            onError={() => {
              console.error("Failed to load cat image");
              setError(true);
            }}
            onLoad={() => setLoading(false)}
          />
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-4xl mb-2">🐱</p>
            <p>กำลังเตรียมรูปแมว...</p>
          </div>
        )}

        <button
          onClick={loadNewCat}
          disabled={loading}
          className="absolute bottom-4 right-4 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white px-4 py-2 rounded-full shadow-lg transition-colors flex items-center space-x-2"
        >
          <span className={loading ? "animate-spin" : ""}>🔄</span>
          <span>แมวใหม่</span>
        </button>
      </div>

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
