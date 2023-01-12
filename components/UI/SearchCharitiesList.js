import React from "react";
import { useState } from "react";

function SearchCharitiesList(props){

  const [charities, setCharities] = useState(null);

  async function search(keyword){
    const api = "http://gohelpme.online/api/charities?page=1&keyword="

    const res = await fetch(api+keyword, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
      }
    });

    const response = await res.json();
    if(res.status >= 200 && res.status<=205){
      setCharities(response.charities)
      console.log(charities)
    }else if(res.status >= 400 && res.status<= 404){
      alert(response?.error?.toString())
    }else{
      alert("Something went wrong")
    }

  }


  return(
    <>
    <input
      className="w-full rounded-lg border-gray-200 p-3 text-sm w-96"
      placeholder="Search Charity"
      type="text"
      id="Select Charity"  
      onChange={(e) => {
        search(e.target.value);
      }}
    />
    { charities != null &&
      charities.map((data)=>{
        return(
        <div key={data._id} class="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4"
        onClick={()=>{
          props.handlerClose();
          props.handler(data._id, data.name);
          }}>
          <div class="col-span-2 sm:col-span-1 xl:col-span-1">
            <img
              alt="..."
              src={data.image}
              class="h-24 w-24 rounded"
            />
          </div>
          <div class="col-span-2 sm:col-span-4 xl:col-span-4">
            <h3 class="font-semibold text-black">{data.name}</h3>
            <p>
            {data.description.length > 70 ? (
              data.description.substring(0,70)+"..."
            ):(
              data.description
            )}
            </p>
          </div>
          <a href={data.website} className="text-blue-500">visit</a>
        </div>
        )
      })
      
    }
    </>

  );

}

export default SearchCharitiesList;