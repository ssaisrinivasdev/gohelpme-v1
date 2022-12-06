import React from "react";
import { useForm } from "react-hook-form";
import GlobalContext from "../../store/global-context";
import { useContext } from "react";
import { useRouter } from "next/router";

function FundUpdateForm({fund}) {

  
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    // console.log(data)
    // const formData = new FormData();
    // for (const name in data) {
    //   formData.append(name, data[name]);
    // }
    // formData.append('owner',fund.fund.owner)

    const formData = {...data, owner: fund.fund.owner}
   console.log(formData)
    const res = await fetch("http://gohelpme.online/api/updatefund/"+fund.fund._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const response = await res.json();
    const { error } = response;
    const { message } = response;

    if (res.status >= 200 && res.status <= 205) {
      console.log("Success:", response);
      console.log(error, message);
      const { fund } = response;
      router.push("/fundraisers/" + fund._id);
    } else if (res.status >= 400 && res.status <= 405) {
      alert(`${error} : ${message}`);

      if (
        response.toString().includes("Invalid User") ||
        response.toString().includes("User not logged in ") ||
        response.toString().includes("User Not Found") ||
        response.toString().includes("Please Login to Access")
      ) {
        //Route to LOGIN and change global variable status!!
        router.push("/login");
        globalData[1].setIsLoggedIn(false);
      } else {
        if (error.toString() != "Something went wrong") {
          alert(message.toString());
        } else {
          alert(error.toString());
        }
      }
    }
  };

  return (
    <div className=" max-w-4xl mx-auto my-3">
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-4">
          <div>
            <label className="sr-only" for="name">
              Title
            </label>
            <input
              {...register("title", {
                required: true,
                minLength: 20,
                maxLength: 40,
              })}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Title"
              defaultValue={fund?.fund.title}
              type="text"
              id="title"
            />
            {errors.title && errors.title.type === "required" && (
              <p className="errorMsg">Title is required.</p>
            )}
            {errors.title && errors.title.type === "minLength" && (
              <p className="errorMsg">
                Title should be at-least 30 characters.
              </p>
            )}
            {errors.title && errors.title.type === "maxLength" && (
              <p className="errorMsg">
                Title should not be greater than 50 characters.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">
                Country
              </label>
              <input
              placeholder="Country"
              defaultValue={fund?.fund.Country}
                {...register("Country")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                type="text"
                id="country"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">
                Phone
              </label>
              <input
              placeholder="Phone"
              defaultValue={fund?.fund.phone}
                {...register("phone")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <label className="sr-only" for="phone">
                Zip
              </label>
              <input
              placeholder="Zip Code"
              defaultValue={fund?.fund.Zip_code}
                {...register("Zip_code")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                type="number"
                id="zip"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">
                City
              </label>
              <input
              placeholder="City"
              defaultValue={fund?.fund.city}
                {...register("city")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder={fund?.fund.city}
                type="text"
                id="city"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">
                Goal
              </label>
              <input
              placeholder="Goal"
              defaultValue={fund?.fund.goal}
                {...register("goal")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                type="number"
                id="goal"
                disabled
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <label className="sr-only" for="phone">
                Currency
              </label>
              <input
              placeholder="Currency"
              defaultValue={fund?.fund.Currency}
                {...register("Currency")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                type="text"
                id="currency"
              />
            </div>

            <div>
              <select
                {...register("category")}
                className=" mb-6 block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" defaultValue={fund?.fund.category}
              >
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
              <select
              placeholder="Fund Type"
              defaultValue={fund?.fund.fund_type}
                {...register("fund_type")}
                className=" mb-6 block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="Individual">Individual</option>
                <option value="Charity">Charity</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          <div>
            <label className="sr-only" for="message">
              Fund description
            </label>
            <textarea
            placeholder="Description"
              defaultValue={fund?.fund.long_description}
              {...register("long_description")}
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              rows="8"
              id="description"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">
                Address
              </label>
              <input
              placeholder="Address"
              defaultValue={fund?.fund.Address}
                {...register("Address")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
               
                type="text"
                id="address"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">
                Tags
              </label>
              <input
              placeholder="Tags"
              defaultValue={fund?.fund.Tags}
                {...register("tags")}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
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
              <input
                type="submit"
                value="Save"
                className="inline-flex w-full items-center justify-center rounded-lg py-3 text-white sm:w-auto cursor-pointer"
              />

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
  );
}

export default FundUpdateForm;
