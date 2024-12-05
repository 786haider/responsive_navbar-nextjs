
export default function Home() {
  return (
    <div className="flex-col lg:flex-wrap md:flex-row flex items-center justify-center gap-2 mt-10 ">
     
     <div className="flex items-center justify-center bg-red-500 w-[80%] md:w-[20%] h-[15%] ">Home</div>
     <div className="flex items-center justify-center w-[80%] md:w-[20%] bg-green-400 ">About</div>
      <div className="flex items-center justify-center bg-blue-300 w-[80%] md:w-[20%]">Contact</div>
    </div>
  );
}
