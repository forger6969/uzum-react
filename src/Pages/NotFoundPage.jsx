import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  document.title = `page not found`

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100 text-gray-800 p-4 fixed top-0 left-0">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-6 text-center">
        Упс! Страница, которую вы ищете, не существует или была удалена.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
      >
        Вернуться на главную
      </button>
    </div>
  );
};

export default NotFoundPage;
