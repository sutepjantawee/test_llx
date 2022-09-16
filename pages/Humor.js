import Footer from "./component/footer";
import Image from "next/image";
import Navbar from "./component/navbar";
export default function Humor() {
  return (
    <div className="font-serif">
      <Navbar />
      <div className="pt-32  xl:mx-[223px] md:mx-[100px] sm:mx-[70px] fold:mx-[20px] mx-[10px] pb-16">
        <p className="text-[24px]">Humor Corner</p>
        <div className="grid justify-center pt-5">
          <div className="pt-5">
            <Image alt="" src="/Humor1.jpeg" width="700" height="600" />
          </div>
          <div className="pt-5">
            <Image alt="" src="/Humor2.jpeg" width="700" height="600" />
          </div>
          <div className="pt-5">
            <Image alt="" src="/Humor3.jpeg" width="700" height="600" />
          </div>
          <div className="pt-5">
            <Image alt="" src="/Humor4.jpeg" width="700" height="600" />
          </div>
          <div className="pt-5">
            <Image alt="" src="/Humor5.jpeg" width="700" height="600" />
          </div>
         
        </div>
      </div>

      <Footer />
    </div>
  );
}
