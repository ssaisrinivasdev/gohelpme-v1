import { useForm } from "react-hook-form";
import Footer from "../components/UI/Footer";
import Header from "../components/UI/Header";
import GlobalContext from "../store/global-context";
import { useContext } from "react";


export default function Createfund() {
  const globalData = useContext(GlobalContext)
  


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {


    fetch('http://gohelpme.online/api/createfund', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


    // let result = await fetch("http://gohelpme.online/api/createfund", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     }
    //   })
  
    //   const error = await result.json();
    //   console.log(error._id)
    //   console.log(error.error)
    //   console.log(error.message)
    //   console.log(result.status)

  };

  // console.log(watch("title")); // watch input value by passing the name of it

  return (
<div classNameNameName="align-center">
<Header />
<div className="px-7 xl:px-0">
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl mx-auto my-20 flex flex-col">

    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Title
      </label>
      <input {...register("title")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Country
      </label>
      <input {...register("country")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>
  </div>


  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Postcode
      </label>
      <input {...register("zip_code")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        City
      </label>
      <input {...register("city")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>

  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Phone
      </label>
      <input {...register("phone")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Goal
      </label>
      <input {...register("goal")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>
    
  </div>



    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Address
      </label>
      <input {...register("address")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Currency
      </label>
      <input {...register("currency")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Description
      </label>
      <textarea cols={54} rows={10} {...register("long_description")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>
  </div>
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Fund Category
      </label>
      <select {...register("category")} className=" mb-6 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
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



      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        FundType
      </label>
      <select {...register("fund_type")} className=" mb-6 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="Individual">Individual</option>
          <option value="Charity">Charity</option>
          <option value="Others">Others</option>
        
      </select>


      <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Tags
      </label>
      <input placeholder="enter multiple tags seperated by a coma" {...register("tags")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
    </div>
  </div>

      <input type="submit" className={`py-3 px-4 text-center text-black bg-white hover:bg-red-500 hover:text-[#ffffff] rounded-2xl shadow block lg:inline drop-shadow-md`} />
    </form>
    </div>
    <Footer />
    </div>
  );
}



