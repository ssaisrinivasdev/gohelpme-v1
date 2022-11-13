import React from 'react'
import { getStaticProps } from '../../pages/fundraisers/[fundraiser]'
import ImageSlider from './ImageSlider'
import ProgressBar from './ProgressBar'

function FundData({title, desc, amount, image}) {

  

  console.log(image)


  return (
    <div>
      <section>
  <div class="relative mx-auto max-w-screen-xl px-4 py-8">
    <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">

    {/* here comes the slider */}
      <ImageSlider image={image} />

      <div class="sticky top-0">

      

        <div class="mt-8 flex justify-between">
          <div class="max-w-[35ch]">
            <h1 class="text-2xl font-bold">
              {title}
            </h1>

<div className='drop-shadow-md my-5'><ProgressBar amount={amount} /></div>
<button
              type="submit"
              class="my-10 block rounded bg-color1 px-8 py-2 font-medium text-white text-lg hover:bg-green-500"
            >
              Donate now
            </button>
            
          </div>
        </div>

        <details class="group relative mt-4">
          <summary class="block">
            <div>
              <div class="prose max-w-none group-open:hidden">
                <p>
                  {desc}
                </p>
              </div>

              <span
                class="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
              >
                Read More
              </span>
            </div>
          </summary>

          <div class="prose max-w-none pb-6">
            <p>
            {desc}
            </p>

            <p>
            {desc}
            </p>
          </div>
        </details>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default FundData