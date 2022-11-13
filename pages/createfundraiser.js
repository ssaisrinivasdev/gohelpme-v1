import React from 'react'
import ButtonsGrid from '../components/UI/ButtonsGrid'
import Footer from '../components/UI/Footer'
import Header from '../components/UI/Header'



const fundCategories = ["Medical","Memorial","Emergency","NonProfit","FinancialEmergency","Animals","Environment","Business","Community","Competition","Creative","Event","Faith","Family","Sports","Wishes","Travel","Volunteer","Others"]

const fundTypes = ["Individual","Charity","Others"]

function Createfundraiser() {

const datacollector = (data) => {
  console.log(data)
}


  return (
    <div>
      <Header />
      

      <section className="max-w-7xl p-16 my-12 mx-auto bg-white rounded-md shadow-md ">
    <h2 className="text-lg font-semibold text-gray-700 capitalize ">Create a fundraiser</h2>

    <form>
        <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
                <label className="text-gray-700 " for="username">Country</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 " for="emailAddress">Post Code</label>
                <input id="emailAddress" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 " for="password">Fund category</label>
            </div>

<div classNameName='grid gap-5 grid-flow-row grid-cols-5'>
            {fundCategories.map(category => {
              return (
                <ButtonsGrid input={category} data={datacollector} />
              )
            })}

            </div>
            
            <div>
                <label className="text-gray-700 " for="passwordConfirmation">Fund Type</label>
            </div>

            <div classNameName='grid gap-5 grid-flow-row grid-cols-5'>
            {fundTypes.map(category => {
              return (
                <ButtonsGrid input={category} />
              )
            })}

            </div>

            <div>
                <label className="text-gray-700 " for="username">Target</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
            </div>
        </div>

        
        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Create</button>
        </div>

        
    </form>
</section>


      <Footer />
    </div>
  )
}

export default Createfundraiser