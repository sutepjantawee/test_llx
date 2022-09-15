import Footer from "./component/footer";
import Navbar from "./component/navbar";
export default function Masonic() {
  return (
    <div className="font-serif h-auto">
      <Navbar />

      <div className="pt-32 grid mx-[30px] xl:mx-[223px] md:mx-[120px] sm:mx-[70px] ">
        <p className="text-3xl text-[24px] text-left ">Masonic Visitors</p>
        <div className="text-xl pt-8 pb-[30rem] text-[16px] ">
          All Masonic Visitors from Grand Lodges in amity with the Grand Lodge
          of Scotland are welcome.
          <br />
          Please take note of our meetings in our Agenda and contact the Lodge
          Secretary at LDxxx@gmail.com
        </div>
      </div>

      <Footer />
    </div>
  );
}
