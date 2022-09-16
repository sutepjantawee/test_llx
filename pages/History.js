import Footer from "./component/footer";
import Navbar from "./component/navbar";
export default function History() {
  return (
    <div className="font-serif grid h-auto">
      <Navbar />
      <div className="pt-32 mx-[30px] xl:mx-[223px] md:mx-[120px] sm:mx-[70px] h-[750px] ">
        <p className="text-3xl text-[24px] text-left ">History of the Lodge</p>
        <div className="text-xl pt-10 text-[16px] ">
          Lodge Lane Xang is a Scottish Freemasons Lodge operating in Thailand
          but originally consecrated in Vientiane, Laos in 1967. It operated
          there until the Laotian government was overthrown by communists and
          due to political circumstances, it went into darkness in 1976. The
          lodge was reopened again in Bangkok in 2000 and has been successfully
          operating ever since.
          <br />
          <br />
          Grand Lodge of Scotland https://www.grandlodgescotland.com/
          <br />
          <br />
          Masonic magazine “The Square” https://www.thesquaremagazine.com/
          <br />
          <br />
          Masonic articles http://www.freemasons-freemasonry.com/
        </div>
      </div>

      <Footer />
    </div>
  );
}
