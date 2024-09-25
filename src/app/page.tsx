import Leftnav from "./Components/Leftnav";
import TopNav from "./Components/Topnav";
import WeatherCard from "./Components/Weathercard";

export default function Home() {
  return (
    <div className="flex h-screen bg-[whitesmoke]">
      <Leftnav />
      <div className="flex flex-col flex-grow">
        <TopNav />
        <main className="flex-grow p-4">
        <WeatherCard/>
        </main>
      </div>
    </div>
  );
}
