import { BellIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const TopNav = () => {
  return (
    <div className="w-full flex justify-between items-center bg-white py-2 px-6 shadow-md">
      <div className="flex items-center w-1/2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full p-2 pl-4 pr-10 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-[#101f59]"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-[#101f59] absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <BellIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
        <UserIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TopNav;
