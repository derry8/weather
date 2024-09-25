import { HomeIcon, ChartBarIcon, CalendarIcon, CogIcon, CloudIcon } from '@heroicons/react/24/outline';

interface NavItem {
  icon: JSX.Element;
  label: string;
}

const Leftnav: React.FC = () => {
  const navItems: NavItem[] = [
    { icon: <HomeIcon className="w-6 h-6 text-white" />, label: "Home" },
    { icon: <CloudIcon className="w-6 h-6 text-gray-400" />, label: "Forecast" },
    { icon: <ChartBarIcon className="w-6 h-6 text-gray-400" />, label: "Analytics" },
    { icon: <CalendarIcon className="w-6 h-6 text-gray-400" />, label: "Calendar" },
    { icon: <CogIcon className="w-6 h-6 text-gray-400" />, label: "Settings" },
  ];

  return (
    <div className="bg-[darkblue] w-20 h-full flex flex-col items-center py-10"> {/* Changed h-screen to h-full */}
      <ul className="space-y-10 pt-4">
        {navItems.map((item, index) => (
          <li key={index} className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center h-16">
              {item.icon}
              <span className="text-gray-400 text-xs mt-2">{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leftnav;
