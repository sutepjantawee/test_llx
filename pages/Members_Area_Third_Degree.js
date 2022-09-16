import Footer from "./component/footer";
import Image from "next/image";
import Navbar from "./component/navbar";
export default function Member() {
  return (
    <div className="grid font-serif ">
      <Navbar />
      <div className="pt-[114px] md:justify-self-end md:pr-[76px] justify-self-center">
        <input
          className="focus:ring-indigo-500 focus:border-indigo-500  rounded-md bg-[#FFFFFF]         
          border-[#959595] border-2 w-[207px] h-[33px] text-[16px] pl-[15px]"
          placeholder="Search"
        />
      </div>

      <div className="pt-[20px] pl-6 flex justify-center">
        <div className="grid lg:grid-cols-5 grid-cols-1 w-full">
          <div className=" w-full hidden lg:block">
            Introduction 1st Degree
            <ul className="pl-[14px]">
              <li className="font-medium">Overview</li>
              <li>Good to read</li>
              <li>Stuff</li>
            </ul>
            <br />
            <div>
              Introduction 2st Degree
              <ul className="pl-[14px]">
                <li>Overview</li>
                <li>Good to read</li>
                <li>Stuff</li>
              </ul>
            </div>
          </div>

          <div className=" flex flex-col md:flex md:flex-row fold:flex fold:flex-row  lg:hidden pb-14 fold:ml-1 sm:ml-12 ml-2 ">
            <div className="w-full sm:hidden pt-3 pl-6">
              <div className="w-full ">
                Introduction 1st Degree
                <ul className="pl-[14px] ">
                  <li>Overview</li>
                  <li>Good to read</li>
                  <li>Stuff</li>
                </ul>
              </div>
              <div className="w-full pt-3 ">
                Introduction 2st Degree
                <ul className="pl-[14px]">
                  <li>Overview</li>
                  <li>Good to read</li>
                  <li>Stuff</li>
                </ul>
              </div>
            </div>

            <div className="w-full sm:pt-1 hidden sm:block">
              Introduction 1st Degree
              <ul className="pl-[14px] ">
                <li>Overview</li>
                <li>Good to read</li>
                <li>Stuff</li>
              </ul>
            </div>
            <div className="w-full sm:pt-1 pt-6 hidden sm:block ">
              Introduction 2st Degree
              <ul className="pl-[14px]">
                <li>Overview</li>
                <li>Good to read</li>
                <li>Stuff</li>
              </ul>
            </div>

            <div className="w-full sm:pt-1 pt-6 hidden sm:block">
              On this page
              <ul className="pl-[14px] pt-2">
                <li>Overview</li>
                <li>Good to read</li>
                <li>Stuff</li>
              </ul>
            </div>
            <div className="w-full sm:pt-1 pt-3 sm:hidden sm:pl-10 pl-6">
              On this page
              <ul className="pl-[14px] pt-2">
                <li>Overview</li>
                <li>Good to read</li>
                <li>Stuff</li>
              </ul>
            </div>
          </div>

          <div className="col-span-3 mx-3 sm:mx-1 pb-16 text-lg">
            <p className=" text-3xl">Training for Master Masons</p>
            <div className=" pt-8  ">
              The teaching of Craft Masonry is intended to represent the stages
              of man passing through life. The first Degree, representing the
              youth, is the time of learning. The Great Architect of the
              Universe had planned the laws by which the whole of nature is
              governed and we must adhere to it. The four cardinal virtues are
              extolled as the proper guides to our actions in the world which
              may perfect our relation to it keeping under control our bodily
              passions.
              <div className="pt-5 justify-center grid">
                <Image
                  alt=""
                  src="/Overview/Picture1.jpg"
                  width="900"
                  height="600"
                />
              </div>
            </div>
            {/* page 57 */}
            {/* END Page */}
          </div>
          <div className=" w-full pl-[39px] text-start hidden lg:block">
            On this page
            <ul className="pl-[14px] pt-2">
              <li>Overview</li>
              <li>Good to read</li>
              <li>Stuff</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
