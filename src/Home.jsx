import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Hello World!
        </h1>
        <p className="text-lg text-gray-600 px-6">
          Explore pre-made components for Vite React.js + Tailwind CSS apps, along with theory explanations for better understanding.
        </p>
      </header>

      {/* Action Section with Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
        <Link to="/fundamentals">
          <button
            className="h-10 w-40 border border-blue-600 bg-blue-600 text-white rounded-2xl transition hover:bg-blue-700 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Learn the Fundamentals"
          >
            Fundamentals
          </button>
        </Link>
        <Link to="/navbar">
          <button
            className="h-10 w-40 border border-green-600 bg-green-600 text-white rounded-2xl transition hover:bg-green-700 hover:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Explore Navbars"
          >
            Navbars
          </button>
        </Link>
        <Link to="/footer">
          <button
            className="h-10 w-40 border border-purple-600 bg-purple-600 text-white rounded-2xl transition hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Explore Footers"
          >
            Footers
          </button>
        </Link>
        <Link to="/card">
          <button
            className="h-10 w-40 border border-yellow-600 bg-yellow-600 text-white rounded-2xl transition hover:bg-yellow-700 hover:border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Explore Cards"
          >
            Cards
          </button>
        </Link>
        <Link to="/button">
          <button
            className="h-10 w-40 border border-yellow-600 bg-yellow-600 text-white rounded-2xl transition hover:bg-yellow-700 hover:border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Explore Buttons"
          >
            Buttons
          </button>
        </Link>
        <Link to="/dropdown">
          <button
            className="h-10 w-40 border border-yellow-600 bg-yellow-600 text-white rounded-2xl transition hover:bg-yellow-700 hover:border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Explore Dropdowns"
          >
            Dropdown
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
