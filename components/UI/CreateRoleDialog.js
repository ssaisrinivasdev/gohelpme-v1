import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import ApprovalButton from "./ButtonForTable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { handler } from "tailwind-scrollbar-hide";
import CreateBlog from "./admincomps/CreateBlog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Admin from "../../pages/adminpanel";

export default function CreateRoleDialog() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { roles: ["financial_stats"] },
    //               only January ^ is checked by default
  });
  const [editing, setEditing] = useState(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handler = async (data) => {
    const res = await fetch(`http://gohelpme.online/api/admin/add-subadmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: { ...data, email: data.email + "@admin.com" },
    });

    const response = await res.json();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const createRole = (anchor) => (
    <Box sx={{ width: "auto" }} role="presentation" className="mx-10">
      <div class="flex gap-5 items-center my-10">
        <ArrowBackIcon onClick={toggleDrawer("right", false)} />
        <h3 class="text-3xl font-bold">Add A New Role</h3>
      </div>
      <>
        <div class="mt-10 sm:mt-0">
          <form onSubmit={handleSubmit(handler)}>
            <div className="flex">
              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-4">
                  <div class="my-5">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="text"
                      name="email"
                      id="email"
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-4">
                  <div class="my-5">
                    <label
                      for=""
                      domain
                      class="block text-sm font-medium text-gray-700"
                    >
                      Domain
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      value="@admin.com"
                      placeholder="@admin.com"
                      disabled
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-4">
                <div class="my-5">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="text"
                    name="password"
                    id="password"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-4">
                <div class="my-5">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <select
                    {...register("admin_type")}
                    class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      console.log(e.target.value);
                      if (e.target.value === "Sub-admin") {
                        setEditing(true);
                      }
                      if (e.target.value === "Co-admin") {
                        setEditing(false);
                      }
                    }}
                  >
                    <option>Co-admin</option>
                    <option>Sub-admin</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mt-5 md:col-span-2 md:mt-0">
              {editing ? (
                <div>
                  <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                      <fieldset>
                        <legend class="contents text-base font-medium text-gray-900">
                          Select Roles
                        </legend>
                        <p class="text-sm text-gray-500">
                          The corresponding section access would be granted
                        </p>

                        <div class="mt-4 space-y-4">
                          <div class="flex items-center">
                            <input
                              {...register("roles")}
                              type="checkbox"
                              value="financial_stats"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="push-everything"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Financial Status
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              {...register("roles")}
                              type="checkbox"
                              value="fund_approval"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="push-everything"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Fund Approval
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              {...register("roles")}
                              type="checkbox"
                              value="withdrawal_requests"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="push-everything"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Withdrawal Requests
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              {...register("roles")}
                              type="checkbox"
                              value="blog"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="push-everything"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Blog
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              {...register("roles")}
                              type="checkbox"
                              value="queries"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="push-everything"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Queries
                            </label>
                          </div>

                          <div class="flex items-center">
                            <input
                              {...register("roles")}
                              type="checkbox"
                              value="roles"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500
                          "
                            />
                            <label
                              for="push-everything"
                              class="ml-3 block text-sm font-medium text-gray-700"
                            >
                              Roles
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div class="bg-gray-50 px-4 gap-4 py-3 text-right sm:px-6 flex justify-end ">
                <input
                  type="button"
                  value="Cancel"
                  class="inline-flex justify-center rounded-md border bg-white py-2 px-4 text-sm font-medium text-color1 shadow-sm hover:bg-color1 border-color1 hover:text-white"
                />

                <input
                  type="submit"
                  value="Create"
                  class="inline-flex justify-center rounded-md border border-transparent bg-color1 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-white hover:text-color1 border-color1"
                />
              </div>
            </div>
          </form>
        </div>

        {/* <div>
              <label class="text-gray-700" for="username">Email</label>
              <div class="flex content-center">
                <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                <label className="text-gray-700 " for="username">@admin.com</label>
              </div>
              <h2>Select role</h2>
              <div>
                <input type="checkbox" name="financial_status" value="financial_status"/><span>Financial Status</span>
                <input type="checkbox" name="fund_approval" value="fund_approval"/><span>Fund Approval</span>
                <input type="checkbox" name="withdrawal_requests" value="withdrawal_requests"/><span>Withdrawl Requests</span>
                <input type="checkbox" name="blog" value="blog"/><span>Blog</span>
                <input type="checkbox" name="Queries" value="queries"/><span>Queries</span>
                <input type="checkbox" name="Roles" value="roles"/><span>Roles</span>
              </div>  
            <div className="flex">
                <div onClick={handler()}>
                    <ApprovalButton value ="createRole" className="m-6"/>
                </div>
                <div onClick={toggleDrawer('right', false)}>
                    <ApprovalButton value ="cancel" className="m-6"/>
                </div>
              </div>
          </div> */}
      </>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Button onClick={toggleDrawer("right", true)}>Create Roles</Button>
        <SwipeableDrawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {createRole("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
