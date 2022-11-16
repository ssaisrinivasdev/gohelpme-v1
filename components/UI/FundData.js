import React from 'react'
import ImageSlider from './ImageSlider'
import ProgressBar from './ProgressBar'
import { useRouter } from 'next/router'

function FundData({title, desc, amount, image, id}) {

  const router = useRouter()

  console.log(id)

  async function handler ()  {

  let result = await fetch("http://gohelpme.online/api/payment", {
    method: "PUT",
    body:JSON.stringify({"id":id,"title":title}),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })

  const data = await result.json();

  const redirectLink = data.redirect_link

  if(redirectLink){
    router.push(redirectLink)
  }


  // const error = await result.json();
  // console.log(error.error)
  // console.log(result.status)



  }


  return (
    <div>
      <section>
  <div className="relative mx-auto max-w-screen-xl px-4 py-8">
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">

    {/* here comes the slider */}
      <ImageSlider image={image} />

      <div className="sticky top-0">

      

        <div className="mt-8 flex justify-between">
          <div className="max-w-[35ch]">
            <h1 className="text-2xl font-bold">
              {title}
            </h1>

            <div classNameName='drop-shadow-md my-5'><ProgressBar amount={amount} /></div>
            <button
            onClick={handler}
              type="button"
              className="my-10 block rounded bg-color1 px-8 py-2 font-medium text-white text-lg hover:bg-green-500"
            >
              Donate now
            </button>
            
          </div>
        </div>

        <details className="group relative mt-4">
          <summary className="block">
            <div>
              <div className="prose max-w-none group-open:hidden">
                <p>
                  {desc}
                </p>
              </div>

              <span
                className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
              >
                Read More
              </span>
            </div>
          </summary>

          <div className="prose max-w-none pb-6">
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