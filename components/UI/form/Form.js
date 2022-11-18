
import React from 'react'
import { useForm } from "react-hook-form";
import GlobalContext from "../../../store/global-context";
import { useContext } from "react";
import { useRouter } from "next/router";

function Form() {
  const globalData = useContext(GlobalContext)
  const router = useRouter()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async data => {

    console.log(data)

    // const formData = new FormData();
    // formData.append("images", data.images[0]);

    const formData  = new FormData();

  for(const name in data) {
    formData.append(name, data[name]);
  }
  data.images.map((item) => {
    formData.append("images", item);
  }
  )
  

    const res = await fetch("http://gohelpme.online/api/createfund", {
        method: "POST",
        body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
      const {fund} = data
      router.push("/fundraisers/" + fund._id)
    })
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));

    



    // fetch('http://gohelpme.online/api/createfund', {
    //   method: 'POST', // or 'PUT'
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //     const {fund} = data
    //     router.push("/fundraisers/" + fund._id)
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });




  };

  return (
    <div className=" max-w-4xl mx-auto">
    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-4">
          <div>
            <label className="sr-only" for="name">Title</label>
            <input
            {...register("title")}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Title"
              type="text"
              id="title"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">Country</label>
              <input
              {...register("country")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Country"
                type="text"
                id="country"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">Phone</label>
              <input
              {...register("phone")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          
          
          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
            <label className="sr-only" for="phone">Zip</label>
              <input
              {...register("zip_code")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Zip Code"
                type="number"
                id="zip"
              />
            </div>

            <div>
            <label className="sr-only" for="phone">City</label>
              <input
              {...register("city")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="City"
                type="text"
                id="city"
              />
            </div>

            <div>
            <label className="sr-only" for="phone">Goal</label>
              <input
              {...register("goal")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Goal"
                type="number"
                id="goal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
            <label className="sr-only" for="phone">Currency</label>
              <input
              {...register("currency")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Currency"
                type="text"
                id="currency"
              />
            </div>

            <div>
      <select {...register("category")} className=" mb-6 block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="Medical">Medical</option>
          <option value="Memorial">Memorial</option>
          <option value="Emergency">Emergency</option>
          <option value="NonProfit">NonProfit</option>
          <option value="Emergency">FinancialEmergency</option>
          <option value="Animals">Animals</option>
          <option value="Environment">Environment</option>
          <option value="Business">Business</option>
          <option value="Community">Community</option>
          <option value="Competition">Competition</option>
          <option value="Creative">Creative</option>
          <option value="Event">Event</option>
          <option value="Faith">Faith</option>
          <option value="Family">Family</option>
          <option value="Sports">Sports</option>
          <option value="Wishes">Wishes</option>
          <option value="Travel">Travel</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Others">Others</option>
      </select>



            </div>

            <div>
            <select {...register("fund_type")} className=" mb-6 block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="Individual">Individual</option>
          <option value="Charity">Charity</option>
          <option value="Others">Others</option>
        
      </select>
            </div>
          </div>

          <div>
            <label className="sr-only" for="message">Fund description</label>
            <textarea
            {...register("long_description")}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Fund Description"
              rows="8"
              id="description"
            ></textarea>
          </div>

          {/* Images  */}

              <label
              for="dropzone-file"
              className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-md cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>

              <h2 className="mx-3 text-gray-400">Upload Images</h2>

              <input type="file" multiple {...register("images")} />
            </label>



          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">Address</label>
              <input
              {...register("address")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Address"
                type="text"
                id="address"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">Tags</label>
              <input
              {...register("tags")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Tags"
                type="text"
                id="tags"
              />
            </div>
          </div>

          <div className="mt-4">
            <span
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-color1 px-5 text-white sm:w-auto"
            >
            <input type="submit" value="Create fund" className="inline-flex w-full items-center justify-center rounded-lg py-3 text-white sm:w-auto cursor-pointer" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>

              </span>
          </div>
        </form>
      </div>
    </div>
  
  )
}

export default Form