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

      <div className="pt-[20px] pl-3 pr-3 flex justify-center">
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
            <br /> <br />
            <div className="pt-5 justify-center grid">
              <Image
                alt=""
                src="/MembersArea_SecondDegree/Picture1.png"
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
           
            <div>
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
                wall isn&apos;t vertical, it will not stand long. Therefore, in
                the moral sense, the Plumb Rule is a symbol of uprightness of
                conduct in life and justice. It is often associated with the
                plumb line which God&apos;s standard of divine righteousness
                [Amos 7:7-15] through which, like a sort of Jacob’s Ladder,
                links the rightful men with the Divinity. The plum rule is
                therefore the symbol of an upright life and of the conscience by
                which each person must live.
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
                transactions with our fellow man. Not surprisingly &quot;Acting
                on the Square&quot; with someone means giving him/her an honest
                deal, a square deal, and when we say &quot;part on the
                Square&quot; we mean that we may go in different directions, but
                in full knowledge that our courses in life will be going
                according to the angle of the Square (which means in the right
                direction), until we meet again. In other words, the Square is
                the symbol of morality, truthfulness and honesty. <br /> <br />
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
                  src="/MembersArea_SecondDegree/Picture2.jpg"
                  width="500"
                  height="800"
                />
              </div>
              <br /> <br />
              {/* page 7 */}
              <div className="pt-5 justify-center grid">
                <Image
                  alt=""
                  src="/MembersArea_SecondDegree/Picture3.jpg"
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
              &quot;circle from which a Mason cannot err&quot;(in fact this
              circle touches, in its upper part, the Volume of the Sacred Law
              and is bounded by two Parallel Lines which delimit its area) in
              this Degree the sacred area is delimited by the two pillars, in
              fact the access to King Solomon’s Temple, which is the house of
              the Divinity, is only possible by passing between Boaz and Jachin.
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
                  src="/MembersArea_SecondDegree/Picture4.jpg"
                  width="200"
                  height="280"
                />
              </div>
              <br /> <br />
              The globes which sometimes are seen on the top of the columns,
              instead of the original pomegranates (1 Kings 7:41-42), are a
              later addition to this symbol and are said to be the celestial and
              terrestrial spheres representing the duality of earth and heaven,
              that is material and divine.
              <br /> <br />
              <br /> <br />
              The Winding Staircase <br /> <br />
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
              Three is of high masonic significance. We have three Degrees, the
              Three Great Lights, three main Office Bearers, three Principle
              Tenets, and so on. <br /> <br />
              Among the Pythagoreans the number five, being formed five by the
              union of the first even number (2) and the first odd (3), was a
              mystical number and hence it symbolised the mixed conditions of
              order and disorder, happiness and misfortune, life and death, male
              and female and so on. The geometrical symbol of five is the
              pentagram and the emblem of Pythagoras&apos; fraternity was the
              fivepointed star. We will find again this number in the third
              degree. <br /> <br />
              The Seven Steps refers to the Seven Liberal Arts and Sciences
              which were the continuation of Ancient Greek methods of enquiry
              that began a desire for a universal understanding, and was later
              considered a means to the knowledge of God. They are Grammar,
              Rhetoric and Logic (Trivium) which are preparatory to Arithmetic,
              Geometry, Music, and Astronomy (Quadrivium). Grammar is the
              foundation of language, which enables us to communicate and
              broaden our knowledge. The art of speaking fluently is Rhetoric,
              but without Logic Grammar and Rhetoric are just an empty,
              senseless flow of words. The science of comparison is supported by
              Arithmetic. The fifth step is Geometry which is established as the
              basis of our art. Geometry has been described as the science of
              harmony in space. Music is the Geometry of sound. Every note in
              the musical scale is exactly double the wavelength of the
              corresponding note in the preceding octave. Music moves in
              measured steps and cannot free itself from Geometry without
              dissolving into discord. The seventh step, the uppermost step, is
              Astronomy. From here we contemplate the wonder and the awesome
              magnitude of the Heavens. <br /> <br /> <br /> <br />
              We could ask why the staircase is winding. In the Bible the only
              time in which the staircase is mentioned is in 1 Kings 6:8 (The
              entrance to the lowest floor was on the south side of the temple;
              a stairway led up to the middle level and from there to the third)
              and there is no mention of it being winding. We know that a
              clockwise ascendancy was a defense system
              <span className=" text-sm align-top ...">2</span> but this has no
              Masonic significance. On the other hand, it is highly probable
              that the curvature of the scale is a reference to the fact that,
              by advancing on it, mysteries that are hidden become intelligible
              (the Hidden Mysteries of Nature and Science) and therefore not
              discoverable at the beginning of the ascension where, instead, a
              straight staircase would suggest the opposite. <br /> <br />
              In the end we must not forget that the Winding Staircase is a
              symbol of advancement. For each step climbed a higher level of
              awareness has been reached by the brother who is, therefore,
              increasingly able to recognize the divine plan
              <span className=" text-sm align-top ...">3</span> and to adhere to
              it. When the summit is reached, the brother has completed his task
              as Fellows Craft and can justly collect his reward. <br /> <br />{" "}
              <br /> <br />
              The Checkpoints of the Winding Staircase <br /> <br />
              ____________________
              <br />
              <span className="text-base">
                <span className=" text-sm align-top ...">2</span>
                In medieval times the spiral stairway wound in a clockwise
                direction to place the right handed attacking swordsmen at a
                disadvantage
                <br />
                <span className=" text-sm align-top ...">3</span> &quot;The
                great laws of nature are His laws, and the more we study them
                the more we realise that they are not the outcome of blind
                chance, but the proof of a profound and all-embracing
                Intellect&quot; [Symbolism in Craft Freemasonry, Lewis Masonic
                2006]
              </span>
              <br /> <br />
              <br /> <br />
              {/* page 10 */}
              We have already seen that the Tracing Board of the Second Degree
              consists of three different areas which are in communication among
              them. However, during his journey from outside the temple to the
              Middle Chamber the freemason has to be checked twice. The first
              time at the bottom of the Winding Staircase where the Junior
              Warden asks the password of a Fellowcraft. The Junior Warden,
              receiving the pass-grip and the password, recognises that the
              Brother has successfully completed his First Degree’s task and is
              therefore qualified to start the Fellowcraft labor represented by
              the ascension from the Porch to the Middle Chamber. The second
              time, our Brother is checked by the Senior Warden who asks for
              Sign, Token and Word of the degree. Giving them implies that his
              journey has successfully unwound through increasing levels of
              awareness and, in his own way, he is now able to perceive the
              Divine Plan which pervades the Nature and the whole Creation. As a
              consequence he is entitled to the wages of a Fellow of Craft.
              <br /> <br />
              <br /> <br />
              Wages of EAs
              <br /> <br />
              The Entered Apprentices receive their wages, corn, oil and wine
              <span className=" text-sm align-top ...">4</span> , near the
              Temple but not inside, indicating that although they are on the
              way to be close to the Divinity they are still far from it. Corn,
              oil and wine were the staple crops of the Holy Land, sometimes
              used in ceremonies of solemn inauguration of very important
              buildings. <br /> <br />
              Corn (or grain) represents nourishment and the sustenance of life.
              It is also a symbol of plenty, and refers to the opportunity for
              doing good for the community. Wine is symbolic of refreshment,
              peace and the fruit of human labor, while oil represents the fruit
              of the Spirit. Taken together, corn, wine, and oil represent the
              temporal rewards of living a good life. The actual wages are the
              intangible but no less real compensation as they are a clear
              conception of ethical living, a broader toleration, and a more
              resolute will to think justly, independently, and honestly. <br />{" "}
              <br />
              From a mystical point of view, corn has also represented the
              concept of resurrection. Wine has symbolized (in Greece) mystical
              attainments, divine intoxication and ecstasy. Oil is one of the
              elements of consecration. Perfumed oil was used to anoint. <br />{" "}
              <br /> <br /> <br />
              Wages of a Fellowcraft <br /> <br />
              While the reward for an Entered Apprentice represents nourishment
              and the sustenance of life (corn, oil and wine), a Fellow of Craft
              is paid in specie. <br /> <br />
              To be paid in specie means that an asset is paid in its current
              form rather than in the equivalent amount of cash. In our case it
              means that the reward for a Fellow Craft are directly of
              spiritually <br /> <br /> <br /> <br />
              ____________________
              <br />
              <span className="text-base">
                I will give your servants, the woodsmen who cut the timber,
                twenty thousand cors of ground wheat, twenty thousand cors of
                barley, twenty thousand baths of wine and twenty thousand baths
                of olive oil [Chronicles 2:10]
              </span>
              <br /> <br />
              <br /> <br />
              {/* page 11 */}
              nature, suitable for the spiritual evolution of the Brother. In
              other words, the Fellowcraft’s reward is nothing less than the
              vision of the Divinity’s Plan.
              <br /> <br />
              But the final wages of the Fellowcraft are, obviously, the Letter
              G, that is the ability to contemplate the Grand Geometrician of
              the Universe and to comprehend that He is residing everywhere and
              in everything and, therefore, also in that temple that is the
              heart of every Freemason.
              <br /> <br />
              <br /> <br />
              The Great Geometrician Of The Universe
              <br /> <br />
              It is worthy to note the passage from the Great Architect of the
              Universe to the Great Geometrician of the Universe. The reason why
              in an Entered Apprentice’s Lodge the Supreme Deity is called The
              Great Architect is because He has planned the laws by which the
              whole nature is governed. In a Fellowcraft’s Lodge, however, we
              are contemplating Him in His laying schemes, drawing designs and
              carrying them out.
              <br /> <br />
              <br /> <br />
              The Letter G<br /> <br />
              In ancient Greece, there is a clear identification of Geometry
              with a transcendental world. According to Plato “Geometry, rightly
              treated, is the knowledge of the eternal”. Plato again states that
              “Geometry must ever tend to draw the soul towards the truth”.
              <br /> <br />
              During the Middle Ages, from the reading of the Old Charges
              <span className=" text-sm align-top ...">5</span>
              , we can realise that Geometry and the Craft of Masonry were
              virtually synonymous. Furthermore, in the oldest masonic rituals,
              well before the first Anderson’s Constitutions of 1723, the letter
              G was explained as Geometry.
              <br /> <br />
              However, toward the end of the 18
              <span className=" text-sm align-top ...">th</span> Century the
              letter G started to be regarded as the initial of God (at least in
              the English-speaking lodges) and in our present ritual is clearly
              stated that the letter G refers to The Grand Geometrician Of The
              Universe.
              <br /> <br />
              But the dichotomy is only apparent. In fact, having Geometry since
              its appearance a strong link with transcendence, we can think of
              it as a Divine Science. For this reason we can there interpret the
              letter G both as TGGOTU and Geometry. <br /> <br />
              <br /> <br />
              ____________________
              <br />
              <span className="text-base">
                <span className=" text-sm align-top ...">5</span>
                The Old Charges are ancient documents that have come down to us
                from the 14<span className=" text-sm align-top ...">
                  th
                </span>{" "}
                century and their legends, rules and regulations are now
                incorporated within our traditional history.
              </span>
              <br /> <br />
              <br /> <br />
              {/* page 12 */}
              <p className="font-semibold text-center pt-5 ">
                Order and Numbers
              </p>
              <br /> <br />
              Numbers play an important role in the symbolism of the second
              degree. Analysing the winding staircase we have already come
              across the meaning attributed in this degree to the numbers 3,5,
              and 7, but, regardless of numbers’ specific meaning in a certain
              context, the great teaching of this degree revolves around the
              fact that numbers allude to the Order which lays in the cosmic and
              natural laws of the Creation. Those same laws that are learned by
              climbing the steps of the winding staircase. <br /> <br />
              Pythagorean’s number philosophy, Golden Mean, Plato&apos;s work,
              Neoplatonism, Qabalistic gematria, and other similar studies, are
              all ways, based by numbers, meant to discover the Order of the
              Nature which is synonym of the Masonic use of the term Geometry
              and, in the end, the true temple of the Deity. <br /> <br />
              <br /> <br />
              {/* page 13 */}
              <p className="font-semibold text-center pt-5 ">
                Rights Duty and Responsibility
              </p>
              <br /> <br />
              In the First Degree the Entered Apprentice has to polish himself
              learning the most basic lessons: belief in his Deity, the
              necessity of charity to mankind, the importance of truth, and the
              value of keeping one’s word. That is why the Entered Apprentice
              Degree it is said to represent the youth. The Second Degree,
              instead, represents the passage of the Freemason to the adult
              stage of life. In fact in this degree the Fellowcraft, learning
              and experiencing constantly new lessons, apply what he has learnt
              to his relationship with the others. <br /> <br />
              The first task of a Fellow of Craft is, as we said before, to
              acquire that knowledge which will allow him to minutely analyse
              the mysteries of human science. Interpreting them aright, he will
              eventually discover in them the Almighty Architect’s Plan. Acting
              in accordance with this Plan, the Fellowcraft will be an
              instrument of the Deity and, at the same time, he will be able to
              express his own genius and individuality. <br /> <br />
              Another important duty of the Fellowcraft is to preserve our laws,
              ancient usages and established customs. Supporting and maintaining
              them, by his example he will induce others to hold them. <br />{" "}
              <br />
              Furthermore, the Fellowcraft has always to relate with the others
              with frankness, friendship, and mercy, as the interests of any
              Brother must be seen as inseparable from his own. <br /> <br />{" "}
              <br /> <br />
              {/* page 14 */}
              <p className="font-semibold text-center pt-5 ">Advancement</p>
              <br /> <br />
              Just as the stonemasons had to prove their proficiency in their
              job before they were allowed to employ other stonemasons, so a
              Fellow of Craft to be ‘raised’ to the Sublime Degree of Master
              Mason must demonstrate that he has learned the lessons of his
              degree. Of course he is the only one who knows how much he has
              learned. Nevertheless in answering the following questions he will
              prove his level of dedication to Freemasonry.
              <br /> <br />
              <br /> <br />
              <div className="pl-10">
                <div className="flex justify-items-start ">
                  <div className="w-1/6">R.W.M.</div>
                  <div className="w-5/6">
                    How were you prepared to be passed to the Second Degree?
                  </div>
                </div>
                <br />
                <div className="flex justify-items-start">
                  <div className="w-1/6">CND</div>
                  <div className="w-5/6">
                    {" "}
                    In a manner somewhat similar to the former; save that in
                    this Degree I was not hood winked, nor had I a cable tow; my
                    left arm, right breast, and knee were made bare, and my left
                    heel slip shod{" "}
                  </div>
                </div>
                <br /> <br />
                <div className="flex justify-items-start ">
                  <div className="w-1/6">R.W.M.</div>
                  <div className="w-5/6">On what were you admitted?</div>
                </div>
                <br />
                <div className="flex justify-items-start">
                  <div className="w-1/6">CND</div>
                  <div className="w-5/6"> The square </div>
                </div>
                <br /> <br />
                <div className="flex justify-items-start ">
                  <div className="w-1/6">R.W.M.</div>
                  <div className="w-5/6">What is a square?</div>
                </div>
                <br />
                <div className="flex justify-items-start">
                  <div className="w-1/6">CND</div>
                  <div className="w-5/6">
                    {" "}
                    An angle of 90 degrees, or the fourth part of a circle{" "}
                  </div>
                </div>
                <br /> <br />
                <div className="flex justify-items-start ">
                  <div className="w-1/6">R.W.M.</div>
                  <div className="w-5/6">
                    What are the peculiar objects of research in this Degree?
                  </div>
                </div>
                <br />
                <div className="flex justify-items-start">
                  <div className="w-1/6">CND</div>
                  <div className="w-5/6">
                    {" "}
                    The hidden mysteries and nature and science{" "}
                  </div>
                </div>
                <br /> <br />
                <div className="flex justify-items-start ">
                  <div className="w-1/6">R.W.M.</div>
                  <div className="w-5/6">
                    As the hope of reward at all times sweetens labour, where
                    did our ancient Brethren go to receive their wages?
                  </div>
                </div>
                <br />
                <div className="flex justify-items-start">
                  <div className="w-1/6">CND</div>
                  <div className="w-5/6">
                    {" "}
                    In the middle chamber of King Salomon’s Temple{" "}
                  </div>
                </div>
                <br /> <br />
                <div className="flex justify-items-start ">
                  <div className="w-1/6">R.W.M.</div>
                  <div className="w-5/6">How did they receive them?</div>
                </div>
                <br />
                <div className="flex justify-items-start">
                  <div className="w-1/6">CND</div>
                  <div className="w-5/6">
                    {" "}
                    Without scruple and without diffidence{" "}
                  </div>
                </div>
                <br /> <br />
                <div className="flex justify-items-start ">
                  <div className="w-1/6">R.W.M.</div>
                  <div className="w-5/6">Why in this peculiar manner?</div>
                </div>
                <br />
                <div className="flex justify-items-start">
                  <div className="w-1/6">CND</div>
                  <div className="w-5/6">
                    {" "}
                    Without scruple, knowing that they were justly entitled to
                    them; and without diffidence, from the great reliance they
                    placed in the integrity of their employers in those days{" "}
                  </div>
                </div>
                <br /> <br />
                {/* page 15 */}
                <div className="flex justify-items-start ">
                  <div className="w-1/6">R.W.M.</div>
                  <div className="w-5/6">
                    Name the two great pillars at the porch way or entrance to
                    King Salomon Temple
                  </div>
                </div>
                <br />
                <div className="flex justify-items-start">
                  <div className="w-1/6">CND</div>
                  <div className="w-5/6">
                    {" "}
                    That on the left Boaz, and that on the right Jachin{" "}
                  </div>
                </div>
                <br /> <br />
                <div className="flex justify-items-start ">
                  <div className="w-1/6">R.W.M.</div>
                  <div className="w-5/6">
                    What are their separate and conjoint significations?
                  </div>
                </div>
                <br />
                <div className="flex justify-items-start">
                  <div className="w-1/6">CND</div>
                  <div className="w-5/6">
                    {" "}
                    The former denotes In Strength, the latter To Establish, and
                    when conjoined Stability, for God said of King Solomon: He
                    shall build Me a house, and I will stablish his throne
                    forever{" "}
                  </div>
                </div>
                <br /> <br />
              </div>
              {/* page 16 */}
              <div className="pt-5 justify-center grid">
                <Image
                  alt=""
                  src="/MembersArea_SecondDegree/Picture5.jpg"
                  width="350"
                  height="500"
                />
              </div>
              <br />
              {/* END Page */}
            </div>
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
