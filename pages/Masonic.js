import Footer from "./component/footer";
import Image from "next/image";
import Navbar from "./component/navbar";
export default function Masonic() {
  return (
    <div className="font-serif">
      <Navbar />
      <div className="pt-32  xl:mx-[223px] md:mx-[100px] sm:mx-[70px] fold:mx-[20px] mx-[10px] pb-16">
        <p className="text-3xl">Masonic Visitors</p>
        <p className="text-xl pt-8 ml-6">Some Masonic Visitors</p>
        <p className=" ml-6 pt-5">
          The principle idea of Freemasonry as a fraternal organization is to
          take a good man and make him a better man. A better man internally as
          well as externally, a better citizen of his community and country, a
          better husband and father to his children, a better friend and
          co-worker. For the man who seeks out the fraternity, for Freemasonry
          does not seek out members, this quality should already be inherent in
          his person.
        </p>
        <div className="flex justify-center pt-10">
          <Image src="/default-background.jpeg" width={700} height={400} />
        </div>
        <br />
        <p className="text-3xl">Requirements for Membership</p>
        <p className="pt-8 ml-6">
          1. Being a man, freeborn, of good repute and well-recommended Being a
          man – as Freemasonry is a Fraternity or all-male organization, this is
          a must as the lodge does not admit women. There are, however, Masonic
          organizations which do. A prospective member must be of good repute
          and sponsored by someone who knows his reputation in the community. It
          is important that a member not be admitted who would stain the
          reputation and principles of the craft.
          <br />
          <br />
          2. A belief in a Supreme Being No man can be made a Mason if he is an
          atheist. All masons must profess a belief in a Supreme Being. This is
          an area where Freemasonry often comes under attack by religious
          opponents. Because Freemasonry accepts Christian, Muslim and Jew
          alike, how that member chooses to worship God, or by which name that
          member knows God, is of no consequence to Freemasonry.
          <br />
          <br />
          3. Ability to support one’s self and family While not clearly stated
          in all jurisdictions, this condition is placed so that a prospective
          member does not join the craft in the hope of deriving financial
          benefit from the order. It also is in place to show the prospective
          Mason that the Lodge comes after his religious and family
          responsibilities.
          <br />
          <br />
          4. The prospective Mason must have reached the age of 21, although
          some constitutions allow a member to join at an earlier age.
        </p>
      </div>

      <Footer />
    </div>
  );
}
