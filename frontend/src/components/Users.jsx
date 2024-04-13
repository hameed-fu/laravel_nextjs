"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import SkeletonLoading from "./SkeletonLoading";

function Users() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/users");
      console.log(result.data.results);
      setUserData(result.data.results);
    } catch (err) {
      console.log("something went wrong");
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete("http://127.0.0.1:8000/api/usersdelete/" + id);
    const newUserData = userData.filter((item) => {
      return item.id !== id;
    });
    setUserData(newUserData);
  };

  return (
    <div className="overflow-x-auto border-x border-t w-800">
      {loading ? (  
        <div className="p-4 ">
          <SkeletonLoading />
        </div>
      ) : (
        userData.length > 0 && (
          <table className="table-auto">
            <thead className="border-b">
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-medium">Name</th>
                <th className="text-left p-4 font-medium">Email</th>
                <th className="text-left p-4 font-medium">Created at</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.created_at}</td>
                  <td className="p-4">
                    <Link
                      href={`/user/edit/${user.id}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
}

export default Users;
