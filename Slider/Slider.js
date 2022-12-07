import React from "react";
//These are Third party packages for smooth slideshow

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";



const Slideshow = ({images}) => {
	//Array of Images
	const images1 = [
		images[0],
		images[1],
		images[2],
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div className="w-[40px] mx-8 cursor-pointer">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 hover:bg-slate-50 drop-shadow-md">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

			</div>
		),
		nextArrow: (
			<div className="w-[40px] mx-6 cursor-pointer" >
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10 hover:bg-slate-50 drop-shadow-md">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

			</div>
		),
	};
	return (
		<div className="m-10">
			

			<Zoom {...zoomInProperties}>
				{images1.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<img
							class="aspect-square w-full rounded-xl object-cover"
							src={each}
						/>
					</div>
				))}
        </Zoom>
		</div>
	);
};

export default Slideshow;