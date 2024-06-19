import { Children } from "react";

function Loader() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center  bg-black gap-4 pb-[6rem]">
      <div className="w-[200px] h-[250px] bg-gray-800 animate-pulse rounded md:w-60 md:h-80"></div>
      <div className="w-3/12 h-4 bg-gray-800 rounded animate-pulse md:w-[7rem]"></div>
      {Children.toArray(Array(5)
        .fill("")
        .map((_) => 
          <div className="h-[8px] w-3/5 mb-4 bg-gray-800 animate-pulse md:w-[30%]"/>
        ))}
    </div>
  );
}

export default Loader;
