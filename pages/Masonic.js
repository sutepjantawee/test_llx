import Footer from "./component/footer";
import Image from "next/image";
import Navbar from "./component/navbar";
export default function Masonic() {
  return (
    <div className="font-serif">
      <Navbar />
      <div className="pt-32  xl:mx-[223px] md:mx-[100px] sm:mx-[70px] fold:mx-[20px] mx-[10px] pb-16">
        <p className="text-3xl">Masonic Visitors</p>
       
        <p className=" ml-6 pt-5">
        All Masonic Visitors from Grand Lodges in amity with the Grand Lodge of Scotland are welcome.
<br/>
Please take note of our meetings in our Agenda and contact the Lodge Secretary at LDxxx@gmail.com
        </p>
       
      </div>

      <Footer />
    </div>
  );
}
