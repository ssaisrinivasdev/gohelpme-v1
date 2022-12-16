import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function ProfileForm() {
  const lastName = useSelector((state) => state.lastname);
  const firstName = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

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
      return alert("Updated Successfully");
    }
  };

  return (
    <section class="bg-gray-100">
      <div class=" max-w-screen-xl">
        <div class="max-md:w-[280px] lg:w-[600px]">
          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" onSubmit={handleSubmit(handler)} class="space-y-4">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    {...register("name")}
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="firstname"
                    placeholder="Firstname"
                    defaultValue={firstName}
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    placeholder="Lastname"
                    defaultValue={lastName}
                    {...register("lastname")}
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    type="text"
                    id="lastname"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="name">
                  Name
                </label>
                <input
                  placeholder="Email"
                  defaultValue={email}
                  {...register("email")}
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  type="text"
                  id="email"
                  disabled
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

export default ProfileForm;
