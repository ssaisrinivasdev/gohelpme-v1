import React from 'react'
import InfoCards from '../InfoCards'
import Menu from '../Menu'
import Stats from '../stats'


function DashboardUi() {
  return (
    <div>
    <div className='py-10 xl:gap-7 xl:flex xl:flex-row flex flex-col gap-10 mx-11'>
      <InfoCards />
      <InfoCards />
      <InfoCards />
      <InfoCards />
      
    </div>
    <div className='max-lg:overflow-x-scroll mx-11 max-lg:w-[330px]'>
    <Stats />
    </div>
    </div>
  )
}

export default DashboardUi