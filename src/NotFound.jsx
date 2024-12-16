import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  // Function to handle going back
  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1); // Go back if there's a previous page
    } else {
      navigate('/'); // Navigate to the home page if no history
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid place-items-center py-6">
        <h1 className="text-4xl font-bold my-4">Error 404</h1>
        <p className="text-xl font-semibold my-2">Oops! The requested page wasn't found.</p>
        <button
          className="border rounded-xl px-2 py-1 my-2 hover:bg-gray-200 transition ease-in-out duration-500"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
