import React from "react";
import { useForm } from "react-hook-form";

function ProfilePayments() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handler = async (data) => {
    const res = await fetch("http://gohelpme.online/api/update/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status >= 200 && res.status <= 205) {
      return alert("Paypal Verification under Process");
    }
  };

  return (
    <section class="bg-gray-100">
      <div class=" max-w-screen-xl">
        <div class="max-md:w-[280px] lg:w-[600px]">
          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" onSubmit={handleSubmit(handler)} class="space-y-4">
              <div>
                <label class="sr-only" for="name">
                  Your Paypal
                </label>
                <input
                  placeholder="Paypal Address"
                  {...register("paypal")}
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  type="text"
                  id="paypal"
                />
              </div>

              <input
                type="submit"
                value="Update"
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePayments;
