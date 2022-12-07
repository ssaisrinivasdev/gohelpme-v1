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
				<svg class="w-10 h-10" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
			</div>
		),
		nextArrow: (
			<div className="w-[40px] mx-6 cursor-pointer" >
				<svg class="w-10 h-10 drop-shadow-md" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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