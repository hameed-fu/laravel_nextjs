import { Suspense } from "react";
import Link from "next/link";

import TableData from "@/components/Users";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="w-800">
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p
                tabIndex="0"
                className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
              >
                Tasks
              </p>

              <div>
                <Link href="/user/create" className="bg-indigo-500 p-2 px-4 text-white rounded hover:bg-indigo-600">
                  Create
                </Link>
              </div>
              
            </div>
          </div>
          
          <div className="bg-white rounded p-4 w-800">
          <TableData />
          </div>
        </div>
      </div>
    </div>
  );
}
