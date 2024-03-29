import React from "react";
import { useForm } from "react-hook-form";
import useUserFetch from "../../hooks/use-userFetch";

function ProfilePayments(props) {
  const userIn = useUserFetch();
  // console.log(userIn.response);0
  const userData = userIn?.response;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handler = async (data) => {
    const res = await fetch("http://gohelpme.online/api/update/user/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...data,
        email: props.email}),
    });

    if (res.status >= 200 && res.status <= 205) {
      return alert("Updated Paypal address Successfully");
    }else{
      return alert("Something went wrong try again");
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
                {userData?.payment_request == "Requested" && (
                  <div>
                    <p>✅Updated</p>
                    <input
                      placeholder="paypal.me/your_paypal_id"
                      defaultValue={userData?.paypal_address}
                      {...register("paypal_address")}
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      type="text"
                      id="paypal"
                    />
                    <input
                      defaultValue={userData?.paypal_address}
                      {...register("payment_request")}
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      type="text"
                      id="paypal"
                      value="Requested"
                      hidden
                    />
                    <input
                      type="submit"
                      value="Change Mail"
                      class="cursor-pointer w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    />
                  </div>
                )}
                {userData?.payment_request == "Approved" && (
                  <div>
                    <p>✅Approved</p>
                    <input
                      placeholder={userData?.paypal_address}
                      defaultValue={userData?.paypal_address}
                      {...register("paypal")}
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      type="text"
                      id="paypal"
                      disabled
                    />

                    <input
                      type="submit"
                      value="Change Mail"
                      class="cursor-pointer w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    />
                  </div>
                )}
                {userData?.payment_request == "Rejected" && (
                  <div>
                    <p>❌Rejected</p>
                    <p>Reason: Reported as Spam</p>
                    <input
                      placeholder={userData?.paypal_address}
                      defaultValue={userData?.paypal_address}
                      {...register("paypal")}
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      type="text"
                      id="paypal"
                      disabled
                    />

                    <input
                      type="submit"
                      value="Update"
                      class="cursor-pointer w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    />
                  </div>
                )}
                {userData?.payment_request == "NotRequested" && (
                  <div>
                    <p>Paypal Address</p>
                    <input
                      placeholder="paypal.me/your_paypal_id"
                      defaultValue={userData?.paypal_address}
                      {...register("paypal_address")}
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      type="text"
                      id="paypal"
                    />
                    <input
                      defaultValue={userData?.paypal_address}
                      {...register("payment_request")}
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      type="text"
                      id="paypal"
                      value="Requested"
                      hidden
                    />

                    <input
                      type="submit"
                      value="Update"
                      class="cursor-pointer w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-color1 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    />
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePayments;
