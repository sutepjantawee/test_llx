import Footer from "./component/footer";
import Navbar from "./component/navbar";
export default function History() {
  return (
    <div className="font-serif">
      <Navbar />
      <div className="pt-32 mx-32 grid justify-items-center">
        <p className="text-3xl w-2/3">History of the Lodge</p>
        <div className="text-xl pt-8 w-2/3 pb-96">
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
