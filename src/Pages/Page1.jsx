import { MoveUpRight } from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

function Page1() {
  const data = [
    { name: 'Jan', series1: 4000, series2: 2400 },
    { name: 'Feb', series1: 3000, series2: 1398 },
    { name: 'Mar', series1: 2000, series2: 9800 },
    { name: 'Apr', series1: 2780, series2: 3908 },
    { name: 'May', series1: 1890, series2: 4800 },
    { name: 'Jun', series1: 2390, series2: 3800 },
    { name: 'Jul', series1: 3490, series2: 4300 },
    { name: 'Aug', series1: 1890, series2: 1890 },
    { name: 'Sep', series1: 2890, series2: 6800 },
    { name: 'Oct', series1: 1890, series2: 1800 },
    { name: 'Nov', series1: 4800, series2: 9800 },
    { name: 'Dec', series1: 1690, series2: 1890 },
  ];

  return (
    <div className=''>
    <div className='flex flex-row items-center justify-between'>
        <div className="">
          <span className="inline"><span className="pl-2 text-color-dd text-[10px]">Total Revenue</span></span>
        
        <div className='items-center'>
          <span className="text-3xl">58.4K</span>
          <span className="bg-[#0A3942] border border-[#095049] text-[#14CA74] rounded-sm px-2 py-1 ml-2 text-[8px]">23% <MoveUpRight className="inline" size={12}/></span>
        </div>
        </div>
        <div><span className='border-2  rounded-4xl  bg-fuchsia-700'>.</span></div>
      </div>
    <ResponsiveContainer  height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorSeries1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#575DFF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#575DFF" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorSeries2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#57C3FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#575DFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="series1"
          stroke="#CB3CFF"
          fill="url(#colorSeries1)"
        />
        <Area
          type="monotone"
          dataKey="series2"
          stroke="#00C2FF"
          fill="url(#colorSeries2)"
        />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  );
}

export default Page1;
