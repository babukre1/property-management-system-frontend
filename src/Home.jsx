import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
      <button
        onClick={() => setCount(count * 1)}
        className="p-4 text-white bg-blue-600 rounded-lg "
      >
        +
      </button>
      <div>Count: {count}</div>
      
      <button
        onClick={() => setCount(count > 0 ? count - 1 : count)}
        className="p-4 text-white bg-red-600 rounded-lg "
      >
        -
      </button>
    </div>
  );
};

export default Home;
