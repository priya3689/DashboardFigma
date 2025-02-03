import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import Nav from "./Nav";

function Home() {
  return (
    <div className=" mx-auto flex flex-row bg-[#081028] text-white">
      <Nav />
      <div className="py-4 px-10 w-full">
      <Dashboard />
      
      {/* Pages Section */}
      
        <div className="border-2 border-[#0B1739] p-2 bg-[#0B1739] rounded-2xl">
          <div className=" ">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
