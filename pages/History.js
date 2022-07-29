import Footer from "./component/footer";
import Navbar from "./component/navbar";
export default function History() {
  return (
    <div className="">
      <Navbar />
      <div className="pt-32 mx-32">
        <p className="text-3xl">History</p>
        <p className="text-xl pt-8 ml-10">
          Lodge Lane Xang is a Masonic Lodge (Scottish) operating in Thailand
          but originally consecrated in Vientiane, Laos in 1967. It operated
          there until the Laotian government was overthrown by communists and
          due to political circumstances, it went into darkness in 1976. The
          lodge was reopened again Bangkok in 2000 and has been successfully
          operating ever since.
        </p>
      </div>

      <Footer />
    </div>
  );
}
