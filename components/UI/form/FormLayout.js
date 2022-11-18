import React from 'react'
import Form from './Form'

function FormLayout() {
  return (
    <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="relative h-96 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="/images/createfundimg.png"
      class="absolute inset-0 h-full w-full object-cover"
    />
  </div>
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg text-center text-color1">
      <h1 class="text-2xl font-bold sm:text-3xl">Create a fund</h1>
    </div>
    <Form />
    </div>

  
</section>
  )
}

export default FormLayout