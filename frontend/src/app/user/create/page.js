"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

 

function CreateUserPage() {

    
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    //console.log(userField);
  };
  const router = useRouter();
  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://127.0.0.1:8000/api/addnew",
        userField
      );
      console.log(responce);

      router.push("/");
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 bg-white p-4 rouned">
      <h1 className="text-2xl text-center mb-6">Add New User</h1>
      <form onSubmit={onSubmitChange}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium  text-gray-900"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className=" w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary"
            placeholder="Full Name..."
            onChange={changeUserFieldHandler}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className=" w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary"
            placeholder="Email..."
            onChange={changeUserFieldHandler}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className=" w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary"
            placeholder="Password..."
            onChange={changeUserFieldHandler}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUserPage;
