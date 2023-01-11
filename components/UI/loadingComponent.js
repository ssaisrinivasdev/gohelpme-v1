import React from "react";

function LoadingComponent() {
  return (
    <div className="w-full grid place-items-center">
      <div class="inline-block w-24 h-24 
          border-t-8 
          border-t-indigo-500  
          rounded-full 
          animate-spin">
      </div>
    </div>
  );
}

export default LoadingComponent;
