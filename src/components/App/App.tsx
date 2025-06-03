function App() {
  return (
    <div className="bg-gray-900 mx-auto my-10 py-10 container">
      <h1 className="mt-22.5 font-bold text-blue-900 text-4xl text-center">
        React + Tailwind
      </h1>
      <div className="bg-blue-500 mx-auto mt-30 border-4 border-amber-400 rounded-4xl w-30 text-center">
        Это блок
      </div>
      <button className="block bg-red-600 hover:bg-red-400 mx-auto mt-20 rounded-full w-1/3 text-white transition-color duration-900">
        Кнопка
      </button>
      <div className="flex md:flex-row flex-col justify-around items-center bg-gray-200 m-10 p-6">
        <div className="flex flex-col items-center bg-white shadow-lg m-2 p-4 rounded-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LMEZ98BFIeJ67iVA4E4uSuL22xygYJ2kaQ&s"
            alt="Рисунок 1"
            className="mb-2 rounded-full w-40 max-h-24 hover:scale-105 transition-transform duration-300 transform"
          />
          <h2 className="font-semibold text-xl">Заголовок 1</h2>
          <p className="text-gray-600"></p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg m-2 p-4 rounded-lg">
          <img
            src="https://na-zapade-mos.ru/files/data/user/AiF/olga.k/files/2020/2020.07.30-1596116320.3183_nature-3474826-1920-1.jpg"
            alt="Рисунок 2"
            className="mb-2 rounded-full w-40 max-h-24 hover:scale-105 transition-transform duration-300 transform"
          />
          <h2 className="font-semibold text-xl">Заголовок 1</h2>
          <p className="text-gray-600"></p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg m-2 p-4 rounded-lg">
          <img
            src="https://oclo.ru/wp-content/uploads/2023/10/priroda-rossii-6.webp"
            alt="Рисунок 3"
            className="mb-2 rounded-full w-40 max-h-24 hover:scale-105 transition-transform duration-300 transform"
          />
          <h2 className="font-semibold text-xl">Заголовок 1</h2>
          <p className="text-gray-600"></p>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://kudann.ru/uploads/b6b4164a5bd6bb8d7b91a5f24fd42d6b.jpeg"
            alt="Рисунок"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 transform"
          />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://kudann.ru/uploads/b6b4164a5bd6bb8d7b91a5f24fd42d6b.jpeg"
            alt="Рисунок"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 transform"
          />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://kudann.ru/uploads/b6b4164a5bd6bb8d7b91a5f24fd42d6b.jpeg"
            alt="Рисунок"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 transform"
          />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://kudann.ru/uploads/b6b4164a5bd6bb8d7b91a5f24fd42d6b.jpeg"
            alt="Рисунок"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 transform"
          />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://kudann.ru/uploads/b6b4164a5bd6bb8d7b91a5f24fd42d6b.jpeg"
            alt="Рисунок"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 transform"
          />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://kudann.ru/uploads/b6b4164a5bd6bb8d7b91a5f24fd42d6b.jpeg"
            alt="Рисунок"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 transform"
          />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://kudann.ru/uploads/b6b4164a5bd6bb8d7b91a5f24fd42d6b.jpeg"
            alt="Рисунок"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 transform"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center bg-gray-100 p-6">
        <div className="flex flex-col bg-white shadow-md m-4 p-4 rounded-lg w-64">
          <h2 className="font-bold text-lg">Карточка 1</h2>
          <p className="text-gray-600">Это описание первой карточки</p>
          <button className="bg-blue-500 mt-2 py-2 rounded-lg text-white cursor-pointer">
            Действие
          </button>
        </div>
        <div className="flex flex-col bg-white shadow-md m-4 p-4 rounded-lg w-64">
          <h2 className="font-bold text-lg">Карточка 2</h2>
          <p className="text-gray-600">Это описание второй карточки</p>
          <button className="bg-blue-500 mt-2 py-2 rounded-lg text-white cursor-pointer">
            Действие
          </button>
        </div>
        <div className="flex flex-col bg-white shadow-md m-4 p-4 rounded-lg w-64">
          <h2 className="font-bold text-lg">Карточка 3</h2>
          <p className="text-gray-600">Это описание третьей карточки</p>
          <button className="bg-blue-500 mt-2 py-2 text-white cursor-pointer">
            Действие
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;