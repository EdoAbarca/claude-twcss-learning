import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FloatingButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-4 right-4 flex h-14 w-14 items-center justify-center 
                 rounded-full bg-blue-600 text-white shadow-lg
                 transition-transform hover:scale-110 hover:bg-blue-700
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            <FontAwesomeIcon icon={faPlus} className="h-6 w-6" />
        </button>
    );
};

// Example showing different focus combinations
const FocusExamples = () => {
    return (
        <div className="space-y-4">
            {/* Default browser focus */}
            <button className="bg-blue-600 text-white p-4 rounded-full">
                Default Focus
            </button>

            {/* Only ring */}
            <button className="bg-blue-600 text-white p-4 rounded-full
                         focus:outline-none focus:ring-2 focus:ring-blue-500">
                Ring without offset
            </button>

            {/* Ring with offset */}
            <button className="bg-blue-600 text-white p-4 rounded-full
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Ring with offset
            </button>
        </div>
    );
};



const RingExamples = () => {
    // Examples of different ring customizations
    return (
        <>
        <button className="focus:ring-4"></button>                  {/* Thicker ring */ }
        <button className="focus:ring-offset-4"></button>         {/* Larger offset */ }
        <button className="focus:ring-blue-300"></button>           {/* Lighter color */ }
        <button className="focus:ring-opacity-50"></button>         {/* Semi-transparent */ }
        </>
    )
}

export default FloatingButton;