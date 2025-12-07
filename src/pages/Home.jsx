import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <div className="w-full bg-rose-600 text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Welcome to Our E-Commerce Store
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Discover amazing deals on Electronics, Fashion, Accessories and much more.
              Quality products at the best prices!
            </p>

            <Link to="/products">
              <button className="mt-6 bg-white text-rose-600 font-bold px-8 py-3 rounded-lg text-lg shadow-md hover:bg-gray-200 transition">
                Shop Now
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ecommerce"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </div>

      {/* FEATURED SECTIONS */}
      <div className="max-w-6xl mx-auto mt-16 px-6">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div className="bg-rose-600 text-white  rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer">
            <img
              src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">Electronics</h3>
            <p className="text-white  text-sm mt-1">Laptops, Mobiles & More</p>
          </div>

          <div className="bg-rose-600 text-white  rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">Fashion</h3>
            <p className="text-white  text-sm mt-1">Clothes & Accessories</p>
          </div>

          <div className="bg-rose-600 text-white rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1594026112499-ac6e20b2c480?q=80&w=1303&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">Home & Living</h3>
            <p className="text-white  text-sm mt-1">Decoration, Furniture, etc.</p>
          </div>

        </div>

        {/* VIEW PRODUCTS BUTTON */}
        <div className="text-center mt-14">
          <Link to="/products">
            <button className="bg-rose-600 text-white px-10 py-3 rounded-xl text-lg font-semibold hover:bg-rose-900 transition">
              View All Products
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
