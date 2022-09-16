import Footer from "./component/footer";
import Navbar from "./component/navbar";
export default function Masonic() {
  return (
    <div className="font-serif  ">
      <Navbar />

      <div className="pt-32 mx-[30px] xl:mx-[223px] md:mx-[120px] sm:mx-[70px] h-[750px] ">
        <div className=" text-[24px] text-left ">Masonic Visitors</div>
        <div className="text-xl  text-[16px] pt-10">
          All Masonic Visitors from Grand Lodges in amity with the Grand Lodge
          of Scotland are welcome.
          <br />
          <br />
          Please take note of our meetings in our Agenda and contact the Lodge
          Secretary at LDxxx@gmail.com
        </div>
      </div>

      <Footer />
    </div>
  );
}
