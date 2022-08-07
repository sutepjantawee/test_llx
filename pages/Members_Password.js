import React, { useState } from "react";

import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { useRouter } from "next/router";

export default function Member() {
  const router = useRouter();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    if (password === "llx") {
      router.replace("/Members_Area");
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className=" grid place-items-center text-center h-[739px]">
        
        <from>
        <div className="text-3xl pb-[48px]"> Password</div>
          <input
            type="password"
            name="password"
            value={password}
            className="focus:ring-indigo-500 focus:border-indigo-500 block rounded-md bg-[#D9D9D9]         
          border-[#767676] border-2 w-[317px] h-[56px] text-center text-3xl"
            onChange={(e) => setPassword(e.target.value)}
            
          />
          <button
            type="submit"
            value="Login"
            className="mt-[48px] h-[53px] w-[144px] justify-center  border border-transparent rounded-xl text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={() => handleSubmit()}
          >
            Login
          </button>
        </from>
        
      
      </div>

      <Footer />
    </div>
  );
}
