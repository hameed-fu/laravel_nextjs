"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function ViewUserPage() {
  const router = useRouter();
  const { id } = useParams();

  console.log(id);

  const [userField, setUserField] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/user/" + id);
      console.log(result.data.user);
      setUserField(result.data.user);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    console.log("data", userField);
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://127.0.0.1:8000/api/usersupdate/" + id, userField);
      router.push("/");
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-4 bg-white">
      <h1 className="text-2xl text-center mb-2">Update user </h1>
      <form>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            {" "}
            ID:
          </label>
          <input type="text" id="id" name="id" value={id} disabled />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            {" "}
            Full Name:
          </label>
          <input
            type="text"
            className="w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary"
            placeholder="Enter Your Full Name"
            name="name"
            value={userField.name}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            Email:
          </label>
          <input
            type="email"
            className="w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary"
            id="email"
            placeholder="Enter email"
            name="email"
            value={userField.email}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div className="mb-3 mt-3">
          <label className="block text-sm font-medium text-gray-900">
            Password:
          </label>
          <input
            type="text"
            className="w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary"
            id="password"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => changeUserFieldHandler(e)}
            required
          />
        </div>
        <button
          type="submit"
          className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={(e) => onSubmitChange(e)}
        >
          Update
        </button>
      </form>
    </div>
  );
}
