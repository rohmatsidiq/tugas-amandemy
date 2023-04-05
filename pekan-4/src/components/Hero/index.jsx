import React from "react";

function Hero() {
  return (
    <div className="w-screen max-w-[1200px] p-3 mx-auto mt-5">
      <div className="rounded-2xl h-[450px] flex justify-center items-center bg-image-hero overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="bg-hero"
        />
      </div>
    </div>
  );
}

export default Hero;
