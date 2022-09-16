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
            {/* page 1 */}
            <p className=" text-3xl text-center">
              Training for Fellows of the Craft
            </p>
            <div className="pt-5 justify-center grid">
              <Image
                alt=""
                src="/Overview/Picture1.jpg"
                width="900"
                height="600"
              />
            </div>
            <br /> <br />
            {/* page 2 */}
            <p className="font-semibold text-center pt-5 ">
              History of the Degree
            </p>
            <br /> <br />
            <span>
              At the medieval times of old guilds and corporations the old
              stonemasons, after many years of apprenticeship during which they
              had made considerable progress both from a human and a
              professional point of view, became fellows of the craft, that is
              they were allowed to employ a certain number of apprentice
              stonemasons and work as master of their team whenever the
              opportunity presented itself to them. This duality (apprentice –
              fellow of the craft) remained also when freemasons from operative
              became speculative. In fact, once the Entered Apprentices had
              finished their apprenticeship, they became Fellows Craft and could
              become Masters of their Lodge or even High-ranking Officer in the
              Order. Over the years, however, this situation changed.
              <br /> <br />
              This duality (apprentice – fellow of the craft) remained also when
              freemasons from operative became speculative. In fact, once the
              Entered Apprentices had finished their apprenticeship, they became
              Fellows Craft and could become Masters of their Lodge or even
              High-ranking Officer in the Order. Over the years, however, this
              situation changed.
              <br /> <br />
              Ancients vs. Moderns
              <br /> <br />
              In 1717 four speculative Lodges in London created the Grand Lodge
              of England. As the Grand Lodge grew and more Lodges considered
              joining the Grand Lodge, a divide began to form between those who
              felt that the original ritual should be adhered to in order to
              maintain the old traditions alive, often pointing out that
              straying from ancient ritual was straying from the landmarks of
              Freemasonry, and those who felt that the ritual work should be
              less emphasized in the fraternity. Essentially the split was about
              whether Freemasonry would be more of a social club or a fraternal
              organization rooted in the operative lodges. In 1751, the rift
              between the Ancients and the Moderns came to a head when the Grand
              Lodge, to avoid that non-freemasons could slip in and get a free
              dinner, switched the passwords between first and second degree. In
              this way only real and active freemasons could know of the switch.
              Those Freemasons loyal to old traditions found this change a last
              drop and formed a new Grand Lodge. It was called the Most Ancient
              and Honourable Society of Free and Accepted Masons according to
              the Old Constitutions. The members of this new Grand Lodge called
              themselves the Ancients and those who remained in the old Grand
              Lodge, the Grand Lodge of England, the Moderns. <br /> <br />
              Among the other things, the Ancients emphasized the importance of
              the degree of Master Mason of which we don’t know when exactly
              started to be worked, but certainly soon after the creation on the
              first Grand Lodge. The Ancients also insisted that the Fellow
              Craft had to become Master Mason before he could be Worshipful
              Master of the Lodge, or enter to any rank in the Order. <br />{" "}
              <br />
              In the last decade of the eighteenth century the Moderns started
              to move back toward the Ancient ritual. This affected both the
              Ancients and the Moderns and on the day of St. John the
              Evangelist, the 27th of December 1813, the two Grand Lodges came
              together to form the United Grand Lodge of England. With the
              reconciliation between the two groups it was officially introduced
              the rank of Master. Obviously the rank of Fellow Craft lost much
              of its primitive importance yet it maintains a vital role in the
              formation of the Freemasons. <br /> <br />
              ____________________
              <br />
              <span className="text-base">
                <span className=" text-sm align-top ...">1</span>
                At that time there were already many pamphlets exposing the
                &quot;secrets&quot; of freemasonry, passwords included.
              </span>
              <br /> <br />
              <br /> <br />
              {/* page 3 */}
              <p className="font-semibold text-center pt-5 ">
                Symbolism of the Passing
              </p>
              <br /> <br />
              Preparation of the Candidate
              <br /> <br />
              The preparation of the candidate Fellow Craft is somewhat similar
              to that of the Entered Apprentice. But instead of having his right
              arm, left breast, and left knee bare, and the right heel slip
              shod, now, to mark the difference with the previous degree, the
              candidate has his left arm, right breast, and right knee bare, and
              the left heel slip shod. Note that some of the symbols, being
              Freemasonry a progressive science, have no other reason than that
              to mark the progress that a freemason has made in the Craft.{" "}
              <br /> <br />
              Being already a Freemason, he is now not hood winked, nor he has a
              cable tow around his neck. <br /> <br />
              The password given for the candidate by his conductor is the proof
              that the candidate has successfully terminated his job as an
              Entered Apprentice. <br /> <br /> <br /> <br />
              Entering the Lodge <br /> <br />
              The candidate is admitted into the lodge by the Inner Guard who is
              pointing at his breast not a sharp instrument (indicating caution
              and secrecy) as it was in First Degree, but a square which is
              symbol of rectitude, morality, honesty, fair dealings and
              truthfulness. The candidate is therefore expected to live and act
              according to these principles (to square his actions) not only
              with his brethren but with all mankind. <br /> <br /> <br />{" "}
              <br />
              Position in the lodge <br /> <br />
              The circumambulation around the Lodge Room again follows that of
              the sun. Each stop in that journey proves to all present that the
              candidate is a qualified Entered Apprentice, properly prepared and
              worthy of being passed to the Second Degree. <br /> <br />
              Before the ceremony is concluded, the newly passed Fellow of Craft
              will be seated in the South East corner to mark the progress he
              has made.
              <br /> <br />
              {/* page 4 */}
              The 3 Great Lights
              <br /> <br />
              The position of Square and Compasses on the Volume of the Sacred
              Law are different from that in the First Degree. Now the two
              points of the Compasses are no longer hidden under the Square, but
              one of them is disclosed. This new position implies that the pure
              control of materiality is not anymore the purpose of the degree
              and, as a beam of Light has been shed, the Fellow of Craft is now
              on the journey to obtain the full spirituality.
              <br /> <br />
              <br /> <br />
              Penal Signs
              <br /> <br />
              While the penalty of the Entered Apprentice symbolises the loss of
              the power of speech, that of the Fellowcraft (like in the First
              Degree obviously symbolic rather than physical) symbolises the
              loss of emotions and caring, symbolically lodged in the heart.
              <br /> <br />
              <br /> <br />
              Working Tools
              <br /> <br />
              The working tools of an Entered Apprentice are used to prepare the
              stone for the hands of the more expert workman. The working tools
              of this degree, the Square, the Level, and the Plumb Rule, are the
              tools of testing used by the expert craftsman responsible for the
              correct interpretation of the architect’s design. Their symbolic
              description is probably one of the simplest yet central passages
              in masonic ritual. They are:
              <br /> <br />
              <p className="pl-14">
                The Plumb Rule
                <br /> <br />
                The plumb rule, as a working tool, tests perpendiculars. If a
                wall isn&apos;t vertical, it will not stand long. Therefore, in the
                moral sense, the Plumb Rule is a symbol of uprightness of
                conduct in life and justice. It is often associated with the
                plumb line which God&apos;s standard of divine righteousness [Amos
                7:7-15] through which, like a sort of Jacob’s Ladder, links the
                rightful men with the Divinity. The plum rule is therefore the
                symbol of an upright life and of the conscience by which each
                person must live.
                <br /> <br />
                <br /> <br />
                The Level
                <br /> <br />
                As a working tool, the level proves horizontals. As speculative
                Masons, we use it to symbolize equality. Not equality in wealth,
                social distinction, civic office, or service to mankind, which
                are external qualifications, but rather for internal
                qualifications, meaning
                {/* page 5 */}
                that each person is endowed with a worth and dignity which is
                spiritual and, therefore, should not be subject to man-made
                distinctions. Thus, the Level dignifies labor and the person who
                performs it. As a consequence, it also acknowledges that all men
                are equal without regard to station.
                <br /> <br />
                <br /> <br />
                The Square
                <br /> <br />
                The square proves right angles defining the relationship between
                the level and the plumb rule. That’s because the direction of
                the two sides of the square form an angle of 90°, or a right
                angle, so-called because this is the angle which stones must
                have if they are to be used to build a stable and upright wall.
                Therefore, it symbolizes accuracy, not even varying by a single
                degree. For speculative Masons, the Square defines the
                relationship between uprightness of conduct (Plumb Rule –
                vertical) and equality (Level – horizontal. This relationship
                dwells in a man&apos;s heart and should guide us in all our
                transactions with our fellow man. Not surprisingly “Acting on
                the Square” with someone means giving him/her an honest deal, a
                square deal, and when we say “part on the Square” we mean that
                we may go in different directions, but in full knowledge that
                our courses in life will be going according to the angle of the
                Square (which means in the right direction), until we meet
                again. In other words, the Square is the symbol of morality,
                truthfulness and honesty. <br /> <br />
                <br /> <br />
              </p>
              Tracing Board
              <br /> <br />
              The Fellowcraft Tracing Board is the representation of the journey
              of the worthy Entered Apprentice through different stages of
              closeness to the Divinity represented by three separated areas:
              outside King Solomon’s Temple, inside the Temple lower floor, and
              inside the Temple upper floor. Of course these areas are in
              communication with each other through passages which are the Two
              Pillars and the Winding Staircase. Transiting through each one of
              these two means that a test has been successfully passed.
              <br /> <br />
              The Fellowcraft Tracing Board, similarly to the Tracing Boards of
              all the other degrees, can be depicted in many different ways as
              long as they maintain the same content.
              <br /> <br />
              Here below there are two popular Tracing Boards.
              <br /> <br />
              <br /> <br />
              {/* page 6 */}
              <div className="pt-5 justify-center grid">
                <Image
                  alt=""
                  src="/Overview/Picture1.jpg"
                  width="500"
                  height="800"
                />
              </div>
              <br /> <br />
              {/* page 7 */}
              <div className="pt-5 justify-center grid">
                <Image
                  alt=""
                  src="/Overview/Picture1.jpg"
                  width="500"
                  height="800"
                />
              </div>
              <br /> <br />
              {/* page 8 */}
              The two Pillars
              <br /> <br />
              In the Bible we can read of the two pillars, named Boaz and Jachin
              (1 Kings 7:13–22) designed and cast by Hiram of Tyre, a widow’s
              son from the tribe of Naphtali.
              <br /> <br />
              They are symbolically represented within every Masonic Lodge. In
              fact, while in the First Degree the limits within which a
              Freemason remains in contact with the Divinity are portraited as a
              “circle from which a Mason cannot err”(in fact this circle
              touches, in its upper part, the Volume of the Sacred Law and is
              bounded by two Parallel Lines which delimit its area) in this
              Degree the sacred area is delimited by the two pillars, in fact
              the access to King Solomon’s Temple, which is the house of the
              Divinity, is only possible by passing between Boaz and Jachin.
              <br /> <br />
              Furthermore they are symbols, respectively, of strength and
              establishment and, by implication, power and control. We know that
              power without control is anarchy and that control without power is
              futility. When united, they stand firm and perfect, and therefore
              stable, as the strength of Boaz is directed by the organizing
              activity of Jachin.
              <br /> <br />
              <div className="pt-5 justify-center grid">
                <Image
                  alt=""
                  src="/Overview/Picture1.jpg"
                  width="200"
                  height="500"
                />
              </div>
              <br /> <br />
              The globes which sometimes are seen on the top of the columns,
              instead of the original pomegranates (1 Kings 7:41-42), are a
              later addition to this symbol and are said to be the celestial and
              terrestrial spheres representing the duality of earth and heaven,
              that is material and divine. The Winding Staircase
              <br /> <br />
              <br /> <br />
              The central symbol of this Degree is the Winding Staircase leading
              to the Middle Chamber of the Temple. Staircases, along with
              ladders, extended vertical ropes, mountains and similar, are all
              symbols of ascension and therefore, in cultures of Celestial Gods,
              of contact with the Divinity.
              <br /> <br />
              The number of steps of the Winding Staircase has changed over the
              years. Presently we have three flights with respectively three,
              five and seven steps.
              <br /> <br />
              {/* page 9 */}
              {/* page 10 */}
              {/* page 11 */}
              {/* page 12 */}
              {/* page 13 */}
              {/* page 14 */}
              {/* page 15 */}
              {/* page 16 */}
              {/* END Page */}
            </span>
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
