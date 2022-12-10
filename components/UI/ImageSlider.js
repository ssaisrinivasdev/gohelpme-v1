import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

// import Button from "@material-ui/core/Button";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import Typography from "@material-ui/core/Typography";
// import { useTheme } from "@material-ui/core/styles";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

import Slider from "../../Slider/Slider";

function ImageSlider({ image, id, status }) {
  useEffect(() => {
    console.log(status);
  }, []);

  // const MyCollection = [
  //   {
  //     label: "First Picture",
  //     imgPath:image[0],
  //   },
  //   {
  //     label: "Second Picture",
  //     imgPath:image[1],
  //   },
  //   {
  //     label: "Third Picture",
  //     imgPath:image[2],
  //   },
  // ];

  // const theme = useTheme();
  // const [index, setActiveStep] = React.useState(0);

  // const goToNextPicture = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const goToPrevPicture = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const router = useRouter();

  const handler = async () => {
    if (status == "not_loggedin") {
      router.push("/login");
    } else {
      const res = await fetch("http://gohelpme.online/api/followfund/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };
  return (
    <div className="relative">
      {status === "not_loggedin" ? (
        <div
          className="absolute top-7 right-3 cursor-pointer z-10"
          onClick={handler}
        >
          <span className="text-sm  inline-block py-1 px-2 uppercase rounded-full bg-slate-100 hover:text-white hover:bg-color1 mx-auto font-medium transition-colors text-red-600 active:text-red-500">
            Follow +
          </span>
        </div>
      ) : (
        ""
      )}

      {status === "not_following" ? (
        <div
          className="absolute top-7 right-3 cursor-pointer z-10"
          onClick={handler}
        >
          <span className="text-sm  inline-block py-1 px-2 uppercase rounded-full bg-slate-100 hover:text-white hover:bg-color1 mx-auto font-medium transition-colors text-red-600 active:text-red-500">
            Follow +
          </span>
        </div>
      ) : (
        ""
      )}

      {status === "following" ? (
        <div
          className="absolute top-7 right-3 cursor-pointer z-10"
          onClick={handler}
        >
          <span className="text-sm  inline-block py-1 px-2 uppercase rounded-full text-white bg-color1 mx-auto font-medium transition-colors ">
            Following
          </span>
        </div>
      ) : (
        ""
      )}

      <Slider images={image} />

      {/* <div class="flex overflow-scroll scrollbar-hide gap-4 md:grid-cols-1 lg:mt-4">
        <img
          alt="Image1"
          src={`${image[0]}`}
          class="aspect-square w-full rounded-xl object-cover"
        />

          <img
            alt="Image2"
            src={`${image[1]}`}
            class="aspect-square w-full rounded-xl object-cover"
          />

          <img
            alt="Image3"
            src={`${image[2]}`}
            class="aspect-square w-full rounded-xl object-cover"
          />
      </div> */}

      {/* <div >
      <div>
        
        <img
          src={MyCollection[index].imgPath}
          class="aspect-square w-full rounded-xl object-cover"
          alt={MyCollection[index].label}
        />
       
          
            <Button
              size="small"
              onClick={goToNextPicture}
            >
              Next
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>

            <Button
              size="small"
              onClick={goToPrevPicture}
            >
              Prev
              {theme.direction !== "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
      </div>
    </div>
 */}
    </div>
  );
}

export default ImageSlider;
