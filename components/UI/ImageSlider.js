import React from 'react'

function ImageSlider({image}) {

  console.log(image[0])
  return (
    <div class="flex overflow-scroll scrollbar-hide gap-4 md:grid-cols-1 lg:mt-4">
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
      </div>
  )
}

export default ImageSlider