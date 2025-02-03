import { ArrowDown, CirclePlus,  EyeIcon,  MoveDownRight, MoveUpRight, Star, User } from "lucide-react"


function Dashboard() {
  return (
    <>
      {/* DashBoard header */}
      <div className="flex flex-col lg:flex-row justify-between  items-center gap-2">
        <div>
          <h2 className="text-2xl">Welcome Back,John!</h2>
          <p className="text-color-dd text-[10px]">Measure your advertising ROI ad report website traffic</p>
        </div>
        <div>
          <button className="cursor-pointer bg-[#0A1330] text-white py-1 px-4 rounded hover:opacity-80 mr-3">Export Data  <ArrowDown className="inline h-4 w-4" /></button>
          <button className="cursor-pointer bg-[#CB3CFF]  text-white py-1 px-4 rounded hover:opacity-80">
            Create Report
          </button>
        </div>
      </div>
   {/* DashBoard Sections */}
    <div className="flex flex-col lg:flex-row gap-2 justify-between py-10">
     
      <div className="border rounded-md  border-[#AEB9E1] p-2 w-full ">
        <div className="flex flex-row justify-between">
          <span className="inline"><EyeIcon className="inline h-3 w-3"/><span className="pl-2 text-color-dd text-[10px]">PagesViews</span></span>
        <span className="mt-[-4px]">...</span>
        </div>
        <div>
          <span className="text-3xl">58.4K</span>
          <span className="bg-[#0A3942] border border-[#095049] text-[#14CA74] rounded-sm px-2 py-1 ml-2 text-[8px]">23% <MoveUpRight className="inline" size={12}/></span>
        </div>
      </div>

      <div className="border rounded-md  border-[#AEB9E1] p-2 w-full ">
        <div className="flex flex-row justify-between">
          <span className="inline"><User className="inline h-3 w-3"/><span className="pl-2 text-color-dd text-[10px]">Monthly Users</span></span>
        <span className="mt-[-4px]">...</span>
        </div>
        <div>
          <span className="text-3xl">28.4K</span>
          <span className="bg-[#3C2442] border border-[#5E2D48] text-[#FF5A65] rounded-sm px-2 py-1 ml-2 text-[8px]">23% <MoveDownRight className="inline" size={12}/></span>
        </div>
      </div>
      
      <div className="border rounded-md  border-[#AEB9E1] p-2 w-full ">
        <div className="flex flex-row justify-between">
          <span className="inline"><CirclePlus className="inline h-3 w-3"/><span className="pl-2 text-color-dd text-[10px]">New Sign Up</span></span>
        <span className="mt-[-4px]">...</span>
        </div>
        <div>
          <span className="text-3xl">288</span>
          <span className="bg-[#0A3942] border border-[#095049] text-[#14CA74] rounded-sm px-2 py-1 ml-2 text-[8px]">26% <MoveDownRight className="inline" size={12}/></span>
        </div>
      </div>

      <div className="border rounded-md  border-[#AEB9E1] p-2 w-full ">
        <div className="flex flex-row justify-between">
          <span className="inline"><Star className="inline h-3 w-3"/><span className="pl-2 text-color-dd text-[10px]">Subscriptions</span></span>
        <span className="mt-[-4px]">...</span>
        </div>
        <div>
          <span className="text-3xl">68.4K</span>
          <span className="bg-[#0A3942] border border-[#095049] text-[#14CA74] rounded-sm px-2 py-1 ml-2 text-[8px]">83% <MoveDownRight className="inline" size={12}/></span>
        </div>
      </div>
          
    </div>
  
</>
  )
}

export default Dashboard