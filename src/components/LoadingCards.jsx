import React from "react";

const LoadingCards = () => {
  return (
    <section className="flex justify-center items-center mx-10 my-15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="flex min-w-52 flex-col gap-4">
          <div className="skeleton bg-blue-300 h-32 w-full"></div>
          <div className="skeleton bg-blue-300 h-4 w-28"></div>
          <div className="skeleton bg-blue-300 h-4 w-full"></div>
          <div className="skeleton bg-blue-300 h-4 w-full"></div>
        </div>
        <div className="flex min-w-52 flex-col gap-4">
          <div className="skeleton bg-blue-300 h-32 w-full"></div>
          <div className="skeleton bg-blue-300 h-4 w-28"></div>
          <div className="skeleton bg-blue-300 h-4 w-full"></div>
          <div className="skeleton bg-blue-300 h-4 w-full"></div>
        </div>
        <div className="flex min-w-52 flex-col gap-4">
          <div className="skeleton bg-blue-300 h-32 w-full"></div>
          <div className="skeleton bg-blue-300 h-4 w-28"></div>
          <div className="skeleton bg-blue-300 h-4 w-full"></div>
          <div className="skeleton bg-blue-300 h-4 w-full"></div>
        </div>
        <div className="flex min-w-52 flex-col gap-4">
          <div className="skeleton bg-blue-300 h-32 w-full"></div>
          <div className="skeleton bg-blue-300 h-4 w-28"></div>
          <div className="skeleton bg-blue-300 h-4 w-full"></div>
          <div className="skeleton bg-blue-300 h-4 w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default LoadingCards;
