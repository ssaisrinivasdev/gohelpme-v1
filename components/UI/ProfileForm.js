import React from 'react'

function ProfileForm() {
  return (
    <section class="bg-gray-100">
  <div class=" max-w-screen-xl py-16 sm:px-6 lg:px-8 max-md:w-[500px] mx-auto">
    <div class="max-md:w-[400px] mx-auto lg:w-[600px]">

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="First Name"
                type="text"
                id="firstname"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Email"
              type="text"
              id="email"
            />
          </div>

          <input
                type="submit"
                value="SignIn"
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
          
          
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default ProfileForm