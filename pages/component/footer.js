import Image from "next/image";
import React from "react";
export default function footer() {
  return (
   <div className="grid justify-items-center h-[100px]">
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-y-16 py-5  bg-[#1E2643] text-white  w-full ">
      <div className="items-center flex-col flex ">
        <div>
          <Image alt="" src="/llx-logo.png" width={100} height={95} />
        </div>

        <p className="text-sm mt-6 mx-1">
          2022© Lodge Lane Xang 1632 SC.
        </p>
      </div>
      <div className="items-center flex-col flex">
        <p className="text-xl"> About Freemasonry</p>
        <p className="text-sm  mt-6 ">
          Information
          <br /> <br />
        </p>
      </div>
      <div className="items-center flex-col flex">
        <p className="text-xl">Contact us</p>
        <p className="text-sm  mt-6 ">
          How to reach us
          <br /> <br />
        </p>
      </div>
      
      {/*
      <div className="w-fll h-0.5 bg-PopularAssets pt-10"></div>
      <div className="flex justify-center mt-10 gap-x-10">
        <div className="mr-16">
        <Image src="/Vertobase-Logo-Files_Logo On Dark BG 1.png" width={86} height={86} />
          <p className="text-sm text-WhyUs mt-6 ">
            ป้องกันการโจมตี DDoS <br />
            การเข้ารหัสข้อมูลเต็มรูปแบบ
            <br /> และการปฏิบัติตามมาตรฐาน <br /> PCI DSS เพื่อปกป้อง <br />
            สินทรัพย์ของคุณ
          </p>
        </div>
        <div className="mr-10">
          <p className="text-xl"> About us</p>
          <p className="text-sm text-WhyUs mt-6 ">
            Information
            <br /> <br />
            Term of use
            <br /> <br />
            User Agreement
            <br /> <br />
            Transaction Fees
            <br /> <br />
            นโยบายการฟอกเงิน
          </p>
        </div>
        <div className="mr-16">
          <p className="text-xl"> Mobile</p>
          <p className="text-sm text-WhyUs mt-6 ">
            iOS
            <br /> <br />
            Android
          </p>
        </div>
        <div className="mr-10">
          <p className="text-xl">Product</p>
          <p className="text-sm text-WhyUs mt-6 ">
            Information
            <br /> <br />
            Term of use
            <br /> <br />
            User Agreement
            <br /> <br />
            Transaction Fees
          </p>
        </div>
        <div className="">
          <p className="text-xl">Support</p>
          <p className="text-sm text-WhyUs mt-6 ">
            Information
            <br /> <br />
            Term of use
            <br /> <br />
            User Agreement
            <br /> <br />
            Transaction Fees
          </p>
        </div>
      </div>
      <div className="flex justify-end pr-20 pb-16 pt-10 gap-5">
        <div className="">
          <Image src="/Vertobase-Logo-Files_Logo On Dark BG 1.png" width={30} height={30} />
        </div>
        <div className="">
          <Image src="/Vertobase-Logo-Files_Logo On Dark BG 1.png" width={30} height={30} />
        </div>
        <div className="">
          <Image src="/Vertobase-Logo-Files_Logo On Dark BG 1.png" width={30} height={30} />
        </div>
      </div>
      */}
    </div>
    </div>
  );
}
