import React from 'react';
import './App.css';     
function App() {
  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      
<div class="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
<p className="text-center font-bold text-3xl" style={{zIndex: "1"}}>Responsive Timeline</p>
            <div class="relative z-10">
                <img
                    src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    class="timeline-img"
                />
                <div class="timeline-container">
                    <div class="timeline-pointer" aria-hidden="true"></div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        <span
                            class="font-bold text-indigo-600 text-sm tracking-wide"
                            >Jan 2021</span
                        >
                        <h1 class="text-2xl font-bold pt-1">
                            An amazing travel
                        </h1>
                        <p class="pt-1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ex iste suscipit reiciendis, perferendis vel
                            consequuntur cupiditate ad commodi provident,
                            sapiente veniam sed autem.
                        </p>
                    </div>
                </div>
            </div>
            <div class="relative z-10">
                <img
                    src="https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    class="timeline-img"
                />
                <div class="timeline-container timeline-container-left">
                    <div
                        class="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        <span
                            class="font-bold text-indigo-600 text-sm tracking-wide"
                            >Aug 2020</span
                        >
                        <h1 class="text-2xl font-bold pt-1">A trip far away</h1>
                        <p class="pt-1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ex iste suscipit reiciendis, perferendis vel
                            consequuntur cupiditate ad commodi provident,
                            sapiente veniam sed
                        </p>
                    </div>
                </div>
            </div>
            <div class="relative z-10">
                <img
                    src="https://images.pexels.com/photos/2906807/pexels-photo-2906807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                    alt=""
                    class="timeline-img"
                />
                <div class="timeline-container">
                    <div class="timeline-pointer" aria-hidden="true"></div>
                    <div class="bg-white p-6 rounded-md shadow-md">
                        <span
                            class="font-bold text-indigo-600 text-sm tracking-wide"
                            >March 2020</span
                        >
                        <h1 class="text-2xl font-bold pt-1">Solo Trip</h1>
                        <p class="pt-1">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ex iste suscipit reiciendis, perferendis vel
                            consequuntur cupiditate ad commodi provident,
                            sapiente veniam sed autem, perspiciatis
                        </p>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default App;
