import { CloudIcon, PlusIcon, EyeIcon } from '@heroicons/react/24/outline';

const WeatherCard: React.FC = () => {
  return (
    <div className="p-6">
      {/* Current Location Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-sm text-gray-500">Current Location</span>
          <h2 className="text-xl font-semibold">Los Angeles, CA, USA</h2>
        </div>
        <EyeIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>

      {/* Weather Card and Add City */}
      <div className="flex space-x-4">
        {/* Weather Info Card */}
        <div className="flex flex-col rounded-xl overflow-hidden shadow-lg w-2/3 bg-white">
          <img
            src="https://via.placeholder.com/400" // Replace with actual weather image URL
            alt="Weather Image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-start">
              {/* Weather Information */}
              <div>
                <div className="flex items-center space-x-2">
                  <CloudIcon className="w-8 h-8 text-gray-500" /> {/* Weather Icon */}
                  <span className="text-3xl font-bold">12°C</span>
                </div>
                <span className="text-sm text-gray-500">Monday, 07:43 AM</span>
              </div>
              {/* Weather Description */}
              <div className="text-right">
                <span className="text-sm text-gray-500">Partly Cloudy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add City Card */}
        <div className="flex justify-center items-center rounded-xl bg-gray-100 shadow-lg w-1/3">
          <div className="flex flex-col items-center text-gray-400">
            <PlusIcon className="w-10 h-10" />
            <span className="text-lg">Add City</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
