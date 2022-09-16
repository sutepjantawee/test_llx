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
            <p className=" text-3xl text-center">Training for Master Masons</p>
            <br /> <br />
            <div className="pt-5 justify-center grid">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture1.jpg"
                width="900"
                height="600"
              />
            </div>
            <br /> <br />
            {/* page 2 */}
            <p className=" font-semibold text-center pt-5">Three Degrees</p>
            <br /> <br />
            The teaching of Craft Masonry is intended to represent the stages of
            man passing through life. The first Degree, representing the youth,
            is the time of learning. The Great Architect of the Universe had
            planned the laws by which the whole of nature is governed and we
            must adhere to it. The four cardinal virtues are extolled as the
            proper guides to our actions in the world which may perfect our
            relation to it keeping under control our bodily passions.
            <br /> <br />
            Having learned our lessons, in the Second Degree we now must go in
            the world and identify in it, studying the Hidden Mysteries with the
            help of a perfect knowledge of the Liberal Arts and Sciences, the
            Divine Print. The Second Degree addresses the mind, because only
            with a perfect mental work we can prepare ourselves for spiritual
            truths. <br /> <br />
            The Third Degree, the core of Freemasonry, represents old age and
            death. the great lesson, symbolically conveyed to us through the
            legend of the death of Hiram Abiff, is that even from death itself
            springs immortal life. To obtain so, our conduct should be in
            constant accord with the five points of Fellowship and our soul
            brought to its perfection. <br /> <br /> <br /> <br />
            {/* page 3 */}
            <p className=" font-semibold text-center pt-5">History</p>
            <br /> <br />
            Fellows of the Craft and Masters <br />
            A confusion between Fellows of Craft and Masters may arises because
            in our old records the use of Master and Master Mason were
            interchangeable, further confusion because of the making of Masters.
            There is no reference to raising until after 1737. There was no
            fixed period of time that the Master should govern the lodge. One
            point that is very clear at this period in time is that no private
            lodge was permitted to work &quot;The Masters Part&quot;. <br />
            Brother Anderson&apos;s Book of Constitutions laid down rules for
            lodges to make Apprentices and Fellows, it is not clear at this
            stage whether this was two separate ceremonies or only one. In order
            to keep control of those who could rule and govern the craft, the
            work of the Masters part, and the making of Masters could only be
            done by and in the Grand Lodge. By these means Grand Lodge was able
            to vet each incoming Master to make sure that he was suitable.{" "}
            <br /> <br />
            The Masters Part <br />
            For a time, it seems certain that the Masters Part was conferred on
            those who were about to become Masters of a lodge. As lodges grew in
            number it became difficult and inconvenient for candidates to make
            the necessary journey to Grand Lodge to be given the Masters Part.
            In order to create a pool of candidates from which to elect the
            Master, several Fellow Craft would attend Grand Lodge and get the
            Masters Part. This situation created a new class of mason, those who
            had received the Masters Part and have not occupied the Masters
            Chair. He became what we now refer to as a Master Mason. <br />{" "}
            <br />
            The Installation <br />
            The ancient charges state: &quot;The most expert of the
            Fellowcraftsmen shall be chosen or appointed the Master&quot;, also
            it states that: &quot;No Brother can be a Warden until he has passed
            the part of a Fellow Craft, nor a Master until he has acted as a
            Warden&quot;. Even now in our ceremony of installation the Master
            elect is not obligated in the third degree. <br /> <br />
            The Master Mason <br />
            To place a precise time on when the third or Master Masons Degree
            appeared cannot be done, it is fair to say that it evolved over a
            period of about thirty years at the beginning of the eighteenth
            century. There is also no doubt that the ledged of Hiram Abiff had
            been in existence long before this. <br /> <br /> <br /> <br />
            {/* page 4 */}
            <p className=" font-semibold text-center pt-5">
              {" "}
              Universality of a concept
            </p>
            <br /> <br />
            The connection between death and life, destruction and creation, is
            universally present in the human race. The idea is that nothing new
            can be born if the previous is still present. As we will see later,
            this concept applies also to Freemasonry, through the Legend of
            Hiram&apos;s death.
            <br /> <br />
            <br /> <br />
            <p className=" font-semibold "> A Cup of Tea</p>
            <br />
            Nan-in, a Japanese master during the Meiji era (1868-1912) received
            a university professor who came to inquire about Zen. Nan-in served
            tea. He poured his visitor&apos;s cup full, and then kept on pouring. The
            professor watched the overflow until he no longer could restrain
            himself. &apos;It is overfull. No more will go in!&apos; &quot;Like this cup,&apos;
            Nan-in said.&quot; You are full of your own opinions and speculations.
            How can I show you Zen unless you first empty your cup?
            <br /> <br /> <br />
            <p className=" font-semibold  "> Pablo Picasso</p>
            <br />
            &quot;Every act of creation is first of all an act of
            destruction&quot;
            <br /> <br />
            <div className="pt-5 justify-center grid">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture2.jpg"
                width="400"
                height="500"
              />
            </div>
            <br /> <br />
            <p className=" font-semibold "> Kali</p>
            <br />
            Kali, a very composite deity, is connected with the death to the ego
            as the illusory, self-centred view of reality. But she destroys in
            order to regenerate, in fact, like Judas, she is the one who kills a
            present situation to let us proceed toward the next. Therefore, for
            our purpose, we can see her as the one who brings liberation from
            the material life and rebirth to a spiritual one.
            <br /> <br />
            {/* page 5 */}
            <div className="italic">
              The phenomenon of destruction necessarily preceding a new birth is
              found in every aspect of creation and evolution upon this earth.
              Similarly, in the realm of the spirit, when the seeker has set
              himself to rise into the transcendental state of paripurnata or
              perfection, fullness, bliss, eternal life and infinite peace,
              light and joy-when he starts upon this process, he finds that he
              is bound down by many things which do not allow him to rise up to
              that desired state of spiritual felicity and bliss. Numerous
              elements of this old human self, many undesirable factors of the
              lower aspect of mundane life, hold him down, trying perpetually to
              keep him bound to ignorance, darkness, delusion and anatmic
              (undivine) tendencies. This lower aspect of the individual soul is
              known by the name papa-purusha (man of sin) or pasu (beast)-which
              needs be destroyed and given as pasu-bali (animal sacrifice) on
              the altar of Daivi-Shakti (the Divine Mother or Power).{" "}
              <span className=" text-lg align-top ...">1</span>
            </div>
            <br /> <br />
            <p className=" font-semibold "> John 12:24</p> <br />
            Unless a kernel of wheat falls to the ground and dies, it remains
            only a single seed. But if it dies, it produces many seeds.
            <br /> <br />
            <br />
            <p className=" font-semibold ">
              {" "}
              Jonah (Jonah 1:17) and Pinocchio{" "}
            </p>{" "}
            <br />
            It is not by chance that for their initiatory journey both Jonah and
            Pinocchio (incidentally, Collodi, author of Pinocchio, was a
            freemason) ended up in a whale before being spat out spiritually
            reborn. After all the belly of the beast is nothing more than
            another cave-uterus. <br /> <br />
            <br />
            <span className=" font-semibold "> Lot&apos;s Wife </span>(Genesis
            19:26)
            <br />
            <br />
            However, those who are unable to free themselves from their previous
            condition will never be able to acquire anything new. This is the
            case of Lot&apos;s wife, who turned to look regretfully at what she had
            lost, and for this reason she was turned into a pillar of salt.{" "}
            <br /> <br /> <br /> <br />
            ____________________
            <br />
            <span className="text-base">
              <span className=" text-sm align-top ">1</span>
              Sri Swami Chidananda; A Guide To Noble Living. World Wide Web
              Edition 1999: http://www.SivanandaDlshq.org
            </span>
            {/* page 6 */}
            <br /> <br />
            <br /> <br />
            <p className=" font-semibold  text-center">
              The legend of the Third Degree
            </p>
            <br />
            <div className="pt-5 justify-center grid">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture3.jpg"
                width="500"
                height="600"
              />
            </div>
            <br /> <br />
            The degree of Master Mason is based on a legend built around the
            biblical character Huram{" "}
            <span className=" text-sm align-top ">2</span>, called by the
            Freemasons Hiram Abiff, and describes a drama that would take place
            during the construction of King Solomon&apos;s Temple. <br /> <br />
            Solomon king of Israel, Hiram king of Tyre, and Hiram Abiff the
            Architect directing the construction, draw plans and make them
            perform. Each one of them possesses only part of the Master
            Mason&apos;s Word. The murder of the architect Hiram by three
            fellowcraft who tried in vain to obtain from him that Word, which
            would have given them higher rewards, leads inevitably to the loss
            of the whole Word and stops the construction of the temple. <br />{" "}
            <br />
            The legend of Hiram&apos;s death can be interpreted at multiple
            levels. Looking at the story merely as a drama we have a noble man
            dying rather than betray a sacred trust; and this teaches us an
            important moral lesson. <br /> <br />
            At a different level we must remember that the legend of Hiram is
            dealing with re-birth. In the allegorical drama enacted during the
            raising ceremony, while the death of our Candidate-Hiram severs all
            links with materiality of this world, his raising on the Five Points
            of Fellowship alludes to his rebirth in the world of pure
            spirituality. In fact, the death of which Freemasonry alludes is the
            deathin-life of man&apos;s old self, and it is over the grave of his
            own lower nature that he must walk before he can attain the real
            heights of worthiness. In other words, In this degree we recognise
            the <br />
            ____________________
            <br />
            <span className="text-base">
              <span className=" text-sm align-top"> 2</span>1 Kings 7:13–14
            </span>{" "}
            <br /> <br />
            {/* page 7 */}
            transcendence of divinity. In fact, the full knowledge of divine
            truth, can never be acquired in this life and only leaving it we
            shall know, because the veil is what &quot;the eye of human reason
            cannot penetrate, unless assisted by That Light which is from
            above&quot;. It is nothing else that the darkness of death, the
            obscurity of the grave which is, at the same time, the forerunner of
            a more brilliant Light.
            <br /> <br />
            At yet another level, we must consider that to obtain any creation
            you need wisdom to know what to do and strength to do it. The result
            will be the beauty of the art-work. Also in the Divine creativity
            process are needed wisdom, personified by King Solomon of Israel and
            strength, personified by King Hiram of Tyre. The resulting Beauty of
            the Divine Creation is personified by Hiram Abiff. That is why we
            say that the building of King Solomon&apos;s Temple (the Cosmic
            Creation) was superintended by King Solomon (wisdom), Hiram of Tyre
            (strength) and Hiram Abiff (beauty). Consequently, removing for any
            reason any of these three characters the Cosmic Creation cannot be
            completed and, as we will see in a while, in order to have a new
            Word, that is a working universe, we need some sort of substitution.{" "}
            <br /> <br />
            <br /> <br />
            {/* page 8 */}
            <p className=" font-semibold  text-center">Tracing Board</p>
            <br /> <br />
            As we know, tracing boards are painted or printed illustrations
            depicting the various emblems and symbols of Freemasonry of the
            relevant degree.
            <br /> <br /> The Master Mason tracing board of our lodge was
            designed by Brother John Harris in 1740 approximately. It is the so
            called &quot;Improved Harris&quot;.
            <br /> <br />
            <br />
            <div className="pt-5 justify-center grid">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture4.jpg"
                width="600"
                height="700"
              />
            </div>
            <br /> <br />
            It is a rectangle with sides that are in the proportions of the phi
            ratio, which is approximately 1.618 and is called the Golden Section
            <span className=" text-sm align-top ..."> 3</span>
            . These proportions are mathematically and aesthetically elegant and
            produce the rectangle that is most pleasing to the human eye.
            <br />
            ____________________
            <br />
            <span className="text-base">
              <span className=" text-sm align-top ..."> 3</span>{" "}
              http://www.freemasons-freemasonry.com/divine_proportion.html
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 9 */}
            It includes:
            <br /> <br /> <br />
            <p className="underline ">The four cardinal directions</p>
            <br />
            In the First and Second degree, we travelled from west to east
            because we were in search of the Light. But the master mason is
            traveling from East to West in search of what was lost, that is the
            genuine secrets of a Master Mason. For this reason the head of the
            coffin is in the West. <br /> <br /> <br />
            <p className="underline ">A sprig of acacia</p>
            <br />
            The wood of acacia&apos;s tree, for being so hard and virtually
            incorruptible, for its capacity of surviving in the deserts, has
            become symbol of immortal life, which is the theme of the Third
            degree.
            <br /> <br /> <br />
            <p className="underline ">The Working Tools of a Master Mason</p>
            <br />
            They are the skirret, the compasses and the pencil. They are clearly
            implements of creativity, not limited to anything prefixed like a
            square or a plumb rule. They, instead, are flexible and representing
            freedom are suitable for originality and imagination.
            <br /> <br /> <br />
            <p className="underline ">A point within a circle</p>
            <br />
            The point within a circle alludes to the Divine Centre to reach at
            the awakening of our spirituality. It follows the impossibility to
            err while remaining in contact with the Divinity. This Degree
            attaches a great deal of importance to the Centre, where we hope to
            find in It the genuine secrets. For this reason the Master
            Mason&apos;s Lodge is duly opened on the Centre.
            <br /> <br /> <br />
            <p className="underline ">
              Cryptic characters from Masonic Alphabet
            </p>
            <br />
            Before we proceed, we must get acquainted with the cryptic masonic
            alphabet.
            <br /> <br />
            The origin of this code is not clear. Today, online communications
            often use sophisticated algorithms to encrypt messages and data. In
            the past, ciphers provided a way to write a secret message that only
            the sender, receiver, and a small group of people in their circle
            knew. The masonic cipher, known more commonly as the Pigpen Cipher,
            is seldom used today but still remains a part of Freemasonry&apos;s
            rich history.
            <br /> <br />
            We draw two vertical and two horizontal lines. The space is so
            divided into 9 boxes. Starting from the top-left, we attribute a
            letter of the alphabet to each single box. Then, we do it again
            inserting a dot in the boxes. In this way we have attributed 18
            letters of the alphabet. The other 8 are generated crossing two
            lines and doing it again with the usual dots. <br /> <br />
            <div className="pt-5 justify-center grid">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture5.png"
                width="350"
                height="350"
              />
            </div>
            <br /> <br />
            <br /> <br />
            In the next page the complete alphabet.
            <br /> <br />
            <br /> <br />
            {/* page 11 */}
            <div className="pt-5 justify-center grid">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture6.png"
                width="700"
                height="1000"
              />
            </div>
            <br /> <br />
            <br /> <br />
            {/* page 12 */}
            Let&apos;s resume the description of the tracing board.
            <br /> <br />
            <br /> <br />
            <p className="underline ">Masonic characters # 1</p>
            <br />
            At the sides of the point within the circle there are two
            characters.
            <br />
            <div className="pt-5 justify-center grid">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture7.png"
                width="140"
                height="80"
              />
            </div>
            <br />
            According to our masonic alphabet they symbolise the letters A and U
            which allude to nothing. <br /> <br />
            In fact, we have here not one single cypher, but two. The second one
            is the mirror image of the characters at the sides of the Point
            within the Circle. Our two characters are therefore so transformed{" "}
            <br /> <br />
            <div className="flex justify-center">
              <div className="pt-5 justify-center grid">
                <Image
                  alt=""
                  src="/MembersArea_ThirdDegree/Picture8.png"
                  width="140"
                  height="80"
                />
              </div>
              <div className="pt-16 justify-center grid ">
                <Image
                  alt=""
                  src="/MembersArea_ThirdDegree/Picture9.png"
                  width="140"
                  height="50"
                />
              </div>
              <div className="pt-5 justify-center grid">
                <Image
                  alt=""
                  src="/MembersArea_ThirdDegree/Picture10.png"
                  width="140"
                  height="80"
                />
              </div>
            </div>
            <br /> <br />
            And now we have the real meaning of the characters: T C which allude
            to Tubal Cain <span className=" text-sm align-top ..."> 4 </span>
            , a biblical name well known by every master mason. <br /> <br />
            Mirror reading is not simply a question of double cypher security,
            but is has a much profound meaning. It means that this world, in all
            its varied manifestations, is but a reflection of the Divine World.
            It also means that we cannot have a true, intimate contact with the
            Divinity until we cross the boundary of our terrestrial life. <br />{" "}
            <br /> <br /> <br />
            <p className="underline ">Skull and Crossbones</p>
            <br />
            Along with the coffin they are emblems of mortality, are therefore
            the central theme of the tracing board. They represent the death of
            materiality resulting in the emergence of the true, spiritual,
            higher self. The journey of that ascent begins in First Degree,
            where the Entered Apprentice had to confront himself with the
            material, or physical, world. Then the Fellow Craft had to increase
            knowledge and skills in order to ascend the winding staircase.
            Finally, the Master Mason transforms knowledge into wisdom in order
            to facilitate the awakening of the dormant aspect of the sacred
            himself and turns the allegorical death into resurrection.
            <br /> <br /> <br /> <br />
            ____________________
            <br />
            <span className="text-base">
              <span className=" text-sm align-top ..."> 4 </span>
              Genesis 4:22
            </span>
            <br /> <br /> <br /> <br />
            {/* page 12 */}
            <p className="underline ">Masonic characters # 2</p>
            <br /> <br />
            Immediately under the emblems of mortality there are these cryptic
            characters
            <br /> <br />
            <div className="flex justify-center pt-10">
              <div className=" grid  w-1/2 content-center">and</div>
              <div className="grid w-1/2">
                <div className="justify-center pl-5">
                  <Image
                    alt=""
                    src="/MembersArea_ThirdDegree/Picture11.png"
                    width="200"
                    height="40"
                  />
                </div>
                <div className="justify-center pt-16">
                  <Image
                    alt=""
                    src="/MembersArea_ThirdDegree/Picture12.png"
                    width="250"
                    height="40"
                  />
                </div>
              </div>
            </div>
            <br /> <br />
            <div className="flex justify-center pt-10">
              <div className=" grid  w-1/2 content-center">and</div>
              <div className="grid w-1/2">
                <div className="justify-center pl-5">
                  <Image
                    alt=""
                    src="/MembersArea_ThirdDegree/Picture13.png"
                    width="200"
                    height="40"
                  />
                </div>
                <div className="justify-center pt-16">
                  <Image
                    alt=""
                    src="/MembersArea_ThirdDegree/Picture14.png"
                    width="250"
                    height="40"
                  />
                </div>
              </div>
            </div>
            <br /> <br />
            <p>That is </p>
            <div className="justify-center grid pl-56">
              <div className="pt-4">H A B</div>
              <div className="pt-8">A L 3000</div>
            </div>
            <br /> <br />
            <br />
            Where H A B stands for Hiram A Biff, the main character of the
            legend of the Third Degree, and A L 3000 means Anno Lucis 3000.{" "}
            <br /> <br />
            The date is shown as AL 3000, which is a reference to the Latin Anno
            Lucis meaning &quot;in the Year of Light&quot;, calculated by adding 4,000 to
            the years BCE. In 1650 Archbishop Ussher believing that what written
            on the Bible was nothing but historical reality, dated the creation
            of the world and the appearance of Adam at 4004 BCE, which was
            rounded off when determining the Year of Light. On the basis of then
            available knowledge, King Solomon&apos;s Temple was completed around
            1000 BCE, or AL 3000, when Hiram Abiff was slain. <br /> <br />
            Consequently, the characters seen above are the coffin plaque.{" "}
            <br /> <br />
            <br />
            {/* page 14 */}
            <p className="underline ">Hebrew characters</p> <br />
            At the sides of the plaque there are two letters meaning 5 in
            Hebrew. One more similar letter is just under the scroll to form a
            triangle.
            <br /> <br />
            <br /> <br />
            <div className="grid justify-items-center ">
              <div className="flex justify-center">
                <Image
                  alt=""
                  src="/MembersArea_ThirdDegree/Picture15.png"
                  width="150"
                  height="150"
                />

                <Image
                  alt=""
                  src="/MembersArea_ThirdDegree/Picture15.png"
                  width="150"
                  height="150"
                />
              </div>
              <div className="justify-center ">
                <Image
                  alt=""
                  src="/MembersArea_ThirdDegree/Picture15.png"
                  width="150"
                  height="150"
                />
              </div>
            </div>
            <br />
            It is general opinion that the three He{" "}
            <Image
              alt=""
              src="/MembersArea_ThirdDegree/Picture16.png"
              width="40"
              height="40"
            />
            (5 in Hebrew alphabet) alludes to the three groups of five who were
            ordered to carry out the quest for Hiram Abiff.
            <br /> <br />
            <br /> <br />
            <p className="underline ">Masonic characters # 3</p> <br />
            Under the plaque, other cryptic characters
            <br /> <br />
            <br />
            <div className="justify-center flex gap-x-20">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture17.png"
                width="150"
                height="40"
              />
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture18.png"
                width="150"
                height="40"
              />
            </div>
            <br /> <br />
            whose mirror image give us
            <br /> <br />
            <br />
            <div className="justify-center flex gap-x-20">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture19.png"
                width="150"
                height="40"
              />
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture20.png"
                width="150"
                height="40"
              />
            </div>
            <br />
            <br /> <br />
            That is
            <br />
            <br />
            <div className="justify-center flex gap-x-44">
              <div>MB</div>
              <div>MB</div>
            </div>
            <br /> <br />
            <br /> <br />
            {/* page 15 */}
            These characters allude to the first words spoken when the interred
            body of Hiram Abiff was discovered, which are well known by every
            master mason. <br />
            The first pair of characters allude to an exclamation of shock that
            was spoken in Hebrew when the body was discovered: &quot;Moabone&quot; the
            equivalent in English being: &quot;What! Is this the builder?&quot; In the
            Irish and also in some Scottish workings this is expressed as &quot;Alas,
            the builder&quot;. <br />
            The second pair of characters allude to an expression of distress:
            &quot;Mac Benath&quot; equivalent in English to &quot;The builder is slain&quot;. <br />{" "}
            <br /> <br /> <br />
            <p className="underline ">The Oneness</p> <br />
            The concept of the union of matter with spirit or, if we want to
            rephrase it, the oneness of the divinity with the humanity is
            present In many religions or spiritual movements.
            <br /> <br />
            It has been symbolised by different cultures in very different ways{" "}
            <span className=" text-sm align-top">i </span>
            , but the meaning, also used as the explanation of the universe, is
            the same: what is above is below.
            <br /> <br />
            From this proposition leads to the idea that the universe is the
            same as God and therefore God Himself is in men, trees, animals …
            and vice versa. As a consequence, and this is the core of Third
            Degree, man&apos;s actions on earth mirror the actions of God in
            life eternal and the oneness between Creator and Creation is given
            by specularity.
            <br /> <br />
            That&apos;s way the cryptic characters on the third degree&apos;s
            tracing board reveal their inner meaning only when read specularly.{" "}
            <br /> <br />
            <br /> <br />
            <p className="underline ">The scroll</p> <br />
            In the scroll are represented <br /> <br />
            <div className="pl-10">
              <p className="underline ">The interior of the Temple</p> <br />
              Viewed looking westwards
              <br /> <br />
              <div className="pl-10">
                The Holy of Holies which can be seen through the partly drawn
                curtains at the western end of the temple. <br /> <br />
                The Porch (which is the entry way to the most sacred part of the
                Temple: the Holy of Holies) <br /> <br />
                The Dormer, through which we receive the Divine Radiance. <br />{" "}
                <br />
                The Squared Pavement, which symbolises the area of our
                operations: the world. <br /> <br />
                <br /> <br />
              </div>
            </div>
            {/* page 16 */}
            <div className="pl-10">
              <p className="underline "> A pentacle </p> <br />
              Circumscribed by a circle. The pentacle represents both man and
              the Five Points of Fellowship.
              <br /> <br />
              <br /> <br />
            </div>
            <div className="pl-10">
              <p className="underline "> An equilateral triangle </p> <br />
              With its point up which signifies perfection (and for this reason
              it has been used as a symbol of the Deity).
              <br /> <br />
              The joint signification of equilateral triangle and pentacle is
              that the master craftsman, Hiram Abiff, had completed his earthly
              labours and is ready to receive his reward, that is the eternal
              life.
              <br /> <br />
              <br /> <br />
            </div>
            <div className="pl-10">
              <p className="underline "> Hebrew characters </p> <br />
              On the right side is written5 &quot;God&apos;s Temple designed by
              Bezalel and was made by&quot;6 to be completed with what is
              written on the left side (Hebrew writing goes from right to left)
              &quot;In or about the year 3000&quot; which refers to the Anno
              Lucis.
              <br /> <br />
              <br /> <br />
            </div>
            <p className="underline "> The implements of the killing </p> <br />
            The implements of the killing They are Plumb-Rule, Level and Heavy
            Mallet. Being the working tools of a Freemason, they remind us that
            uprightness, energy and all the other qualities which should help us
            to reach a high level of spirituality, if at the service of earthly
            ambition, will tie us to mere materiality. <br /> <br /> <br />{" "}
            <br />
            <p className="underline ">
              {" "}
              Sanctum Sanctorum (Holy of Holies)
            </p>{" "}
            <br />
            The Sanctum Sanctorum was the innermost and most sacred area of the
            ancient Temple of Jerusalem, accessible only to the Israelite high
            priest. The Holy of Holies must not be confused with the Middle
            Chamber of the Second Degree. In the latter the candidate sees the
            Divinity; now, instead, being the candidate in a state of
            equilibrium and well prepared, he is on sacred ground and therefore
            in contact with the Divinity. <br /> <br /> <br /> <br />
            ____________________
            <br />
            <span className="text-base">
              <span className=" text-sm align-top ..."> 5 </span>
              As there are some mistakes in the Hebrew writings, what follows is
              according to the interpretation of W. Bro. David Barrett PM of
              Lodge Ra&apos;anana No. 70 of the Grand Lodge of Israel.
              <br />
              <span className=" text-sm align-top ..."> 6 </span>As there are
              some mistakes in the Hebrew writings, what follows is according to
              the interpretation of W. Bro. David Barrett PM of Lodge
              Ra&apos;anana No. 70 of the Grand Lodge of Israel.
            </span>
            <br /> <br /> <br /> <br />
            {/* page 17 */}
            <p className=" font-semibold text-center"> Secrets</p>
            <br /> <br />
            The 5 Points of Fellowship
            <br /> <br />
            The Points of Fellowship were originally part of the ceremonies of
            operative masons. They are described for the first time in the
            Edinburgh Register House MS{" "}
            <span className=" text-sm align-top ..."> 7 </span> when Freemasonry
            consisted of only two degrees. They have changed their number
            several times and it is only in 1730 that they are linked with the
            Hiramic legend and given an explanation.
            <br /> <br />
            <br /> <br />
            They are a series of actions containing the essence of the doctrine
            of brotherhood.
            <br /> <br />
            <ul className="list-decimal pl-10">
              <li>
                Hand to hand. I greet you as a Brother (and I will assist you
                when in distress: to put forward a hand is like saving a Brother
                from sinking.
              </li>
              <br />
              <li>
                Foot to foot. I will (walk with you and) support you in all your
                laudable undertakings
              </li>
              <br />
              <li>
                Knee to knee. The posture of my daily supplications (which I am
                assuming when I am knee to knee with you) shall remind me of
                your wants (I will pray for your welfare)
              </li>
              <br />
              <li>
                Breast to breast. I will keep as my own your lawful secrets
                (that you keep in your heart) when intrusted to me as such
              </li>
              <br />
              <li>
                Hand over back, I will support your character (reputation) in
                your absence as in your presence, and even from dangers which
                you cannot see.
              </li>
            </ul>
            <br /> <br />
            <br /> <br />
            Signs of MM
            <br /> <br />
            1 - The sign of a master mason is threefold. The first and second
            part of the sign are casual, the third penal.
            <br /> <br />
            <p className="pl-16">
              The first part is called the sign of horror. It expresses dismay
              at our own personal sin and unworthiness; by giving this sign we
              suddenly become conscious of and identify ourselves with all the
              sin and evil in the world.
              <br /> <br />
              The second part is called the sign of sympathy. It is an act of
              personal sorrow and contrition for that sin.
              <br /> <br />
              The third part, or penal sign, alludes to ancient penalties
              formerly associated with the unlawfully disclose the secrets of a
              master mason.
            </p>
            ____________________
            <br />
            <span className="text-base">
              <span className=" text-sm align-top ..."> 7 </span>
              The Edinburgh Register House manuscript of 1696 is the
              world&apos;s oldest masonic ritual.
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 18 */}
            2- Along with the sign of a master mason, to the new master mason is
            also revealed the distress sign. The sign of distress is a method
            whereby a Freemason whose life is in danger may identify himself as
            such and request aid to any other Freemason who may be within sight.
            It consists of the sign and the following words: Oh Lord, my God, is
            there no help for the widow&apos;s son? It is clearly similar to what
            Hiram Abiff exclaimed while attacked by the ruffians.
            <br /> <br />
            <br /> <br />
            3- The third sign is the Grand or Royal sign, and it is given by
            rising your arms 3 times accompanied by the words: All Glory To The
            Most High
            <br /> <br />
            <br /> <br />
            The Substituted Secrets
            <br /> <br />
            Clearly this degree focuses on death. But we also, allegorically,
            experience a rebirth. The more we are able to walk on the tomb of
            our materiality the closer we are to the spirituality of the Oneness
            but with the awareness that the true, final union can only take
            place beyond the veil of this mortal life as man can never
            comprehend the infinite and his dreams of Truth always fall short of
            the Absolute. <br /> <br />
            <div className="grid justify-center ">
              <Image
                alt=""
                src="/MembersArea_ThirdDegree/Picture21.png"
                width="400"
                height="560"
              />
            </div>
            <br /> <br />
            {/* page 19 */}
            On this earth we can only have a reflection of what true union with
            the Divinity is (well expressed by the mirror image of the masonic
            cypher). That&apos;s why we have substitute secrets.
            <br /> <br />
            In the words of Julian Rees &quot;This seems perplexing, even
            perverse … although you have been raised as a Master Mason, yet the
            genuine secrets are not there; you must be content with substitute
            secrets&quot;
            <span className=" text-sm align-top ..."> 8 </span>.
            <br />
            For Albert Mackey it is so because the Lost Word is a symbol that
            stands for Divine Truth and that can only be attained in the
            afterlife.
            <br />
            But although the True Word, that is the Absolute of Deity, the
            Oneness of Creation cannot be reached in this world, in the striving
            for the Absolute, men always produced words and ceremonies which aid
            us to come near to the True Word. This is the case of our Substitute
            Word. It is like the cathedrals of Gothic architecture: they cannot
            reach the Heaven but take us nearer to it, at least in spirit.{" "}
            <br /> <br />
            <br /> <br />
            ____________________
            <br />
            <span className="text-base">
              <span className=" text-sm align-top ..."> 8 </span>
              Rees J. Making Light: a Handbook for Freemasons. Lewis Masonic
              2012
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 20 */}
            <p className=" font-semibold text-center">
              {" "}
              Full-fledged freemason
            </p>
            <br /> <br /> <p className=" font-semibold "> Obligation</p>
            <br />
            Where did the Cable Tow come from? How did its use in ritual
            originate? There are various hypotheses <br /> <br />
            But the origin hardly matters. Far more important is the symbolic
            meaning the cable tow imparts, and this is never disputed. <br />{" "}
            <br />
            The cable tow, then, is obviously a symbol of bonding. Like the
            Vincula of the medieval sages, used to intend bonds that unite all
            things in the great chain of sympathies that connects all beings,
            the cable tow is a material representation of an archetypal process.{" "}
            <br /> <br />
            It is a bond, a binding, not just to the brethren of the Lodge … but
            also before God Himself. By wearing the cable tow I have become tied
            … And yet it does also bind the brethren together. This is, perhaps,
            the most common understanding of the symbol <br /> <br />
            The longer your cable tow the greater your spirit in service of
            Masonry. <br /> <br />
            How far would you walk, barefoot and broken, to relieve a brother
            suffering? <br /> <br />
            &quot;if within the length of his cable-tow,&quot; which means,{" "}
            <span className=" font-semibold ">
              {" "}
              if within the reach of his power
            </span>
            <br /> <br /> <br /> <br />
            <p className=" font-semibold "> Charges</p>
            <br />
            The Entered Apprentice is welcomed and informed that Masonry has its
            roots in antiquity and serves as an institution for learning and
            self-improvement. He is instructed to inculcate, or deeply impress
            upon himself, three great duties, which are to God, to his neighbor,
            and to himself. Likewise he is cautioned about his civil conduct,
            his outward demeanor, his attendance, and further instruction in
            Masonry. Finally he is charged to keep the secrets and preserve the
            dignity of the Fraternity. <br /> <br />
            The Fellowcraft is recognized for his advancement and encouraged to
            increase in knowledge. The candidate is charged to judge wisely and
            to develop his knowledge of the liberal arts, especially geometry.
            Since geometry and Masonry were originally synonymous in meaning,
            the candidate is expected to conform to the principles of the order
            in developing their own moral character. Studying the Works of God
            and gaining knowledge are the central duties contained within this
            degree. <br /> <br />
            The Master Mason is commended for his advancement and tied more
            closely to the Craft. His charges include duty, honor, gratitude,
            dignity, and guardianship. In addition to benevolence, regularity of
            conduct, preservation of the landmarks, and customs, are added
            overall character. These bring together the binding of the candidate
            to the Brethren and the Craft. <br /> <br />
            {/* page 21 */}
            Taken individually, or in total, the Charges mark a path for each to
            follow in developing their moral and spiritual temple. Through
            reading a charge in the monitor or carefully listening to a
            presentation at a conferral, each Brother may gain insights into
            himself and his responsibilities as a Mason. As stated in the
            Monitor, Freemasonry is progressive, and a knowledge of its
            philosophy and teachings can only be acquired by time, patience,
            perseverance, and close application. The Charges do not represent
            the end of a degree, rather a beginning of one&apos;s life and
            character. <span className=" text-sm align-top ..."> 9 </span>
            <br /> <br />
            <br /> <br />
            <p className=" font-semibold "> Qualified Member</p>
            <br />
            A Master Mason is a Qualified Member of the lodge, and
            <br /> <br />
            <br /> <br />
            Entered Apprentices and Fellows of the Craft are not qualified
            members of the Lodge. Only when the member becomes a Master Mason,
            he will be a Qualified Member. Along with some privileges, as the
            right of vote, there are obligations: every Qualified Member must be
            in good standing. However, also Enter Apprentices and Fellows of the
            Craft may be subject to an annual contribution if so prescribed in
            the Bye-Laws of the Lodge. This rule doesn&apos;t apply to Lodge
            Lane Xang. The dues for the year must be paid before the 31{" "}
            <span className=" text-sm align-top ..."> st </span> of December of
            the previous year.
            <br /> <br />
            <br />
            Below is a typical chart of the Lodge assets.
            <br />
            <p className="text-center pr-10"> Assets</p>
            <br />
            <div className="flex ">
              <div className="w-1/2 grid gap-y-5">
                <p>Cash at bank</p>
                <p>Petty cash</p>
                <p>Total liquid assets</p>
              </div>
              <div className="w-1/2 grid gap-y-5">
                <p>(a)</p>
                <p>(b)</p>
                <p>(C = a + b)</p>
              </div>
            </div>
            <div className="flex pt-14">
              <div className="w-1/2 grid gap-y-5">
                <p>Debtors</p>
                <p>Regalia (non-disposable assets)</p>
                <p>Total Non-Disposable Assets </p>
              </div>
              <div className="w-1/2 grid gap-y-5">
                <p>(d)</p>
                <p>(e)</p>
                <p>F (d + e) </p>
              </div>
            </div>
            <div className="flex pt-20">
              <div className="w-1/2 ">
                <p className="underline ">Total Assets </p>
              </div>
              <div className="w-1/2 ">
                <p className="font-semibold">G (C + F)</p>
              </div>
            </div>{" "}
            <br /> <br /> <br /> <br />
            ____________________
            <br />
            <span className="text-base">
              <span className=" text-sm align-top lg:hidden"> 9 </span>
              <span className="hidden lg:block">
                <span className=" text-sm align-top "> 9 </span>
                http://www.themasonictrowel.com/Articles/degrees/Ceremonies/the_charges_of_the_degrees_gltx.htm
              </span>
              <sapn className="lg:hidden">
                http://www.themasonictrowel.com/Articles/degrees/
                <br />
                Ceremonies/the_charges_of_the_degrees_gltx.htm
              </sapn>
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 22 */}
            <p className="text-center"> Liabilities</p>
            <br />
            <div className="flex pt-10">
              <div className="w-1/2 ">Stewards Fund</div>
              <div className="w-1/2 ">(h)</div>
            </div>
            <br />
            (it is the balance of any meeting, harmony or other function.
            Ideally should be zero, as we should not lose or earn any money out
            of it)
            <br /> <br />
            <div className="flex pt-10">
              <div className="w-1/2 ">Charity Fund</div>
              <div className="w-1/2 ">(i)</div>
            </div>
            <br />
            (is the sum of what has been collected for charity, during the
            meeting or by any donation)
            <br /> <br />
            <div className="flex pt-10">
              <div className="w-1/2 ">Benevolent Fund </div>
              <div className="w-1/2 ">(l)</div>
            </div>
            <br />
            (this Fund is composed by the 10% of our annual due and its purpose
            is relieving suffering, if any, amongst brethren, or their family,
            in need)
            <br /> <br />
            <div className="flex pt-10">
              <div className="w-1/2 ">District Grand Lodge </div>
              <div className="w-1/2 ">(m)</div>
            </div>
            <br />
            (to cover its expenses, District Grand Lodge is allocated 30
            Malaysia ringgit – District Grand Lodge of the Middle East has his
            headquarters in Malaysia – per Qualified Member)
            <br /> <br />
            <div className="flex pt-10">
              <div className="w-1/2 ">
                <p className="underline ">Total Liabilities </p>
              </div>
              <div className="w-1/2 ">
                <p className="font-semibold">N (h + i + l + m)</p>
              </div>
            </div>
            <br /> <br />
            <div className="flex border-2 border-black">
              <div className="w-1/2 ">
                <p className="underline ">General Fund </p>
              </div>
              <div className="w-1/2 ">
                <p className="font-semibold">O (G – N)</p>
              </div>
            </div>
            <br /> <br />
            <br /> <br />
            {/* page 23 */}
            <p className="text-center font-semibold"> Some final notes</p>
            <br /> <br />
            Remember your Solemn Obligation. There is a strict code of conduct
            to which you are required to adhere in your everyday life. <br />{" "}
            <br />
            As a new master mason, it is hoped that in a short while you will
            wish to climb the ladder of progression within the lodge culminating
            in years to come with your installation as Right Worshipful Master,
            the pinnacle of the masonic career. <br /> <br />
            But for the moment, you just watch, listen and learn. <br /> <br />
            Study the ritual and not to be embarrassed asking a more experienced
            member of the lodge anything which is not clear to you. <br />{" "}
            <br />
            Try to visit other lodges, as each lodge approaches the ritual in a
            different manner but also to meet new brethren.
            <br /> <br />
            If the opportunity arises, volunteer to undertake stewarding duties,
            as this helps you get to get closer to the other brethren in your
            lodge.
            <br /> <br />
            Inform the Director of Ceremonies when you are ready to learn a
            small part of the ritual, so to be able to perform some floor work.
            <br /> <br />
            Be interested in everything that is going on in your Lodge. Become
            involved as an active and useful member, but do not overburden
            yourself. The true test is always a positive answer to this
            question:
            <br /> <br />
            <br /> <br />
            <p className="text-center"> Am I still enjoying myself? </p>
            <br />
            If you have problems in memorizing the ritual do not worry, you are
            not alone. It has to be recognised that some brethren, although
            wishing to be actively involved in the life of the Lodge, find it
            difficult to learn ritual. Fortunately, as a lodge has the need for
            many services, it is possible for you to offer services as almoner,
            librarian, organist, computer expert, caretaker or any other
            activity which may be beneficial for the lodge. Just be active in
            your lodge and enjoy.
            <br /> <br />
            <br /> <br />
            But, above all, remember that a Master Mason is, or should be, a
            leader. And a true leader
            <br /> <br />
            <ul className=" pl-10 list-disc">
              <li>Unites people, he does not divide them</li>
              <li>Is not interested in finding faults, but remedies</li>
            </ul>
            <br /> <br />
            <br /> <br />
            {/* page 24 */}
            <p className="text-center font-semibold"> Suggested Readings </p>
            <br /> <br />
            <div className="text-right">
              &quot;To mastering the Craft it takes many years&quot;
            </div>
            <br /> <br /> <br /> <br />
            <p className="underline"> Indispensable </p>
            <br />
            <span className="font-semibold italic">
              The &quot;Standard&quot; Ritual of Scottish Freemasonry
            </span>
            <br />
            (https://www.grandlodgescotland.com/product/the-standard-ritual-of-scottish-freemasonry/){" "}
            <br /> <br /> <br /> <br />
            <p className="underline"> Strongly suggested </p> <br />
            Harry Carr,{" "}
            <span className="font-semibold italic">
              The Freemason at Work
            </span>{" "}
            (Lewis Masonic 2011) <br /> <br />
            Harry Carr,{" "}
            <span className="font-semibold italic">World of Freemasonry.</span>
            (Lewis Masonic, 1984) <br /> <br />
            Robert Cooper,{" "}
            <span className="font-semibold italic">
              Cracking the Freemasons Code.
            </span>{" "}
            A useful introduction to Freemasonry written by the Curator of the
            Library of the Grand Lodge of Scotland. (Atria Books, 2006)
            <br /> <br /> Allen E. Roberts,{" "}
            <span className="font-semibold italic">
              The Craft and its Symbols.
            </span>{" "}
            Opening the door to masonic symbolism. (Macoy Publishing, 1974)
            <br /> <br /> David Stevenson,{" "}
            <span className="font-semibold italic">
              The Origins of Freemasonry. 1690 – 1710 Scotland&apos;s Century.
            </span>{" "}
            (Cambridge University Press, 2001)
            <br /> <br />
            <br /> <br />
            <p className="underline"> Something more?</p> <br />
            Tobias Churton,
            <span className="font-semibold italic">
              Freemasonry. The Reality.
            </span>{" "}
            (Lewis Masonic, 2007)
            <br /> <br /> Robert L.D. Cooper,{" "}
            <span className="font-semibold italic">
              The Rosslyn Hoax? Viewing Rosslyn Chapel from a new perspective
            </span>{" "}
            (Lewis Masonic, 2006).
            <br /> <br />
            {/* page 25 */}
            Arturo de Hoyos, ed., Albert Pike&apos;s{" "}
            <span className="font-semibold italic">
              Esoterika: The Symbolism of the Blue Degrees of Freemasonry
            </span>{" "}
            (Scottish Rite Research Society, 2008)
            <br /> <br />
            Colin Dyer,
            <span className="font-semibold italic">
              Symbolism in Craft Freemasonry
            </span>{" "}
            (Lewis Masonic, 2006)
            <br /> <br />
            Bernard E. Jones,
            <span className="font-semibold italic">
              Freemasons Guide and Compendium
            </span>{" "}
            (Cumberland House, 2005)
            <br /> <br />
            Douglas Knoop and G.P. Jones,
            <span className="font-semibold italic">
              The Genesis of Freemasonry: An Account of the Rise and Development
              of Freemasonry in Its Operative, Accepted, and Early Speculative
              Phases
            </span>{" "}
            (Manchester University Press, 1947)
            <br /> <br />
            Julian Rees,
            <span className="font-semibold italic">
              The Stairway of Freemasonry
            </span>{" "}
            (Lewis Masonic, 2007)
            <br /> <br />
            David Stevenson,
            <span className="font-semibold italic">
              The First Freemasons: Scotland&apos;s Early Lodges and Their
              Members
            </span>{" "}
            (Aberdeen University Press, 1988)
            <br /> <br />
            ____________________
            <br />
            i
            <br />
            <div className="flex  justify-items-center gap-x-5">
              <div>
                <Image
                  alt=""
                  src="/MembersArea_ThirdDegree/Picture22.gif"
                  width="400"
                  height="400"
                />
              </div>
              <div>
                <Image
                  alt=""
                  src="/MembersArea_ThirdDegree/Picture23.png"
                  width="400"
                  height="400"
                />
              </div>
              <div>
                <Image
                  alt=""
                  src="/MembersArea_ThirdDegree/Picture24.jpg"
                  width="400"
                  height="400"
                />
              </div>
            </div>
            {/* END Page */}
            <br/>
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
