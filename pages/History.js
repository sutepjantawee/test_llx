import Footer from "./component/footer";
import Navbar from "./component/navbar";
export default function History() {
  return (
    <div className="font-serif grid">
      <Navbar />
      <div className="pt-32 grid mx-[30px] xl:mx-[223px] md:mx-[120px] sm:mx-[70px] ">
        <p className="text-3xl text-[24px] text-left ">History of the Lodge</p>
        <div className="text-xl pt-8 pb-96 text-[16px] ">
          Freemasonry is “a fraternity of brothers who share one common goal: to
          help each other become better men,” according to the websites of
          several Freemason lodges. The Freemasons “strengthen and improve our
          character by learning and practicing basic virtues of fraternal love,
          charity, and truth. Our principles extend far beyond our interactions
          with each other, and we strive to apply them to our daily lives.”
        </div>
      </div>

<Footer />

      
    </div>
  );
}
