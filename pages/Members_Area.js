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
            <p className=" text-3xl">Welcome to the Journey </p>
            <div className=" pt-8  ">
              Every journey produces changes. In joining Freemasonry you have
              embarked on a journey that we hope will have a significant,
              positive imprint on your life.
              <div className="pt-5 justify-center grid">
                <Image alt="" src="/Overview/Picture1.jpg" width="900" height="600" />
              </div>
              {/* page 2 */}
              <div className="pt-5 justify-center grid">
                <Image alt="" src="/Overview/Picture2.jpg" width="900" height="600" />
              </div>
              <p className=" pt-10">
                [A Freemasons’ Lodge must be] &quot;A safe and pleasant Relaxation
                from Intense Study or the Hurry of Business, without Politicks
                or Party&quot;
                <br />
                Rev. Anderson
              </p>
              <br /> <br />
              {/* page 3 */}
              <p className="font-semibold text-center pt-5 ">
                What is Freemasonry?
              </p>
              <p className=" pt-10">
                As an Entered Apprentice, it is very difficult to have a clear
                idea of what Freemasonry is, after all Freemasons themselves
                seem to have different ideas on what Freemasonry is.
                <br /> <br />
                We must made clear, since the beginning, that Freemasonry is not
                a secret society. If it were a secret society we wouldn’t have
                our meetings in public buildings, have a website, a Facebook
                page, twitter, a museum, and so on. Freemasons are simply asked
                not to share the specific modes of recognition used during their
                ceremonies, which are the signs, the grip, and the
                distinguishing word of the degree.
                <br /> <br /> It is not a religion nor is it a substitute for
                religion. It requires of its members a belief in a Supreme
                Being, that we call The Great Architect of the Universe, but
                advocates no sectarian faith or practice although is far from
                indifferent toward religion and, without interfering in
                religious practice, it expects each member to follow his own
                faith. Freemasonry’s moral teachings are acceptable to all
                religions. Below are some famous people belonging to different
                religious faiths.
                <br /> <br />
                Freemasonry’s moral teachings are acceptable to all religions.
                Below are some famous people belonging to different religious
                faiths.
              </p>
              <div className="flex justify-center">
                <div className="pt-5 justify-center w-1/2">
                  <Image alt=""
                    src="/Overview/Picture3.png"
                    width="150"
                    height="200"
                  />
                  <div className=" pt-4">ISLAM</div>
                  <div className=" pt-4">Muhammad Abdullah. Islamic Jurist</div>
                </div>
                <div className="pt-5 justify-center  w-1/2">
                  <Image alt=""
                    src="/Overview/Picture4.png"
                    width="300"
                    height="200"
                  />
                  <div className=" pt-4">CHRISTIANITY</div>
                  <div className=" pt-4">
                    Geoffrey Fisher. Archbishop of Canterbury
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-10">
                <div className="pt-5 justify-center w-1/2 ">
                  <Image alt=""
                    src="/Overview/Picture5.jpg"
                    width="200"
                    height="200"
                  />
                  <div className=" pt-4">JUDAISM</div>
                  <div className=" pt-4">Israel Brodie. Chief Rabbi</div>
                </div>
                <div className="pt-5 justify-center  w-1/2">
                  <Image alt=""
                    src="/Overview/Picture7.jpg"
                    width="350"
                    height="200"
                  />
                  <div className=" pt-4">HINDUISM</div>
                  <div className=" pt-4">Swami Vivekananda, Monk and reformer</div>
                </div>
              </div>
            </div>
            <br /> <br />
            {/* page 4 */}
            <span className=" pt-10">
              Freemasonry consists of ideas, concepts, moral convictions, hybrid
              theologies and knowledge both practical and spiritual.
              <br />
              We do not know when this spiritual content first appeared; it
              certainly pre-dates the appearance of the word &quot;Freemasonry&quot;
              <span className=" text-sm align-top ...">1</span> and has never
              changed. The masonic system of morality – one of the simplest, and
              for this reason probably one of the best definitions of
              Freemasonry is: Freemasonry is a system of morality, veiled in
              allegory and illustrated by symbols – is taught through symbolism,
              allegories, and metaphors during the masonic meetings which are
              nothing more than ritual dramas. In fact, allegories, symbolism,
              and metaphors are tools which, turning stories about someone else
              into stories about &quot;me&quot;{" "}
              <span className=" text-sm align-top ...">2</span> , make the
              ritual drama not something that must just be heard, but an active
              environment in which the participants become the protagonists, and
              participation in the story enacted during the meetings creates a
              personal experience that is not possible otherwise.
              <br /> <br /> Apart from its spiritual content, Freemasonry has
              grown and changed over time. In today’s days lodges the elementary
              principles of Freemasonry are exemplified in the three degrees
              worked in them: Enter Apprentice, Fellow of Craft and Master
              Mason. In a recent article, Bro. Robert Cooper, the Curator of the
              Grand Lodge of Scotland Museum and Library, said: &quot;Participation
              in Freemasonry is a personal experience that differs from person
              to person. The meaning of different aspects of Freemasonry, can
              also differ from person to person&quot;.
              <br /> <br />
              In fact, among Freemasons, there are many widespread ideas on what
              constitutes Freemasonry. One of the main divisions among brethren
              is in relation to esotericism.
              <br /> <br />
              Some of the brethren in fact believe that Freemasonry is the
              inheritor of the secret knowledge encoded in our rituals, symbols
              and traditions. Obviously, they see esotericism as the main
              element of the Craft.
              <br /> <br />
              Other Freemasons, instead, are prevalently focused on charity,
              mutual support, moral virtues and friendship
              <span className=" text-sm align-top ...">3</span>.
              <br /> <br />
              In any case, in Freemasonry there is a strong emphasis on high
              moral standards, the practice of charity, the building of
              friendship and the building of important values such as integrity,
              self-discipline, virtue and responsibility. For this reason, it is
              said that Freemasonry turns good men into better men and, after
              all, what a better goal for Freemasonry?
              <br /> <br />
              At this point, we should ask if it is possible to determine what
              Freemasonry really is. This is a very difficult task, knowing that
              the nature of Freemasonry is not defined by our rituals and that
              there is also
              <br /> <br />
              ____________________
              <br />
              <span className="text-base">
                <span className=" text-sm align-top ...">1</span>
                Tobias Churton, Freemasonry, the Reality, Lewis Masonic 2006{" "}
                <br />
                <span className=" text-sm align-top ...">2</span>
                According to the prominent Freemason Bro. de Hoyos, Grand
                Librarian of the Ancient and Accepted Scottish Rite, these
                ritual-dramas usher us into a mythical realm, where the lessons
                are taught through quasi-historic &quot;heroic adventures.&quot; Through
                these we develop and improve our personal character.
                <br /> <span className=" text-sm align-top ...">3</span> According
                to a survey launched not so many years ago by the United Grand
                Lodge of England, 30% of English Freemasons believe that
                spirituality is not a distinctive feature of the Craft.
                <br />
              </span>
              <br /> <br />
            </span>
            {/* page 5 */}
            <p>
              little certainty in the real tenets of the Craft. In fact, our
              terms and symbols are not original, as they were used well before
              1717, the year in which the first Grand Lodge was established.
              Also, the moral symbolism of our working tools, as well as
              charitable activities, were only gradually introduced into masonic
              rituals and customs.
              <br /> <br />
              In the end, we must recognise that Freemasonry is an eclectic, not
              static organization, whose rituals change and evolve. It seems
              then, that to determine what Freemasonry really is, is still an
              open matter. And being the matter open to interpretation, who has
              the right to decide?
              <br /> <br />
              Bro. de Hoyos, the Grand Librarian of the Ancient and Accepted
              Scottish Rite, answered the question &quot;Is Freemasonry esoteric?&quot;
              with &quot;The short answer is yes, no, maybe&quot;. He then specified that
              we should avoid trying to advocate our preferred interpretation as
              the true one. And he added &quot;If esotericism interests you, that’s
              fine; if not, that’s also fine; and the same for all the other
              ways of intending Freemasonry; we should instead, find the common
              ground, where we can best work, and best agree&quot;. Still Bro. de
              Hoyos in another occasion said &quot;Let{"'"}s dwell together in unity by
              Hoyos in another occasion said &quot;Lets dwell together in unity by
              practicing the virtues of our fraternity, and not look for things
              to divide us&quot;.
            </p>
            <br /> <br />
            {/* page 6 */}
            <p className=" text-center pt-5 font-semibold">The common ground</p>
            <p className=" text-center pt-5 font-semibold">
              (Brotherly Love – Relief – Truth)
            </p>
            <p className=" pt-10">
              It is now evident that the Freemasonry is open to many
              interpretations and, indeed, many Freemasons differ in their
              understanding of the ethos of the Craft. However, there is one
              explanation that many Freemasons accept: the ethos of Freemasonry
              based on brotherly love, relief and truth, that is the three Great
              Principles of Freemasonry, which are also explained at pg. 27.
              Let’s see briefly what they mean for us.
              <br /> <br />
              Brotherly love means that all Freemasons are expected to treat one
              other with the respect that one would give to a blood brother. But
              it is also expected that the Freemason will not only treat fellow
              Freemasons as if they were blood relations, but also treat
              everyone else – Freemasons and no-Masons alike – in this manner.
              <br /> <br />
              Relief means charity, but not simply in terms of giving money to
              assist someone. It means charity in the most complete sense:
              kindness and willingness to try and understand others’ point of
              view.
              <br /> <br />
              Truth implies that great interior work through which Freemasons,
              having improved themselves, are truthful with themselves and
              consequently with others.
              <br /> <br />
              Harmony and Equilibrium
              <br /> <br />
              <br /> <br />
              In order to achieve these goals, Freemasons should never forget
              equilibrium in their behavior, without which no personal
              improvement can be achieved, and harmony among them, which is one
              of the consequences of Brotherly Love and a must in the brethren’s
              relationship.
              <br /> <br />
              In the end, whatever aspect of Freemasonry fits you, be active
              part of the life of your lodge.
              <br /> <br />
            </p>
            <br /> <br />
            {/* page 7 */}
            <p className=" text-center pt-5 font-semibold">History</p>
            <div className=" pt-10">
              We must realise that what in Freemasonry is called Traditional
              History, read during the meetings, is lore and not reality. When
              stone-masons wanted to give prestige to their organization,
              created stories based on the Bible, at that time the only book
              known by the almost totality of the few literates. The stonemasons
              obviously selected a lore based on a superb masonry construction:
              the Salomon’s Temple. Other corporations selected those Bible’s
              stories which brought prestige to their profession: the carpenters
              selected the Noah’ Arch, the gardeners the Garden of Eden and so
              on.
              <br /> <br />
              But history is different from lore. There are many theories about
              the birth and the development of Freemasonry. The principal ones
              are:
              <br /> <br />
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>a)</div>
                <div>
                  King Solomon Theory. Freemasons are the descendants of King
                  Solomon’s Temple’s High Priests. This claim is related to 1
                  Kings Ch. 5.8 and 2 Chronicles Ch. 3 of the Old Testament.
                  Much of today’s masonic ritual is symbolically based upon
                  certain legends connected with King Solomon Temple which,
                  according to Jewish tradition, is the centre of the universe..
                </div>
              </div>
              <br />
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>b)</div>
                <div>
                  Ancient Mysteries Theory. Schools of initiate orders in Egypt,
                  Greece, and the Near East are the predecessors of Freemasonry.
                  We must recognize that the Mysteries, designed as tests with
                  admission granted only to those who passed and were worthy of
                  further instruction, as well as the Pythagorean School,
                  certainly influenced the rituals that became a part of
                  Freemasonry.
                </div>
              </div>
              <br />
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>c)</div>
                <div>
                  Knight Templars Theory. Freemasons are the descendants of the
                  Knight Templars who found asylum in Scotland after their Order
                  was disbanded by Phillip the Fair and Pope Clement V.
                </div>
              </div>
              <br />
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>d)</div>
                <div>
                  Guild Theory. Stonemasons, who were responsible for building
                  the great cathedrals of the Middle ages, were organized into
                  guilds which offered some protection from the vagaries of
                  life. Stonemasons, working in all Europe, frequently
                  travelling from working site to working site, must have had
                  some sort of knowledge that they were not willing to share out
                  of the guild. This secret knowledge was handed down from
                  generation to generation and was the core of Freemasonry.
                </div>
              </div>
              <br />
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>e)</div>
                <div>
                  Neo-Gnosticism Theory. Neo-Gnosticism, in its spiritual,
                  magical and alchemical variation, Rosicrucianism included, is
                  considered by some of the brethren the vital core of
                  Freemasonry. In their opinion, it would be almost impossible
                  for the ancients stone-masons not to be touched by Middle-Ages
                  symbolic and supernatural visualizations.
                </div>
              </div>
              <br />
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>f)</div>
                <div>
                  Grand Lodge Theory. Freemasonry was born on 24 June 1717, St
                  Jo{"'"}Day, four London Lodges came together at the Goose and
                  Gridiron Tavern declaring themselves a Grand Lodge.
                </div>
              </div>
              <br /> <br />
              <p>
                Although many of the theories set out above are fascinating and
                also relatively successful, we must recognise that they are not
                supported by strong evidence. Concerning the last one, only if
                Freemasonry is seen as the government of a superior (to the
                Lodges) body (the Grand Lodge), you can assert that Freemasonry
                was born in 1717. However, current research tend to support and
                validate Freemasonry as an institution rooted in the evolution
                of stone masons’ organization.
                <br /> <br />
                <br /> <br />
                {/* page 8 */}
                From Operative to Speculative
                <br /> <br />
                The transition from operative to speculative masons was a
                consequence of the decline of Gothic architecture with the
                consequent reduced demands for great building projects.
                <br /> <br />
                It seems almost certain that we had not become Speculative
                Masons, our Craft would have been faced with extinction. Many of
                the institutions of that day – like the organizations of
                Gardeners, Potters, Carpenters and so on – did pass into
                oblivion but, by becoming speculative, the Craft has grown to a
                point never envisioned by its founders.
                <br /> <br />
                According to our present knowledge, William Schaw (1550 – 1602),
                the Master of Works to James VI of Scotland&rdquo; may have been the
                first non-stonemason to be initiated into a lodge. But his
                importance mostly lies in the fact that he may as well be
                regarded as the architect of modern Freemasonry. He wrote what
                are now known as the Schaw Statutes (First and Second). The
                Statutes contain a large amount of interesting information
                regarding stonemason lodges, but the most important aspect of
                them is that they formalised an existing organization and
                instituted a much more organised system including the keeping of
                written records. This is why the oldest lodges’ records date
                from soon after his statutes.
                <br />
                One of the inevitable consequences of Schaw&apos;s instructions was
                that lodges became fixed, permanent institutions. There were no
                longer casual meeting when thought necessary, usually to
                initiate a candidate or conduct lodge business, but meetings at
                set dates <span className=" text-sm align-top ">4</span> and written
                records.
                <br />
                Thanks to the lodge records, in 17
                <span className=" text-sm align-top ">th</span> Century we can
                detect contemporaneously lodges of working stonemasons, lodges
                of gentlemen (the future speculative masons) and mixed lodges,
                that is lodges in which part of its members were operative and
                partly gentlemen. At that time, we believe that the lodges,
                unless of course it was a specific interest of some of the
                members, didn’t necessarily pursued profound symbolism. But then
                arrived in England the Rosicrucian movement which aroused the
                interest of two leading Freemasons: Moray and Ashmole. The
                Rosicrucian movement linked the Masonic brotherhood to those who
                would build a spiritual house &quot;not made with hands&quot; [Mark
                XIV.55-58].
                <br /> <br />
                Eventually, non-operative masons working in a lodge adopted many
                of the tools of operative masons, and used them as metaphors for
                human traits. So instead of using masonic tools to build
                physical structures, they speculated on how they could use these
                same tools to build, improve and strengthen character, personal
                righteousness and responsibility and so enlighten themselves as
                to those things which make for human welfare, and inspire them
                with that feeling of charity or good will, toward all mankind
                which will move them to translate principle and conviction into
                action. The non-operative masons had become speculative masons.
                <br />
                At the beginning of the Eighteen Century, soon after the
                creation of the Grand Lodge system, despite the third Grand
                Master of the Premier Grand Lodge of England, the duke of
                Wharton, was a fervent
                <br /> <br />
                ____________________
                <br />
                <span className="text-base">
                  <span className=" text-sm align-top ...">4</span> The main
                  annual meeting was on 27th December, that is Saint John the
                  Evangelist’s Feast Day.
                  <br /> <br />
                </span>
                {/* page 9 */}
                esoteric, the interest for spirituality and esoterism, born
                thanks to Rosicrucianism, ended in the British islands although
                remained active in the Continent giving birth to what is now
                sometimes called Continental Freemasonry
                <br /> <br />
                Naturally, Freemasonry landed in the British colonies, where it
                also served as a connective tissue of the British Empire. From
                there it spread to almost every part of the world assuming
                global dimension.
              </p>
            </div>
            <br /> <br />
            <br />
            {/* page10 */}
            <p className=" text-center pt-5 font-semibold">
              Structure of Freemasonry
            </p>
            <div className=" pt-10">
              In December of 1716, on St. John’s Day, a number of members met in
              London and had an informal meeting. As a result of this meeting
              the members of the four Lodges met again in London on June 24,
              1717 on St. John the Baptist’s Day and formed the first Grand
              Lodge (the Premier Grand Lodge of England) which started the
              modern organised Freemasonry as we know it today. Eventually the
              Grand Lodge became the regulatory body of all the lodges under its
              jurisdiction issuing laws, regulations and rituals.
              <br /> <br />
              Our Lodge, Lodge Lanna is on the roll of the Grand Lodge of
              Antient Free and Accepted Masons of Scotland, usually called Grand
              Lodge of Scotland ( www.grandlodgescotland.com ).
              <br /> <br /> The Grand Lodge of Scotland, composed of the Grand
              Office-Bearers, is the body governing the three degrees of
              Freemasonry within Lodges under its jurisdiction. Possesses
              supreme authority, grants Charters, and has the sole power of
              enacting and altering laws and regulations.
              <br /> <br />
              For the more efficient government and control of the Daughter
              Lodges, Grand Lodge has divided Scotland into Provinces and
              countries overseas into Districts, each having a Provincial or
              District Grand Lodge governed by Provincial or District Grand
              Master and Grand Office-Bearers to exercise supervision on behalf
              of Grand Lodge. Our District Grand Lodge is the District Grand
              Lodge of the Middle East, which has jurisdiction over Malaysia,
              Singapore and Thailand.
              <br /> <br />
              Duties to the Craft are specified in the Constitutions and Laws of
              the Grand Lodge. Duties and regulations to a specific lodge are
              listed in the Lodge’s bye-laws.
              <br /> <br />
              Relations between Grand Lodges are determined by the concept of
              Recognition. Each Grand Lodge maintains a list of other Grand
              Lodges that it recognises. When two Grand Lodges recognise each
              other and are in Masonic communication with each other, they are
              said to be in amity, and the brethren of each may visit each
              other’s Lodges and interact masonically. When two Grand Lodges are
              not in amity, inter-visitation is not allowed. There are many
              reasons one Grand Lodge will withhold or withdraw recognition from
              another, but the two most common are Exclusive Jurisdiction and
              Regularity.
              <br /> <br />
              Regularity is a concept based on adherence to Masonic Landmarks,
              which are requirements, obligations, signs, tokens, ornaments,
              furniture, jewels, symbol, words of its ritual and all those
              peculiar marks or customs by which we are able to designate our
              inheritance.
              <br /> <br />
              Landmarks along with Constitutions and Laws form the guiding
              principles of Freemasonry. Each Grand Lodge sets its own
              definition of what these Landmarks are, and thus what is Regular
              and what is Irregular. Essentially, every Grand Lodge will hold
              that its Landmarks are Regular, and judge other Grand Lodges based
              on those.
              <br /> <br />
              {/* page11 */}
              The most commonly shared rules for Recognition are:
              <div className="pl-20">
                <br />
                <ul className="list-disc">
                  <li> A belief in a Supreme Being.</li>
                  <li>
                    {" "}
                    Initiates should take their vows on the Volume of (their)
                    Sacred Law..
                  </li>
                  <li>
                    Only men can be admitted, and no relationship exists with
                    mixed Lodges (Lodges consisting of men and women).
                  </li>
                  <li>
                    The Grand Lodge has complete control over the first three
                    degrees, and is not subject to another body.
                  </li>
                  <li>
                    While in session, the Lodge shall display the Bible and, on
                    it, the square and compasses, plus the Volume of the Sacred
                    Law of those Brethren who are not Christian.
                  </li>
                  <li>
                    In the Lodge, there is no discussion of politics or
                    religion.
                  </li>
                  <li>
                    Antient Landmarks, customs and usages must be observed.
                  </li>
                </ul>
              </div>
              <br /> <br />
              Note that the believe in a Supreme Being brings as a consequence
              the institution of the prayer in the Lodge, that is the act of
              invoking the blessings of the Deity before and after our Masonic
              labours. This invocation, or prayer, doesn’t have any connection
              to a particular religion or faith, it being a universal need of
              the soul. The Lodge labours cannot be opened or closed without
              prayer, which is offered by Brother Chaplain. At the end of
              prayer, each brother responds with the words &quot;So Mote It Be,&quot;
              which is an ancient and archaic phrase meaning &quot;So may it ever
              be&quot;. At all times, during prayer, you should be at fidelity with
              your right hand shielding your heart.
              <br /> <br />
              <br /> <br />
            </div>
            {/* page12 */}
            <p className=" text-center pt-5 font-semibold">The Lodge-room</p>
            <p className=" pt-10">
              Our Ritual states that the Furniture of the Lodge are the
              so-called The Three Great Lights of Freemasonry, that is the
              Volume of the Sacred Law, the Compasses and the Square. However,
              other furniture is necessary during a masonic meeting, the most
              important of which are the rough and the perfect ashlar, the
              blazing star, the chequered floor, two columns (Boaz and Jachin)
              and the Tracing Board.
              <br /> <br />
            </p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture8.jpg" width="900" height="600" />
              <div className="pt-4 text-center text-sm">
                Lodge of the Grand Lodge of Scotland in Edinburgh
              </div>{" "}
              <br /> <br />
              Although the location of some of the Office-bearers could be
              different in other Lodges, in our Lodge this is where the
              Office-bearers are located:
            </div>
            {/* page13 */}
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture9.png" width="700" height="900" />
            </div>
            <br /> <br />
            <br /> <br />
            {/* page14 */}
            <p className=" text-center pt-5 font-semibold">Procession</p>
            <br />
            <p className=" pt-10">
              Freemasons enter the lodge-room in order. The order of lineup is:
              <br /> <br />
            </p>
            <br />
            <div className="pt-5 justify-center grid text-center ">
              <p className=" border-2 border-black ">Door of the Temple</p>
              <br /> <br />
              <p className=" pt-5">
                I. G.
                <br /> <br />
              </p>
              <div className="flex w-[400px] t">
                <p className=" w-1/2">S. D.</p>
                <p className=" w-1/2">J.D.</p>
              </div>
              <br />
              <div className="flex w-[400px] ">
                <p className=" w-1/2">SEC</p>
                <p className="w-1/2">TRE</p>
              </div>
              <br />
              <div className="flex w-[400px] ">
                <p className="w-1/2">S. W.</p>
                <p className=" w-1/2">J. W.</p>
              </div>
              <br />
              <p>CPL</p>
              <br />
              <p>S. B.</p>
              <br />
              <p>B.B.</p>
              <br />
              <p>R.W.M.</p>
            </div>
            <br /> <br />
            <p className=" pt-10">
              Office Bearers enter in procession as assembled, starting with the
              left foot. The Inner Guard, soon after entering, remains at the
              door. The others go alternatively to the North and South of the
              Lodge then halting and turning inward, building up two single
              lines from East to West at the end of the carpet. The BB enters
              and places the Bible on the Altar He then moves back to stay in
              line with the rest of the Office Bearers. The RWM passes between
              the two rows of Office Bearers, proceeds to his place in the East,
              and remains upstanding. The IG closes the door.
              <br /> <br />
              After the RWM has requested the Office Bearers to take their
              places in the Lodge, they will proceed as follows to their
              respective stations, all squaring the lodge and starting with
              their left foot.
            </p>
            <br /> <br />
            <br /> <br />
            {/* page15 */}
            <p className="text-center pt-5 font-semibold">The Office-Bearers</p>
            <br /> <br />
            <p className=" pt-10">
              To have a perfectly functioning Lodge are necessary many officers
              who, in the Grand Lodge of Scotland, are called Office Bearers.
              They serve in their relevant offices as a privilege and not as a
              right. It is expected that all Master Masons make a serious time
              commitment and sincere desire to properly perform the necessary
              duties taking responsibility of an office.
              <br /> <br />
              According to their office, Office Bearers can be elected,
              appointed, or ex-officio.
              <br /> <br />
              All nominations must be approved by the Master Masons of the Lodge
              during the Election Meeting in which will be also taken into
              consideration alternative nominations from the floor of the Lodge,
              provided that they are proposed and seconded by Master Masons in
              good standing and that the nominee has consented to being so
              nominated.
              <br /> <br />
              The elected officers can be divided into Continuing or Progressive
              Office Bearers.
              <br /> <br />
              We call Progressive Office Bearers those officers who generally
              bear an office for one year, maximum two. After that they progress
              to another office up to the highest office (Master of the Lodge)
              held by the Right Worshipful Master. Every office taken shows to
              the Office Bearer a different aspect of the Lodge and prepares him
              to be, eventually, the Master of the Lodge.
              <br /> <br />
              Usually this is the progression: Steward, Inner Guard, Junior
              Deacon, Senior Deacon, Junior Warden, Senior Warden, Right
              Worshipful Master, Immediate Past Master, Tyler.
              <br /> <br />
              The Continuing Officers stay in their office for a longer period,
              approximately 4 years. This is necessary as their job require a
              certain continuity. They are Secretary, Treasurer (both with
              administrative duty), Director of the Ceremonies (ceremonial
              duty), Almoner (with care duties) and Officers in charge of
              subcommittees, if any, responsible for membership, charity,
              communication and so on<span className=" text-sm align-top ...">5</span> .
              <br /> <br />
              Office-Bearers can also be appointed by the RWM (Depute and
              Substitute Master) or ex-officio (Immediate Past Master).
              <br /> <br />
              To hold a meeting are indispensable seven Office-Bearers: Right
              Worshipful Master, Worshipful Senior Warden, Worshipful Junior
              Warden, Senior Deacon, Junior Deacon, Inner Guard and Tyler. Other
              Officers indispensable for the good functioning of the Lodge, as
              well of the masonic meeting, are Secretary, Treasurer, Almoner,
              Chaplain, Steward, Bible Bearer, Organist and last, but not least,
              Director of the Ceremonies.
              <br /> <br />
              <br /> <br />
              ____________________
              <br /> <span className=" text-sm align-top ...">5</span> The
              General Committee of the Lodge (see below) has the authority to
              create sub-committees if it feels the need.
            </p>
            <br /> <br />
            <br /> <br />
            {/* page16 */}
            <p className=" text-center pt-5 ">Right Worshipful Master</p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture10.jpg" width="300" height="300" />
            </div>
            <br />
            <p className=" pt-10">
              The R.W.M. (worshipful is an Old English word meaning worthy of
              respect) is a symbol, as well as the most important officer of the
              Lodge.
              <br /> <br />
              Leadership and harmony are his first priority. He is symbolically
              seated East because, as in the world of nature the sun rises in
              the East spreading from there the material light, so the R.W.M. is
              seating in the East to spread to the Brethren the Light of his
              Masonic knowledge. He:
              <br /> <br />
              Is the presiding officer at the masonic meetings of his Lodge,
              including Harmony (dinner) afterwards.
              <br /> <br />
              Represents wisdom. During his term in office, has the authority to
              decide what can or cannot be discussed, put or refuse any motion,
              rule any brother out of order on any subject at any time. His word
              is final.
              <br /> <br />
              Represents the Lodge at the Grand Lodge. May delegate duties to
              Lodge Committees and to Lodge Office-bearers.
              <br /> <br />
              The RWM chairs the General Committee which is the executive body
              for the general running of the Lodge. The RWM and has the casting
              vote and he is ultimately responsible for the proper governance of
              the Lodge, being all Committees advisory.
              <br /> <br />
              The RWM works closely with the Lodge Secretary (his Executive
              Officer). All Lodge Correspondence must be through the Secretary
              to the RWM, except in matters of confidentiality particularly
              regarding the applications of prospective Candidates, when all the
              Brethren can communicate their personal views directly to the RWM.
              <br /> <br />
              While the Lodge is at labor, any brother addressing the RWM will
              stand up and salute him both at the beginning and at the
              conclusion of his remarks. Whenever a Brother has been delegated
              by the RWM to do a portion of the Ritual, he will come onto the
              floor of the lodge and salute the RWM before commencing and again
              after he has finished.
              <br /> <br />
              Brethren entering or leaving the Lodge room, while the Lodge is at
              labor, will salute the RWM before taking their seats or before
              leaving.
              <br /> <br />
              Whenever the RWM is standing up, the WSW and WJW will also stand.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page17 */}
            <p className=" text-center pt-5 ">Worshipful Senior Warden</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture11.png" width="300" height="300" />
            </div>
            <br />
            <p className=" pt-10">
              The WSW is the second-in-command of the Lodge and one of his main
              tasks is to ensuring, for the opening of the Lodge, that all
              present are Freemasons and that they are properly dressed.
              <br /> <br />
              He closes the Lodge at the RWM’s command and for this reason is
              symbolically seated in the West. The WSW represents strength. The
              jewel of his office is the level as he is to always consider
              himself on the level with all men and most especially his Brethren
              in Freemasonry.
              <br /> <br />
              His duty to see that the R{"'"}plans are duly implemented and
              carried out.
              <br /> <br />
              In carrying out his duties he should treat all Brethren as
              standing on the level.
              <br /> <br />
              The WSW is a Member of the General Committee and Committee of
              Enquiry.
              <br /> <br />
              With the exception of known Brethren and Brethren who are vouched
              for by Lodge Members, and of visiting Ruling Masters and Past
              Masters, who are tested by the IPM, the WSW tests all visiting
              Brethren in the rank they claim (Master Mason, Fellow Craft or
              Entered Apprentice) to ensure that they are duly qualified to
              attend the Lodge.
              <br /> <br />
              The WSW is responsible, at Harmony, for giving a Toast to the
              Absent Brethren.
              <br /> <br />
              Whenever the RWM is standing up, the WSW and WJW will also stand.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page18 */}
            <p className=" text-center pt-5 ">Worshipful Junior Warden</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture12.jpg" width="300" height="300" />
            </div>
            <br />
            <p className=" pt-10">
              The Worshipful Junior Warden is third Principal Officer of the
              Lodge and he is also in charge of the members when at refreshment
              during Harmony or in other circumstances in which refreshment is
              involved. These responsibilities include booking hotel rooms, the
              seating plan for the top table, the menu, the wines, the music and
              any other requirements.
              <br /> <br />
              As the stone-masons were used to have lunch at midday, the W.J.W.
              is symbolically seated in the South, which is the position of the
              sun at that time.
              <br /> <br />
              The jewel of his office is the plumb-rule and symbolizes upright
              behaviour which Freemasons should have at all times, also out of
              the Lodge.
              <br /> <br />
              In the triad &quot;Wisdom, Strength and Beauty&quot; he represents the
              beauty and the harmony of the Lodge. He should assist the WSW in
              seeing that the RWM’s plans are carried out.
              <br /> <br />
              Whenever the RWM is standing up, the WSW and WJW will also stand.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page19 */}
            <p className=" text-center pt-5 ">Treasurer</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture13.jpg" width="130" height="200" />
            </div>
            <br />
            <p className=" pt-10">
              The Treasurer, seated at the right of the Brother Secretary in the
              North of the Lodge, is in charge of Lodge funds.
              <br />
              He cares for monetary and fiscal affairs of the lodge, keeping
              track of funds, expenses, paying the bills and collecting the
              membership fees. The jewel of his office is the keys saltire,
              which symbolize his duty to protect the financial well-being of
              the Lodge
              <br /> <br />
              The Treasurer is a Member of the General Committee and Committee
              of Enquiry. He also advises the General Committee on the measures
              to be taken to maximize Lodge Funds.
              <br /> <br />
              The Treasurer is responsible for placing collection bags under the
              seats of the Deacons before the Lodge is opened.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page20 */}
            <p className=" text-center pt-5 ">Secretary</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture14.jpg" width="200" height="200" />
            </div>
            <br />
            <p className=" pt-10">
              The Secretary is seated in the North, next to the Treasurer, keeps
              the Lod
              <br /> <br />
              ge records and is responsible for the correspondence with the
              Grand Lodge, the District Grand Lodge, other Lodges and with
              whoever is contacting the Lodge. He is the Executive Officer to
              the RWM, his Principal Officers and his Committee. As such, his
              role is pivotal to the successful administration of the Lodge.
              <br /> <br />
              <br />
              He is also responsible for administrative matters under the
              direction of the Master. All official correspondence is to be
              communicated through him. He keeps the minutes of the meetings,
              communicates the same to District Grand Lodge, and handles the
              day-to-day affairs of the lodge.
              <br /> <br />
              The jewel of his office is the quills saltire and symbolize his
              role as recorder and communicator.
              <br /> <br />
              <br /> <br />
            </p>
            <p className=" text-center pt-5 ">Chaplain</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture15.jpg" width="200" height="200" />
            </div>
            <p className=" pt-10">
              The Chaplain is seated in the South-East corner. He acts as the
              spiritual guide of the Lodge and leads it in prayer. The jewel of
              his office is a symbol of Divinity, that is the All-Seeing Eye
              inside an equilateral Triangle.
              <br /> <br />
              The Chaplain is responsible to the RWM for leading all the ritual
              prayers in the Lodge under the direction of the Director of
              Ceremonies.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page21 */}
            <p className=" text-center pt-5 ">Bible Bearer</p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture16.jpg" width="300" height="200" />
            </div>
            <p className=" pt-10">
              The Bible Bearer seats in the South-East corner. His duty is to
              carry the Volume of the Sacred Law, which is the first Great
              Lights in Freemasonry (the other two are Compasses and Square)
              without which no Lodge is complete.
              <br /> <br />
              He places the VSL on the Altar, prepares the places for the
              readings which he attends to at the required times under the
              direction of the DoC
              <br />
              <br />
              During his readings he is accompanied by the Deacons who solemnly
              cross their wands.
              <br /> <br />
              His jewel is obviously the open Bible.
              <br /> <br />
              <br /> <br />
            </p>
            <p className=" text-center pt-5 ">Director of Ceremonies</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture17.jpg" width="250" height="200" />
            </div>
            <p className=" pt-10">
              The Director of Ceremonies is seated in the South-East corner. He,
              as ceremonial director of the Lodge, is responsible to the RWM for
              the proper conduct of the ritual and Masonic etiquette in the
              Lodge. Leads and organizes all meetings, processions. He also
              escorts and announces to the Right Worshipful Master Grand Lodge
              Office-bearers or others distinguished guests and whoever is
              entering or leaving the Lodge. The jewel of his office is the
              batons saltire. He has to hold his baton at all times and
              therefore, when the ritual imposes the Brethren to stay at order,
              he only does a court bow.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page22 */}
            <p className=" text-center pt-5 ">Almoner</p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture18.jpg" width="250" height="200" />
            </div>
            <p className=" pt-10">
              The Almoner encompasses the Freemasonry’s basic principle of
              caring for others, therefore, he is key to providing care to our
              members, their families, widows who may be experiencing
              difficulties in their life. He must report to the Lodge any case
              of illness or distress of the Brethren or their families and
              should be in possess of sympathetic understanding. He should take
              note of those who need a protracted care in order to pass his duty
              to his successor. His jewel is the level with compasses.
              <br /> <br />
              <br /> <br />
            </p>
            <p className=" text-center pt-5 ">Deacons</p>
            <br />
            <p className=" pt-10">
              The Deacons (SD & JD) work as a team and are responsible to the
              RWM, under the direction of the DoC, for facilitating much of the
              floor work in the Lodge. Their duties include :
              <br /> <br />
              * Accompanying the RWM when he enters and leaves the Lodge.
              <br /> <br />
              * Escorting the Bible Bearer when he opens, reads and closes the
              VSL
              <br /> <br />
              * Escorting distinguished visiting Brethren into the Lodge.
              <br /> <br />
              * Carrying (SD) the Minute Book from the Secretary to/from the RWM
              for/after signature
              <br /> <br />
              * Conducting any Ballot, under the direction of the DoC
              <br /> <br />
              * Escorting the Candidates through all the Degrees, prompting
              responses as required.
              <br /> <br />
              * Changing the Tracing Board as required.
              <br /> <br />
              * Collecting the donations made at each meeting.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page23 */}
            <p className=" text-center pt-5 ">Senior Deacon</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture19.jpg" width="250" height="200" />
            </div>
            <p className=" pt-10">
              He is seated in the North-East corner of the Lodge, at the right
              of the R.W.M. The jewel of his office is the mallet, which reminds
              that skill without exertion is of little use. He has to hold his
              wand at all times and therefore, when the ritual imposes the
              Brethren to stay at order, he only does a court bow.
              <br /> <br />
              <br /> <br />
            </p>
            <p className=" text-center pt-5 ">Junior Deacon</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture20.jpg" width="250" height="200" />
            </div>
            <p className=" pt-10">
              The Junior Deacon is seated in the West, on the right of the
              Senior Warden. Like the S.D. he has to hold his wand at all times
              and therefore, when the ritual imposes the Brethren to stay at
              order, he only does a court bow.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page 24 */}
            <p className=" text-center pt-5 ">Inner-Guard</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture21.jpg" width="200" height="180" />
            </div>
            <p className=" pt-10">
              The Inner Guard (IG) stands within the entrance to the Lodge,
              controlling all the movement of the Brethren in and out of the
              Temple, in partnership with the Tyler or Outer Guard to secure the
              Lodge at all times. He receives Candidates, reports to the WJW
              that the Lodge is tyled (securely closed) and that the Tyler is
              properly at his station. Furthermore, he admits Brethren on proof,
              receive Candidates in due form, and obey the commands of the
              W.J.W.
              <br />
              His jewel is two swords in saltire, meaning that the Lodge is
              closed to the unqualified and the unworthy.
              <br /> <br />
              <br /> <br />
            </p>
            <p className=" text-center pt-5 ">Tyler</p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture22.jpg" width="200" height="200" />
            </div>
            <p className=" pt-10">
              The Tyler (to tyle is an old English word which means to cover and
              hence to protect) also called Outer Guard, is seated outside the
              door of the Lodge, where he will remain until the lodge is
              formally closed.
              <br /> <br />
              A Lodge is said to be &quot;properly tyled&quot; when the necessary
              precautions have been taken to guard against intrusion by cowans,
              eavesdroppers or other unauthorized persons. (A cowan is one who
              tries to masquerade as a Mason in order to gain admittance. An
              eavesdropper is one who tries to steal the secrets of our
              Society).
              <br /> <br />
              If a Brother comes to Lodge late and wants to join the meeting,
              the Tyler sees that he is properly clothed and then vouches for
              him as qualified to enter. It is the duty of the Tyler to inform
              the Inner Guard when a qualified Brother wishes to enter the
              Lodge.
              <br /> <br />
              The Tyler is also responsible for the correct attire of the
              Candidates. Preparation room and Dressing Room are laid out by the
              Tyler
              <br /> <br />
              Tyler’s jewel is an unsheathed sword with which he should keep off
              all cowans and eavesdroppers.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page 25 */}
            <p className=" text-center pt-5 ">Organist</p>
            <div className="pt-10 justify-center grid">
              <Image alt="" src="/Overview/Picture23.jpg" width="200" height="200" />
            </div>
            <br />
            <p className=" pt-10">
              The Organist is responsible for providing harmonious and
              appropriate accompaniments music suitable to the occasion. He is
              seated wherever the organ or piano or electronic music is located.
              The jewel of his office is the Grecian Lyre which symbolises the
              muse of music.
              <br />
              His jewel is two swords in saltire, meaning that the Lodge is
              closed to the unqualified and the unworthy.
              <br /> <br />
              <br /> <br />
            </p>
            <div className="pt-5 justify-center flex gap-x-20">
              <div>
                <p className=" text-center pt-5 pb-5">President of Stewards</p>
                <Image alt="" src="/Overview/Picture24.jpg" width="300" height="200" />
              </div>
              <div>
                <p className=" text-center pt-5 pb-5">Steward</p>
                <Image alt="" src="/Overview/Picture25.png" width="300" height="200" />
              </div>
            </div>
            <p className=" pt-10">
              The President of Stewards is seated on the right of the Junior
              Warden. He is responsible under the direction of the WJW for Lodge
              hospitality service.
              <br /> <br />
              Assisted by all the Stewards, in those Lodges provided of a
              kitchen, he is in charge for food preparation and for the stock of
              beverages. Furthermore, he is responsible for assisting the Junior
              Warden in welcoming visitors from other Lodges.
              <br /> <br />
              He sits in the South, directly to the right of the Worshipful
              Junior Warden. The jewel of his office is the cornucopia and cup
              (for Stewards only the cornucopia) which symbolise peace and
              plenty.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page 26 */}
            <p className=" pt-5 ">The appointed Office-Bearers are</p>
            <br /> <br />
            <p className=" text-center pt-5 ">Depute Master</p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture26.jpg" width="350" height="200" />
            </div>
            <p className=" pt-10">
              The Depute Master is the Office Bearer that sits on the chair if
              the R.W.W. and the Immediate Past Master are unable to attend the
              meeting. For this reason, he must be a Past Master. His jewel is
              Square and Compasses.
              <br /> <br />
              <br /> <br />
            </p>
            <p className=" text-center pt-5 ">Substitute Master</p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture27.jpg" width="250" height="200" />
            </div>
            <p className=" pt-10">
              Appointing a Brother Substitute Master is an honour given
              generally to the oldest Brother of the Lodge or to another Brother
              for a particular reasons. His jewel is the Square.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page 27 */}
            <p className=" pt-5 ">Office-bearer Ex-Officio</p>
            <br /> <br />
            <p className=" text-center pt-5 ">Immediate Past Master</p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture28.jpg" width="350" height="200" />
            </div>
            <p className=" pt-10">
              The Immediate Past Master is that Past Master who was in the Chair
              just before the present RWM. He seats at the left of the RWM to
              support him if needed. The jewel of his office is the Compasses on
              the arc of a circle, which along with the Square and symbolizes
              virtue.
              <br /> <br />
              Past Masters append the post nominal P.M. (past master) to their
              names.
              <br /> <br />
              <br />
              The Immediate Past Master (IPM) is the Office Bearer takes the
              Chair if the RWM is absent. and remains prepared to officiate at
              any Meeting of the Lodge or at any Committee Meeting as required.
              <br /> <br />
              The IPM is the senior advisor to the RWM and is a Member of the
              General Committee and Committee of Enquiry, which he will also
              chair in the absence of the RMW.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page 28 */}
            <p className=" text-center pt-5 ">The Lodge’s Committee</p>
            <br />
            <p className=" pt-10">
              Every Lodge has a General Committee for the management of the
              affairs of the Lodge. The General Committee Members decide the
              agenda of the Lodge meetings, assign the floor-works to the
              brethren, recommend to the Lodge the new RWM and the other
              Office-bearers.
              <br /> <br />
              The General Committee consists of the Master of the Lodge, Past
              Master, Depute Master, Substitute Master, Senior Warden, Junior
              Warden, Secretary, Treasurer, Almoner and those members prescribed
              in the Lodge By-Laws. In our Lodge are also part of the G.C. all
              Past Masters of the Lodge and two elective members
              <br /> <br />
              Every Lodge must have a Committee of Enquiry to take into
              consideration requests of membership. This Committee consists of
              the Master of the Lodge, Immediate Past Master, Senior and Junior
              Wardens, Secretary, Treasurer and two or more Qualified Members
              (that is Master Masons) of the Lodge.
              <br /> <br />
              The General Committee may appoint sub committees (i.e.
              Instruction, Communication, Charity, Benevolence, Auditing ...) to
              help the management of the Lodge.
              <br /> <br />
              <br /> <br />
            </p>
            {/* page 29 */}
            <p className=" text-center pt-5 ">Ritual</p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture29.jpg" width="300" height="400" />
            </div>
            <br />
            <p className=" pt-10">
              Freemasonry is all about ceremonies and ritual. Ritual is the
              means by which knowledge, moral lessons, Masonic lore and
              traditional histories – that means the meaning of Freemasonry –
              are transmitted to each new Freemason.
              <br /> <br />
              Even though the masonic ritual has undergone several iterations in
              its history, and numerous versions of ritual are practiced in
              various jurisdictions, ritual is the tie that unites the Masonic
              fraternity.
              <br /> <br />
              Masonic ritual has the ability to convey masonic teachings on
              multiple levels. For the more exoteric Mason, the rituals provide
              valuable moral lessons, which support the fraternal and charitable
              aspects of the fraternity. For the esotericists, the ritual
              alludes to symbols that can be used for spiritual transformation.
              To obtain this transformation it is not enough to know something.
              It is also important to experience this knowledge. And this is
              another function of the ritual which, if properly interpreted,
              makes a bridge between idea and experience.
              <br /> <br />
              In 1<span className=" text-sm align-top ">st</span> degree the
              candidate is supposed to leave his material aspirations, passions
              and unworthy traits of his character in order to receive the
              spiritual ones. However, it is worthy to remark that in the
              transformation that the candidate is supposed to experience during
              the Initiation rituals can only direct him, as the real
              transformation can only come from the inner life and previous
              knowledge and experience of the candidate. In fact, the Initiation
              is just starting a process. &quot;The purpose of masonic initiation is
              illumination – not total enlightenment … The first degree sets the
              potential master mason on the path&quot;
              <span className=" text-sm align-top ">6</span> .
              <br /> <br />
              <br /> <br />
              ____________________
              <br /> <span className=" text-sm align-top ">6</span> Tobias
              Churton. Freemasonry, The Reality
              <br /> <br />
              <br /> <br />
              {/* page 30 */}
              The earliest rituals were fairly simple, yet they contained some
              profound messages and lessons. Over the time ritual has become
              more elaborate, but that has not changed its original and
              fundamental purpose: explain Freemasonry. Simply put, without
              ritual there is not Freemasonry.
              <br /> <br />
              Sometimes it is wrongly assumed that some of the ritual’s stories
              that Freemasons use in order to convey particular lessons or moral
              precepts are actually true. They are instead, including
              traditional histories, construct of stonemasons and early
              Freemasons made to explain certain principles and never intended
              to be taken literally
              <br /> <br />
              It is interesting to know that even though our Grand Lodge
              releases a ritual called The Standard Scottish Ritual, in the
              Grand Lodge of Scotland doesn’t exist a ritual which every Lodge
              must follow. This is because, when the Grand Lodge of Scotland
              (G.L.o.S.) was established in 1736, in the kingdom of Scotland,
              unlike England, there were more than one hundred Lodges already in
              existence and, what is more, some predated the G.L.o.S. by more
              than 130 years. In order to bring these long established,
              independent Lodges on board of the Grand Lodge of Scotland, it was
              realised that it would have to allow such Lodges to continue with
              their own local customs and practices, ritual included. Still
              nowadays any Scottish Lodge can adopt its own ritual, provided
              that it gets Grand Lodge’s approval.
              <br /> <br /> <br /> <br />
            </p>
            {/* page 31 */}
            <p className=" text-center pt-5 font-semibold">
              Masonic Principles
            </p>
            <br />
            <div className=" pt-10">
              Freemasons are bond together in an association based on brotherly
              love, relief and truth. These are the principal tenets of
              Freemasonry. Derived from these tenets are the virtues of faith,
              hope and charity, and the whole is supported by the three great
              pillars of wisdom, strength and beauty.
              <br /> <br />
              <br />
              <p className=" text-center pt-5 ">The three Great Principles</p>
              <br /> <br />
              Brotherly Love
              <br /> <br />
              In the masonic sense, brotherly love means to regard the whole
              human species, the high and the low, the rich and the poor, as one
              great family. We must cast aside our passions and prejudices and
              remember that all men are our brothers. If we are able to do so,
              the consequence is to support and protect each other, to be
              willing to overlook or forget petty grievances or peculiarities.
              Freemasons are expected to show tolerance and respect for the
              opinions of others with kindness, tolerance, patience, and
              understanding which are the base of true friendship.
              <br /> <br />
              <br />
              Relief
              <br /> <br />
              A person may be distressed in many ways other than financial and
              there are many ways of giving relief, in fact a simple cheerful
              word at the right moment may give relief. To relieve the
              distressed is a duty incumbent on all men. We should sympathise
              with them in their misfortunes and restore peace to their troubled
              minds. We, as Masons, must be alert to recognize these
              opportunities and offer our services with humility and compassion
              in the way that will best bring relief. <br /> <br />
              <br />
              Truth
              <br /> <br />
              Truth is commonly intended as the opposite of falsehood. However,
              in the Masonic meaning, it is also synonymous with sincerity,
              honesty of expression, and plain dealing. For this reason it is
              the foundation of every virtue and it is on it that we regulate
              our conduct. At higher level Truth coincides with the knowledge of
              the Divinity<span className=" text-sm align-top ">7</span> . All
              Freemasons in their quest to achieve higher moral standards should
              strive for Truth.
              <br /> <br />
              <br /> <br />
              ____________________
              <br />
              <span className="text-base">
                <span className=" text-sm align-top">7</span> Mack{"'"}                Encyclopedia of Freemasonry.
              </span>
              <br /> <br />
              <br /> <br />
            </div>
            {/* page 32 */}
            <p className=" text-center pt-5 ">Virtues</p>
            <sapn>
              <br />
              Faith
              <br /> <br />
              Faith has variously been defined as belief, trust, devotion and
              dependence. It is a universal feature of humankind’s response to
              the presence of the divine in the midst of life. In the words of
              St. Paul, faith is the assurance of things hoped for, the
              conviction of things not seen. Faith is the bond of friendship and
              a support of society.
              <br /> <br />
              <br />
              Hope
              <br /> <br />
              Hope is an orientation towards some future event which will
              radically transform the present order. What is hoped for depends
              on the specific understanding of reality as displayed by a
              particular faith, by an individual or by society. Hope is a ground
              for expectation, trust or confidence. Hope can lead to
              dissatisfaction with the present order of things and becomes the
              basis of a liberating or transforming practice.
              <br /> <br />
              <br />
              Charity
              <br /> <br />
              Charity, or brotherly kindness, is said to be the chief of all the
              social virtues and ought to be the distinguishing characteristic
              of every Freemason, but we must not fall into the too common error
              that charity, which of course is highly commendable, is only
              assisting the poor with donations. Its Masonic meaning is more
              noble and more extensive. In fact, &quot;charity&quot; is a bad translation
              of the original word, which is αγάπη (agapi) or love, that is that
              kindly state of mind which renders a person full of goodwill and
              affectionate regard toward others
              <span className="text-sm align-top ">8</span> . The three virtues,
              then, would have been not &quot;faith, hope, and charity&quot; but &quot;faith,
              hope and love&quot;. Clearly, at a certain level, love and charity may
              coincide<span className="text-sm align-top ">9</span> .
              <br /> <br />
              <br /> <br />
              ____________________
              <br /> <span className="text-sm align-top ">8</span> &quot;Though I speak
              with the tongues of men and of angels, and have not charity, I am
              become as sounding brass, or a tinkling cymbal. And though I have
              the gift of prophecy, and understand all mysteries and all
              knowledge; and though I have all faith, so that I could remove
              mountains, and have not charity, I am nothing.&quot; (1 Corinth. xiii.
              1, 2.) <br />
              <span className="text-sm align-top ">9</span> &quot;Once when I was a
              teenager, my father and I were standing in line to buy tickets for
              the circus. Finally, there was only one other family between us
              and the ticket counter. This family made a big impression on me.
              There were eight children, all probably under the age of 12. The
              way they were dressed, you could tell they di{"'"}have a lot of
              money, but their clothes were neat and clean. The children were
              well-behaved, all of them standing in line, two-by-two behind
              their parents, holding hands. They were excitedly jabbering about
              the clowns, animals, and all the acts they would be seeing that
              night. By their excitement you could sense they had never been to
              the circus before. It would be a highlight of their lives. The
              father and mother were at the head of the pack standing proud as
              could be. The mother was holding her husba{"'"}hand, looking up at
              him as if to say, &quot;Y{"'"} my knight in shining armor.&quot; He was
              smiling and enjoying seeing his family happy.
              <br /> <br />
              <br /> <br />
            </sapn>
            {/* page 33 */}
            <p className=" text-center pt-5 ">Pillars of Freemasonry</p>
            <br />
            <p>Wisdom, Strength, Beauty </p>
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture30.png" width="400" height="300" />
            </div>
            <br />
            <div>
              In pursuing knowledge, we realise that knowledge, in itself, is
              insufficient but if coupled with understanding it will produce
              wisdom, which will direct all our endeavors.
              <br /> <br />
              In turn, wisdom gives an inner strength, which will support us in
              all dangers and difficulties. These two, combined, will produce
              beauty, not the beauty of adornment, but the inner beauty of
              insight.
              <br /> <br />
              <br /> <br />
              ____________________
              <br />
              <p className="text-base">
                The ticket lady asked the man how many tickets he wanted? He
                proudly responded, {"'"}like to buy eight childr{"'"}tickets and
                two adult tickets, so I can take my family to the circus.&quot; The
                ticket lady stated the price. The m{"'"}wife let go of his hand,
                her head dropped, the m{"'"}lip began to quiver. Then he leaned
                a little closer and asked, &quot;How much did you say?&quot; The ticket
                lady again stated the price. The man di{"'"}have enough money.
                How was he supposed to turn and tell his eight kids that he
                di{"'"}have enough money to take them to the circus? Seeing what
                was going on, my dad reached into his pocket, pulled out a $20
                bill, and then dropped it on the ground. (We were not wealthy in
                any sense of the word!) My father bent down, picked up the $20
                bill, tapped the man on the shoulder and said, &quot;Excuse me, sir,
                this fell out of your pocket.&quot; The man understood what was going
                on. He wa{"'"}begging for a handout but certainly appreciated
                the help in a desperate, heartbreaking and embarrassing
                situation. He looked straight into my d{"'"}eyes, took my d{"'"}                hand in both of his, squeezed tightly onto the $20 bill, and
                with his lip quivering and a tear streaming down his cheek, he
                replied; &quot;Thank you, thank you, sir. This really means a lot to
                me and my family.&quot; My father and I went back to our car and
                drove home. The $20 that my dad gave away is what we were going
                to buy our own tickets with. Although we di{"'"}get to see the
                circus that night, we both felt a joy inside us that was far
                greater than seeing the circus could ever provide. That day I
                learned the value to give. The giver is bigger than the
                receiver. If you want to be large, larger than life, learn to
                Give. Love has nothing to do with what you are expecting to get
                - only with what you are expecting to give - which is
                everything. The importance of giving, blessing others can never
                be over emphasized because the{"'"}always joy in giving. Learn
                to make someone happy by acts of giving.&quot; Katharine Hepburn
              </p>
              <br /> <br />
              <br /> <br />
            </div>
            {/* page 34 */}
            <p className=" text-center pt-5 font-semibold">Symbols</p>
            <br />
            <div className=" pt-10">
              <span>
                Freemasonry is surrounded by symbols, allegories and symbolic
                actions. Without symbols there is no Freemasonry{" "}
                <span className="text-sm align-top ">10</span>.
                <br /> <br />
                Symbolism, in its most basic sense, involves using one thing to
                represent another. Words, signs, gestures, drawings, and
                physical articles can all be symbols with esoteric
                <span className="text-sm align-top ">11</span> as well as exoteric
                <span className="text-sm align-top ">12</span> meaning.
                <br /> <br />
                The study of masonic symbolism is an important aspect of
                personal spiritual growth in Freemasonry, but to benefit from
                the various meanings and lessons we find hidden within masonic
                symbols requires study, synthesis, association, and application.
                <br /> <br />
                Obviously, some of the symbols come from very, very far in time
                and seem to be forever lost to our interpretation. Some other
                symbols were originally not connected to any specific masonic
                meaning and the meaning that now we attribute to them are just
                but the result of subsequent interpretations.
                <br /> <br />
                Nowadays, there is the tendence to interpret symbols just
                morally and/or to associate them to a simple straightforward
                explanation, say, the sun represents this and the moon
                represents that. Yet, there is much more in a symbol that simple
                explanations.
                <br /> <br />
                Let’s see now what Bro. Cooper, masonic historian and Curator of
                the Scottish Museum and Library of the Grand Lodge of Scotland,
                has to say on the topic in one of his illuminating writings.
                <br />
                <br />
                <p className="italic">
                  The recent century has seen an accelerated secularization of
                  society, and this has contributed greatly to our inability to
                  appreciate a true understanding of religious symbolism. Once
                  symbols fall in disuse, their meaning and purpose are lost to
                  all but a few. They become part of a dead language.
                  <br /> <br />
                  In an increasingly secular, materialistic and empirical world
                  we lack the ability to understand symbols that society once
                  possessed. By symbols I mean something that is not a sign.
                  There is an important difference to be explained here. Signs
                  are designed for a specific purpose, for example, to impart a
                  particular piece of information such as &quot;roadworks ahead.&quot; A
                  sign does not have to impart any other layers of information,
                  whereas a symbol is intended to transmit more than can be seen
                  at superficial level, abstract concepts as well as facts. A
                  symbol can therefore be a sign but a sign cannot be a symbol.
                  No sign can say &quot;idea ahead&quot; as if referring to roadworks.
                  <br /> <br />
                  Today there is a temptation to interpret most of what we see
                  at the simple level of signs, signs with only a single,
                  literal explanation of message. That is all well and good when
                  it involves a straightforward
                </p>
                ____________________
                <br />
                <span className="text-base">
                  <span className=" text-sm align-top ">10</span> &quot;Symbolism is the
                  key to all mysteries, to all ancient and modern religions, to
                  all esoteric knowledge. Without an understanding of the
                  meaning of symbols, one will never appreciate the beauty of
                  life, or understand what his own religion is trying to teach
                  him. But as the knowledge of the meaning of symbols comes to
                  him, he becomes more and more a free man, or initiate. Words
                  are inadequate to carry of convey spiritual truths, for all
                  the words have a material origin, and, originally, a material
                  meaning. Masonry does not use words to convey the deeper
                  spiritual truths, it uses symbols, generally simple figures
                  whose beginning are hidden in the mystic past, and whose first
                  users are unknown, perhaps unknowable&quot;. [Leaves from Georgia
                  Masonry, published by Grand Lodge of Georgia, in Symbolism in
                  Craft Freemasonry by Colin Dyer, Lewis Masonic, 2006].
                  <br /> <span className="text-sm align-top ">11</span> Esoteric:
                  Intended for or likely to be understood by only a small number
                  of people with a specialized knowledge or interest.
                  <br /> <span className="text-sm align-top ">12</span> Exoteric:
                  Intended for or likely to be understood by the general public.
                  {/* page 35 */}
                  <br />
                  <br />
                  <span className="italic">
                    roadworks sign. However, if it involves an unfamiliar
                    Masonic symbol, confusion and suspicion may arise, as people
                    try to second-guess the symbol’s meaning and purpose,
                    usually getting it wrong. Superficial interpretations may
                    sometimes be offered and frequently accepted as correct,
                    because the number of people with the knowledge necessary to
                    understand the original interpretation [ … which remains the
                    correct interpretation] is very small.
                    <br /> <br />
                    This modern perception of symbolism is one reason why many
                    Freemasons find ritual and symbolism difficult to
                    understand, if not meaningless. Many of us have lost the
                    ability to understand that the symbol of, say, the square
                    and the compasses is much more than an image of measuring
                    instruments, that there is much more to it that meets the
                    eye.
                  </span>
                  <br /> <br />
                  Knowledge is worthless unless it is put into use. As a
                  consequence the study of symbols without applying their
                  lessons to our life is a mere intellectual exercise that will
                  bear no fruit. Instead, through symbols and our shared
                  traditions, each Mason must define and discover his own unique
                  path in the life.
                  <br /> <br />
                </span>
              </span>
              <br /> <br />
              <br /> <br />
            </div>
            {/* page 36 */}
            <p className=" text-center pt-5 font-semibold">
              Symbolism of the Initiation{" "}
            </p>
            <sapn>
              <br /> <br />
              Each of the symbols, emblems, and allegories of the First Degree,
              like those of any other degree, is a lesson of the degree.
              <br /> <br />
              Therefore, a general study of symbolism is recommended to every
              Freemason. Research into the historical uses and meanings of
              symbols utilized in the rituals, as well as a comparative study of
              mythology, provides a sure foundation for a solid masonic
              education.
              <br /> <br />
              The Freemason who get in possess of the truths hidden in the
              masonic symbols, can benefit not only his life, but also the
              society in general.
              <br /> <br />
              <br />
              <p className=" text-center pt-5 ">
                Preparation of the Candidate{" "}
              </p>
              <br />
              Before entering the lodge for the Initiation ceremony, the
              candidate’s dress is reduced to a minimum, suitable for a poor
              applicant in search for Light and with nothing else to offer but
              his willing heart. And that’s why he enters the lodge &quot;neither
              naked nor clothed&quot;.
              <br /> <br />
              <br />
              Blindfolded
              <br /> <br />
              The symbolism of the masonic blindfold is common to many ancient
              mysteries, and also to many primitive ceremonies of initiation.
              The blindfold represents the &quot;darkness,&quot; or ignorance, of the
              uninitiated. It will be removed at the appropriate time, when the
              Candidate is in the proper state of mind and qualified by his
              Obligation to receive masonic Light. Sometimes, instead of
              blindfold, is used the term &quot;hoodwink&quot;, but in its original
              meaning and not in the modern one, which implies an attempt to
              fool, defraud or cheat.
              <br /> <br />
              <br />
              Poorly dressed
              <br /> <br />
              The left breast is made bare so as to enable the knife or any
              other &quot;sharp instrument&quot; to be applied to the Candidate’s naked
              left breast (the side of the heart) on his admission to the Lodge,
              as well as for evidence of being the male sex.
              <br />
              The Candidate’s right arm is made bare (rolling up the sleeves) to
              show that is willing and able to work. According to another
              interpretation, the right arm bare has the same meaning of the
              handshake for showing that there is no weapon concealed up your
              sleeve.
              <br /> <br />
              The left knee made bare is that on which the Candidate kneels when
              taking the obligation. This is possibly an allusion to the
              sacredness of the oath taken.
              <br /> <br />
              The Candidate must also have his right heel slip shod. The custom
              of slip-shod heel is derived only partially from the practice in
              operative lodges, where the candidate for initiation had to slip
              off both his shoes at the appropriate time in the ceremony. Most
              likely, the masonic slipshod heel might be
              {/* page 37 */}
              symbolically regarded as equivalent to removing the shoes on holy
              ground (Exodus 3:5; Joshua 5:15; Matthew 3:11; Acts 7:33) as well
              as ratifying the obligation taken by the candidate (an ancient
              Scottish custom required the bridegroom to loosen one shoe-tie at
              the church door to indicate sincerity to an oath).
              <br /> <br />
              The cable-tow is a rope such as would be used to tow or restrain a
              heavy load. The masonic cable-tow has many meanings. It is
              regarded as a symbol of the voluntary and complete acceptance of,
              and pledged compliance with, whatever Freemasonry may have in
              store for the candidate. It is also symbolic of the candidate’s
              attachment to the outside world, an umbilical cord in symbolic
              terms. Each Freemason is bound to all other Masons by a tie
              symbolized by the cable-tow. Another explanation of the cable-tow,
              even if not extremely popular, links the cable-tow to the silver
              cord of Ecclesiastes 12:6. &quot;Remember Him before the silver cord is
              severed, and the golden bowl is broken; before the pitcher is
              shattered at the spring, and the wheel broken at the well&quot;. The
              length of the cable-tow is also frequently referred to in the
              language of Freemasonry. There are many opinions of exactly how
              long a cable-tow really was, and we do not have yet a satisfactory
              answer. One popular opinion suggests that someone’s cable-tow’s
              length was the distance one could travel on foot in one hour,
              which was assumed to be about three miles. This interpretation
              would explain why the length of the cable-tow now represents any
              reasonable distance from which a masonic summons must be answered,
              health, family, and business permitting.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 ">Entering the Lodge</p>
              <br />
              Entering the lodge room is entering into a new world. The
              Candidate leaves the darkness, destitution, and helplessness of
              the world, for the light and warmth of a new existence. It is not
              a mere formality, but the beginning of a new life in which duties,
              rights, privileges, and responsibilities are real and
              lifechanging. He stars a journey that will make him a different,
              more complete, and perfect man.
              <br /> <br />
              Entrance into the lodge may also be seen as symbolic of the
              movement from the outer to the inner, from the exoteric to the
              esoteric, from the world of material senses into the spiritual
              world of better understanding one’s true self and purpose, from
              the profane to the initiated.
              <br /> <br />
              If a newly initiated candidate is not to be an &quot;Apprentice&quot; in
              name only, he must stand ready to do the work upon his own nature.
              <br /> <br />
              Note that Freemasons should step off into the Lodge on their left
              foot. In Latin, the word for left is &quot;sinister&quot;, referring to the
              ancient concept that the right is just and correct and the left is
              of the sinister and evil. Therefore, to step off on the left foot
              is to symbolically trample evil under your left foot.
              <br /> <br />
              <br />
              <p className=" text-center pt-5 ">The Chequered Floor</p>
              <br />
              The masonic Chequered Floor is one of the most powerful appeal to
              the inseparable togetherness of the opposites: Light and Darkness,
              Good and Evil, Male and Female and so on. But its importance
              mostly resides in the fact that it tells us that every feeling,
              action, situation, everything connected to the materiality of this
              world is, at the same time, both positive and negative, just like
              every slope can be, according to where we look, uphill or
              downhill.
              <br />
              In the past chequered floors were drawn on an area contained
              within a heavy cord and on each corner there was a tassel with a
              loop on the sides. Our Tracing Boards have now replaced the cord
              with the tessellatated border, but quite often you will still find
              the tassels and the knot.
            </sapn>
            <br /> <br />
            <br /> <br />
            {/* page 38 */}
            <span>
              <p className=" text-center pt-5 ">
                Sharp instrument on the breast
              </p>
              <br />
              As soon as the Candidate Entered Apprentice enters the Lodge, he
              receives a jab into his bare left breast from the point of a
              dagger. The Conductor declares, &quot;…as this is a momentary torture
              to your flesh, so may the recollection of it prove an everlasting
              torture to your conscience should you ever attempt to reveal the
              secrets of Freemasonry unlawfully.&quot;
              <br /> <br />
              This unusual reception of the Candidate into the lodge room is
              intended to symbolise the fact that our rituals are serious and
              confidential and that there are consequences for violating this
              confidence. It also reminds that every act has a consequence,
              either in the form of a reward or a penalty.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 ">Circumambulation</p>
              <br />
              Circumambulation is the act of moving around a sacred object. It
              is a common practice in many religions and it is meant to give
              result to the object which lays in the center, alluding to its
              central and unchanging status.
              <br /> <br />
              In the Lodge-room we circumambulate around the Altar on which,
              among others, rests the VSL symbol of m{"'"}acknowledgment of his
              relationship to Deity.
              <br /> <br />
              In the circumambulation of the Lodge the Brethren follow the path
              of the sun which, of course, rises in the East, reaches its zenith
              in the South (in the Northern Hemisphere, where our ceremonies
              originate) then sets in the West, and returns to the East through
              the hours of darkness symbolically being the North in the masonic
              Lodge. In other words, the Brethren always circumambulate
              clockwise. This symbolically align them to a proper relationship
              of order of the universe.
              <br /> <br />
              While circumambulating the lodge, at every corner the brethren
              must stop and then turn and set off from the left foot in the
              correct direction. This is called &quot;squaring the lodge&quot;.
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 39 */}
            <span>
              <p className=" text-center pt-5 ">The Altar</p>
              <br />
              As a temple symbolises the presence of the Deity, the Altar
              symbolises the point of contact with that Deity. Its location, in
              the centre of the Lodge, alludes to the place that The Great
              Architect of the Universe (T.G.A.O.T.U.) has in Freemasonry and
              should have in Masons’ life.
              <br /> <br />
              On the Altar are displayed what we call the Three Great Lights of
              Freemasonry: the Volume of the Sacred Law (V.S.L.), The Compasses
              and the Square. The most common V.S.L. is the Bible, which is used
              both by Christians and Jewish and it will be always present in a
              Scottish Lodge. However, as Brethren can be of many different
              faiths, other Volumes of Sacred Law may be present. The most
              common are the Dhammapada (Mahayana Buddhism) the Pali recension
              of the Tipitaka (Theravada Buddhism) the Gita (Hindus) the Granth
              Sahib (Sikhs) the Koran (Muslims) and the Zenda Avesta (Parsees).
              <br /> <br />
            </span>
            <div className="flex justify-center pt-10 gap-x-6">
              <div className="pt-5 justify-center ">
                <Image alt="" src="/Overview/Picture31.jpg" width="500" height="300" />
              </div>
              <div className="pt-5 justify-center  ">
                <Image alt="" src="/Overview/Picture32.jpg" width="250" height="300" />
              </div>
            </div>
            <br /> <br />
            <span>
              The Candidate’s approach to the Altar to take his Obligation is by
              three steps longer and longer, symbolising a certain insecurity at
              the beginning (he is stepping into the unknown) and gradually a
              greater confidence.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 ">The Three Great Lights</p>
              <br />
              The path of Masonic life is illuminated by three great, though
              symbolic, lights, called The Three Great Lights of Freemasonry.
              They are the Volume of the Sacred Law, the Compasses and the
              Square.
              <br /> <br />
              The Volume of the Sacred Law represents the will of the Supreme
              Being as understood by man. The open V.S.L. signifies that we
              should regulate our conduct according to its teachings because it
              is the rule and guide of our faith and a symbol of man’s
              acknowledgment of his relation to Deity. Whenever the 40 VSL is
              open in a Lodge room a Scottish Mason will stand or walk with the
              sign of fidelity (right hand shielding the heart) as a sign of
              respect for the V.S.L.
              <br /> <br />
              {/* page 40 */}
              The Square is the emblem of rectitude and to &quot;act on the square&quot;
              is a familiar metaphor for fair and honest dealings with others.
              <br /> <br />
              The Compasses symbolize our intention to draw a boundary line
              around our own desires and passions, and our determination to keep
              ourselves within that circle of self-restraint and moderation – or
              excluding beyond its circle what is harmful or unworthy – which is
              the foundation of morality and wisdom and an opened door to
              spiritual life.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 ">The number three</p>
              <br />
              The Three Great Lights are also consistent with the three-tier
              system of modern craft Freemasonry. Indeed, the number three is
              recurrent in Freemasonry. Three are the Craft’s degrees, three are
              the steps to approach the Altar, there are three Lesser Lights
              (the Sun, the Moon, and the Master of the lodge), three are the
              main Office-Bearers of the Lodge, (R.W.M., W.S.W. and W.J.W.),
              three the Principal Tenets, the W.J.W. knocks three times to the
              Candidate’s shoulder, and so on.
              <br /> <br />
              There are many explanations why the number three has great
              significance, for example its tripartite nature of the world
              (heaven, earth, and waters), its tripartite nature of humans
              (body, soul and spirit) and so on. However, the significance of
              number three in Freemasonry derives almost certainly from the
              Pythagorean school according to which the number three, which they
              called triad, is the noblest of all digits, as it is the only
              number to equal the sum of all the terms below it, and the only
              number whose sum with those below equals the product of them and
              itself.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 ">The Masonic Obligation</p>
              <br />
              The Obligation is the heart of any Masonic degree. With this, the
              Candidate solemnly bounds himself to Freemasonry and to all others
              Freemasons in a bond referred to as the &quot;Mystic Tie&quot; by Scottish
              poet and Freemason Robert Burns, and accepts certain duties and
              responsibilities which are his to fulfil for the rest of his life.
              The taking of the Obligation is visible and audible evidence of
              the Candidate’s sincerity of purpose.
              <br /> <br />
              The ancient penalties for violating the Obligation, although not
              now (if they ever were) enforced, have been retained in our modern
              Scottish ritual to show how seriously a violation will be regarded
              by members of the fraternity.
              <br /> <br />
              <br /> <br />
            </span>
            {/* page 41 */}
            <span>
              <p className=" text-center pt-5 ">Sign, Grip and Word</p>
              <br />
              The only part of Freemasonry that is confidential to members is
              the means of ritual recognition between themselves. They are a
              Sign, a Grip (also called Token) and a Word. This stems from
              historical times when the mostly illiterate stonemasons, sought to
              prove to their employers that they were skilled and competent to
              build and design and worthy to receive payment for their level of
              talents. Freemasons today retain this custom as a symbolic
              statement of their reliability, integrity and trust.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 ">The Apron</p>
              <br />
              Our aprons, as well as the gloves13 , are (or should be) made of
              lambskin14 being that the lamb is a powerful symbol constantly
              associated with purity. It is also a symbol of innocence which,
              apart from a lack of moral defect, symbolises a new birth and, in
              this sense, it fulfills the goal of every initiation: the
              spiritual rebirth.
              <br /> <br />
              Wearing Aprons is clearly a legacy of our predecessors, the
              stonemasons. But it also signifies that we are active and
              operative in the building of our spiritual transformation and not
              mere theorisers nor passive observers.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 ">The North-East corner</p>
              <br />
              The Northeast Corner was traditionally the place where the most
              important piece of the construction, the cornerstone of a
              building, was laid. In fact, the northeast corner is traditionally
              the place where the foundation stone, the stone that holds all the
              construction of a building, a building that must defy the passage
              of time, is laid.
              <br /> <br />
              For this reason the newly made Entered Apprentice seats in the
              North-East, as the cornerstone of the future of the Lodge and the
              Craft.
              <br /> <br />
              Note that the North, in Freemasonry, is attributed to darkness and
              the East to Light. Therefore, the E.A. is yet in darkness, but
              receives positive influence by the Master of the Lodge who, from
              the East, spread Masonic Light.
              <br /> <br />
              <br /> <br />
              ____________________
              <br />
              <span className="text-base">
                <span className=" text-sm align-top ...">13</span> For our
                particular climate conditions, the Grand Lodge of Scotland
                allows us not to wear gloves, another important distinctive
                badge of Freemasons, during the meeting.
                <br /> <span className="text-sm align-top ...">14</span> In Gen.22
                we read that Abraham was about to sacrifice his son when the
                Lord stopped him and gave him a lamb to sacrifice instead of his
                son.
              </span>
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 42 */}
            <span>
              <p className=" text-center pt-5 ">Charity and Relief</p>
              <br />
              Before the Candidate enters the Masonic Temple, he is deprived of
              all his money and all metallic objects and when, during the
              ceremony, he is asked to give to charity, he obviously cannot, and
              so he learns the importance of one of the basic virtues of
              Freemasonry: Charity. This virtue should always be practiced as
              help to a Brother in need as well as toward all mankind. But the
              masonic Charity should be intended not only as giving money but,
              in a broader sense, as Relief from the possible afflictions.
              <br /> <br />
              We should not forget that Relief and Charity are two of the most
              important principles of Freemasonry, and all freemasons must act
              accordingly.
              <br /> <br />
              According to another interpretation, the Candidate is deprived of
              money and metallic objects as they represent the attachment to
              materiality which, thanks to the rite of Initiation, must give way
              to spirituality.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 ">
                Working tools of an Enter Apprentice
              </p>
              <br />
              The working tools of an Entered Apprentice are the 24-inch gauge,
              the Chisel and the Gavel. They were essential to stone-masons in
              their job. However, as speculative masons, we gave a moral and
              spiritual meaning to them. The 24-inch gauge means accuracy in our
              actions and proper distribution of our time. The Mallet teaches us
              that an idea, a plan, however brilliant, is useless without the
              material work to implement it. And from the Chisel we learn that
              we must know exactly where to place the tool, that is not neglect
              our education and persevere.
              <br /> <br />
              It is also interesting to note that one tool, the 24-inch gauge,
              is used passively, and the other two, the Gavel and Chisel, are
              used actively. In fact, the first is a tool of measurement and
              calculation, while the others are instrument of change and
              creative destruction. One tool decides what to keep, while the
              other two get rid of what is superfluous or undesirable. To the
              speculative Freemason, these tools represent the moral habits and
              forces by which man shapes and reshapes himself. By the proper use
              of these symbolic tools, he also better fits his own behaviour to
              society and community.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 ">
                Tracing Board of the First Degree
              </p>
              <br />
              Stone-masons used to trace designs on the floor of their
              construction sites to lay out plans for the buildings to be
              constructed. Soon after measurement and explanations they deleted
              those drawings, as the Art of construction was not to be shared
              with everyone, but to be kept as a treasured secret of their
              lodge.
              {/* page 43 */}
              <br /> <br />
              Around 400 years ago, the lodges of stone-masons began to accept
              non-masons, and the building of Gothic cathedrals was gradually
              replaced by the building of that &quot;house not made with hands&quot;
              <span className=" text-sm align-top ...">15</span> . Eventually, the
              lodges shift their interest and, as we say now, from operative
              became speculative. In this new accentuated aspiration for a
              contact with the Divinity, the ground of the lodges was
              transformed into a sacred space just marking masonic symbols on
              the floor to replicate the founding elements of the Craft, so as
              to give meaning and value to being Freemason.
              <br /> <br />
              Marking the floor of the lodge was also a very useful system of
              symbolic representation because, quite often, meetings were held
              in buildings like taverns, or even tents as in military lodges,
              the main purpose of which was completely different from
              Freemasonry. In this way, however, virtually any place could
              acquire the required sacrality and be transformed into a temple
              thanks to chalk or a stick.
              <br /> <br />
              In time, instead of marking and deleting symbols on the floor{" "}
              <span className=" text-sm align-top ...">16</span> , Freemasons used a
              permanently painted tracing board which, at the end of the
              meeting, was collected and stored for the next use, along with
              every other object used during the ceremony.
              <br /> <br />
              In our ritual we can find the description of the tracing board
              with the detailed explanation of the following topics:
              <br /> <br />
              The tenets of Freemasonry rooted into morality and virtue <br />{" "}
              <br />
              The extension of the Lodge (symbolizing Freemasonry) which has no
              limits <br /> <br />
              The Holy Ground of Freemasonry, so made thanks the three grand
              offerings made by Abraham, King David and King Salomon
              <br /> <br />
              The alignment of the Lodge due East and West because of the
              instruction given to Moses by the Lord on Mount Sinai
              <br /> <br />
              The support of our Lodges given by the three Great Pillars of
              Wisdom, Strength and Beauty
              <br /> <br />
              The upper limit of the Lodge, that is the Heavens, which is
              possible to approach thanks to the principal moral virtues, namely
              Faith, Hope and Charity.
              <br /> <br />
              The interior of the Lodge which is composed of Ornaments (Mosaic
              Pavement, Blazing Star and Tessellated Border), Furniture (Volume
              of the Sacred Law, Compasses and Square) and jewels (movable
              jewels: Square, Level and Plumb Rule – immovable jewels: Tracing
              Board, Rough and Perfect Ashlar).
              <br /> <br />
              The point (bounded by doctrines of the Volume of the Sacred Law)
              from which a mason cannot err.
              <br /> <br />
              The necessity of expert Masons that can turn a Rough (imperfect)
              Ashlar to a Perfect (spiritually and morally) Ashlar in the
              communal work apt to build the structure of Freemasonry <br />{" "}
              <br />
              The four Cardinal Virtues, namely Temperance, Fortitude, Prudence
              and Justice <br /> <br />
              The distinguishing characteristic of a Freemason, namely Virtue,
              Honour and Mercy
              <br /> <br />
              <br /> <br />
              ____________________
              <br />
              <span className="text-base">
                <span className=" text-sm align-top ...">15</span> 2nd Epistle to
                Corinthians 5:1
                <br /> <span className="text-sm align-top ...">16</span> Marking and
                deleting symbols on the floor is still used in the Grande Loge
                Nationale Française
              </span>
              <br /> <br />
              <br /> <br />
              {/* page 44 */}
              Through the interpretation of the symbols above listed, we can
              learn those indispensable moral lessons without which none of us
              can become a better man.
              <br /> <br />
              Here is one of the most popular tracing board and below a black
              and white one which exalt the elements it contains.
              <br /> <br />
              <div className="pt-5 justify-center grid">
                <Image alt="" src="/Overview/Picture33.png" width="400" height="600" />
              </div>
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 45 */}
            <div className="pt-5 justify-center grid">
              <Image alt="" src="/Overview/Picture34.jpg" width="500" height="700" />
            </div>
            <br /> <br />
            <br /> <br />
            {/* page 46 */}
            <span>
              <p className=" text-center pt-5 ">Charge after initiation</p>
              <br />
              At the end of the ceremony and instruction in the degree, the
              Candidate is charged to perform particular Masonic duties. In the
              First Degree, the Candidate is asked essentially to regulate his
              actions to the precepts contained in the Volume of the Sacred Law
              to fulfill his duties to God and to mankind, to practice civil and
              masonic virtues, to submit to the will of the R.W.M. and his
              Wardens, while they are acting in the discharge of the duties of
              their office.
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 47 */}
            <span>
              <p className="text-center pt-5 font-semibold">Duty of EAs</p>
              <br /> <br />
              <p className=" mx-8 px-7 border-2 border-black text-center">
                Any responsibility to Freemasonry come a long way behind the
                duties to family, faith, employer and the duties as a citizen.
                Freemasonry will never require anything which might conflict
                with religious, civil or other duties of its members.
                <br />
                Freemasonry demands a respect for the law of the country in
                which Freemasons reside.
              </p>
              <br /> <br />
              <br /> <br />
              The First or Entered Apprentice Degree is intended to symbolize
              the journey from darkness to Light.
              <br /> <br />
              Apprentice means learner. In fact the Enter Apprentice’s chief
              task is to study symbols, history, rituals of Freemasonry, to
              learn from them and to work to satisfy the advancement
              requirements. He should not be content with learning the words
              word-perfect, but should study the meanings too. If he cannot
              interpret these for himself, he should seek help from others.
              Obviously, no one can learn without constantly attending the
              meetings, and only very serious matters should prevent the E.A. to
              attend. At the end of the ceremony the Candidate is charged to
              perform particular Masonic duties. In the First Degree, the
              Candidate is asked essentially to regulate his actions to the
              precepts contained in the Volume of the Sacred Law, to submit to
              the will of the R.W.M. and his Wardens, while they are acting in
              the discharge of the duties of their office.
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 48 */}
            <span>
              <p className=" text-center pt-5 font-semibold">Advancement</p>
              <br />
              At the end of the ceremony and instruction in the degree, the
              Candidate is charged to perform particular Masonic duties. In the
              First Degree, the Candidate is asked essentially to regulate his
              actions to the precepts contained in the Volume of the Sacred Law
              to fulfill his duties to God and to mankind, to practice civil and
              masonic virtues, to submit to the will of the R.W.M. and his
              Wardens, while they are acting in the discharge of the duties of
              their office.
              <br /> <br />
              <br /> <br />
              <p className=" text-center pt-5 font-semibold">
                Q&A to pass Fellowcraft
              </p>
              <br />
              <br />
              <div className="flex justify-items-start ">
                <div className="w-1/6">R.W.M.</div>
                <div className="w-5/6">
                  Where were you first prepared to be a Freemason?
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">In my heart</div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">Where next?</div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">
                  In a convenient room adjoining the Lodge
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">
                  Describe the mode of your preparation
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">
                  I was divested of metals and hood winked, my right arm, left
                  breast, and knee made bare, my right heel slip shod, and a
                  cable tow around my neck
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">Where were you made a Freemason?</div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">
                  In the body of a Lodge just, perfect and regular
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">And when?</div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">When the sun was at its meridian</div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">
                  In this country Freemasons’ Lodges are usually held in the
                  evening. How do you account for that which appears to be a
                  paradox?
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">
                  The earth constantly rotating on its own axis in its orbit
                  round the sun, the centre of our system, and Freemasonry being
                  universally spread over its surface, it necessarily follows
                  that the sun must always be at its meridian with respect to
                  Freemasonry
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">What is Freemasonry?</div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">
                  A peculiar system of morality, veiled in allegory, and
                  illustrated by symbols
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">
                  Name the three grand principles on which the Order is founded
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">Brotherly Love, Relief, and Truth</div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">
                  Who are fit and proper persons to be made Freemasons?
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">
                  Just, upright, and free men, of mature age, sound judgment,
                  and strict morals
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">
                  How do you know yourself to be a Freemason?
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">
                  By the regularity of my initiation, repeated trials with
                  approbation, and willingness at all times to undergo
                  examination when properly called upon
                </div>
              </div>
              {/* page 49 */}
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">R.W.M. </div>
                <div className="w-5/6">
                  How do you prove yourself to be a Freemason?
                </div>
              </div>
              <br />
              <div className="flex justify-items-start">
                <div className="w-1/6">Can</div>
                <div className="w-5/6">
                  By signs, tokens, and words, and other true and proper
                  evidences of Masonic knowledge
                </div>
              </div>
              <br />
            </span>
            <br /> <br />
            <br /> <br />
            {/* page 50 */}
            <span>
              <p className="text-center pt-5 font-semibold">The Meeting</p>
              <br /> <br />
              Before the meeting <br /> <br />
              The summons for the meeting will be sent out well in advance by
              Bro. Secretary. In the summons are also specified venue, date,
              time and agenda for the meeting and it may also contain additional
              details. As promptly as possible all Brethren must reply to the
              Secretary to confirm their attendance at the meeting and to Bro.
              W.J.W. (who is in charge for refreshment) to confirm their
              attendance at the the dinner after the meeting, which we call
              Harmony.
              <br />
              If a Brother is unable to attend the meeting then he should advise
              Bro. Secretary as soon as possible. Brethren who have to perform
              some Floor Work should also inform immediately Bro. Director of
              Ceremonies, as he has to arrange for a substitution.
              <br />
              In the case of medical problems Brethren should also report to the
              Lodge Almoner.
              <br /> <br />
              Harmony is an integral part of the meeting and all Brethren are
              compelled to attend it unless very serious matters should prevent
              them to do so.
              <br /> <br />
              <br /> <br />
              Entering and Leaving the Lodge
              <br /> <br />
              Once the Brother have arrived to the Lodge he has to sign his name
              in the Attendance Book, in the space marked ‘Members’.
              <br /> <br /> <br /> <br />
              <p className=" px-16 border-2 border-black text-center">
                Before entering the Lodge-Room, turn your mobile off or silence
                it
              </p>
              <br />
              If a Brother arrives after the meeting has already started, he
              must wait until the Tyler opens the door for him. If the Tyler is
              not present, he should knock at the door with the knocks of his
              degree and wait until the door is opened. Once inside, he should
              advance to a point about midway between the altar and the Senior
              Warden, salute the Master with both the step and sign of an
              Entered Apprentice (both due-guard and penal sign) and then
              quietly take a seat (in the North East corner of the lodge if he
              is an E.A.) circulating clockwise and without exchanging greetings
              on the way.
              <br /> <br />
              <br /> <br />
              Circulating in the Lodge
              <br /> <br />
              We Freemasons always &quot;square&quot; the Lodge room, that is we always
              circulate clockwise, outside of the chequered floor, stopping at
              each corner, turning right and start walking again with the left
              foot. When passing in front of the Right Worshipful Master, as a
              sign of respect to him and to the Great Architect from whom he
              draws inspiration, a sign of acknowledgment should always be
              given.
              {/* page 51 */}
              <br /> <br />
              At all times when standing, and therefore also moving, in the
              Lodge-room and the Volume of the Sacred Law is open, Brethren
              shall hold the Sign of Fidelity.
              <br /> 
              <br /> <br /> When to rise and when to be
              seated
              <br /> <br />
              The gavel in the hands of the Right Worshipful Master of a Lodge
              is one of the symbols of authority by which he governs. When the
              gavel is sounded once in the East at the beginning of Lodge, the
              Brethren must come to order. Note that the R.W.M. may knock his
              gavel once to denote the passing of an important resolution or
              vote by the Lodge. Some other times the Master or the Director of
              Ceremonies may invite the Brethren to stand up or to sit.
              <br /> <br />
              In the Scottish Constitution, every time that you are standing in
              the Lodge you must be either to order or at Fidelity. Stay at
              Fidelity means staying with your right hand shielding your heart,
              that is your thumb in the form of a square and your fingers
              together over your heart. This is a sign of respect and reverence
              for the V.S.L. without which Masonry would not exist.
              <br /> <br />
              If the Right Worshipful Master addresses a Brother by name, he has
              to rise, face the East, give step and sign and listen to his
              instructions staying at Fidelity. At the end, the Brother will
              also give step and sign and will sit.
              <br /> <br />
              Always stand up when the Master is standing. A salute should
              always be given when addressing the Master.
              <br /> <br />
              Except the Right Worshipful Master, under no circumstances no
              Brother sits while speaking in the lodge room.
              <br /> <br />
              <br /> <br />
              {/* page 52 */}
              <p className="text-center pt-5 font-semibold">Etiquette</p>
              <br /> <br />
              For masonic purposes etiquette can be defined as that set of
              convention, rules, customs and traditions by which Freemasons are
              expected to govern themselves when engaged in the rites and
              ceremonies of the Craft.
              <br /> <br />
              <p className="text-center pt-5 ">
                Interacting with your brethren
              </p>
              <br />
              Freemasonry is supposed to be a &quot;Safe and pleasant Relaxation&quot; or,
              we can say, an interruption from the daily worries. It’s supposed
              to break your week in half and let you pause, and breathe, and
              remember to be the guy you’re supposed to be. Human touch is
              important to this process. And what better way to start the
              evening with your brethren than a good handshake?
              <br /> <br />
              Even if you are a shy person do not seat alone or next to the
              usual guys, isolating yourself from the others. Instead be open to
              all your brothers and to Freemasonry.
              <br /> <br />
              <p className="text-center pt-5 ">Decorum</p>
              <br />
              Laud talk, restless moving about, laughter or private
              conversations during ceremonial work, giving no attention to the
              work in hand is indecorous behaviour and it disturb the harmony of
              the Lodge.
              <br /> <br />
              <p className="text-center pt-5 ">Good posture</p> <br />
              Good posture is necessary while within the Lodge room. Lounging,
              leaning, crossing legs and slovenly attitudes should be avoided.
              Poor posture is considered poor Masonic etiquette. <br /> <br />
              <p className="text-center pt-5 ">Dress code</p> <br />
              Some Lodge may require its members to wear formal dress at its
              meetings although Grand Lodge lays down no ruling on this matter.
              In our Lodge evening dress is not required, however members are to
              wear a dark suit and a dark tie and attend the Lodge meeting
              soberly in order to show respect to the dignity of the Craft.
              <br /> <br />
              When visiting another Lodge always wear accordingly to the dress
              code of your own Lodge.
              <br /> <br />
              {/* page 53 */}
              <p className="text-center pt-5 ">Talking</p> <br />
              A masonic temple is not for social conversation but for learning
              the lesson of the day. Side talking or whispering shows
              irreverence for the proceedings and for this reason they are
              considered bad manners. There is no place for tomfoolery, fooling
              around, horseplay or hazing during or in the course of our
              ceremonies and the Candidate can be assured that there will be
              none. The rituals are serious and solemn, and we try to teach
              moral lessons with great dignity.
              <br /> <br />
              <p className="text-center pt-5 ">Subject not proper for discussion in the Lodge</p> <br />
              Any form of religious or political discussions, as well as those topics which might cause friction between
members, are strictly off limits and banned in Lodge, both during and after a meeting or at any Masonic
gathering. Of course, each brother is entitled to his own beliefs and convictions, however,
Freemasonry’s objective is to unite men, not to divide them, and it is for this reason that these subjects
are banned. 
              <br /> <br />
              Once a matter has been put to vote in the Lodge or in a superior body (District Grand Lodge or Grand
Lodge) and a decision is made, the Brethren, regardless their feelings or their beliefs, must accept the
outcome of the vote. 
              <br /> <br />
              Subjects concerning the Lodge’s business should not be discussed out of the lodge. 
              <br /> <br />
              <br /> <br />
              <p className="text-center pt-5 ">Visiting other Lodges</p> <br />
              E.A.s are encouraged to attend the First Degree meetings in other
              Lodges. In these meetings the E.A.s may pick up aspects of the
              degree which they may have missed during their own Initiation and,
              after all, better understand the ritual.
              <div className="pt-5 justify-center grid">
                <Image alt="" src="/Overview/Picture35.jpg" width="500" height="400" />
              </div>
              <br /> <br />
              {/* page 54 */}
              However, they will be asked to attend in the company of another
              experienced Brother who can &quot;vouch&quot; for them and explain (once
              that the ceremony is ended) any parts of the ceremony that they
              have observed.
              <br /> <br />
              <br /> <br />
              When visiting another Lodge, Brethren may be tested by the Junior
              Warden or other Office-Bearer appointed by the R.W.M., in their
              proficiency in giving Step and Sign of the degree. At the end of
              any Lodge meeting, there is generally a moment when greetings are
              called for, and it is expected that visitors will deliver their
              greetings to the Worshipful Master of the Lodge they are visiting.
              <br /> <br />
              Lodges belonging to other Constitutions may have the V.S.L. opened
              before Lodge is officially called to order and opened, and this
              may create confusion for us. But we stick at our own rules, that
              is Brethren belonging to the Grand Lodge of Scotland must stay at
              Fidelity every time that the V.S.L. is opened. This will be done
              regardless if Lodge is officially open or not.
              <br /> <br /> <br /> <br />
              {/* page 55 */}
              <div className=" text-center pt-5 ">
                <span className="text-center font-semibold">Harmony</span>
                <span className=" text-sm align-top ...">17</span>
              </div>
              <br />
              At a certain stage of human evolution, food was no longer a matter
              of survival and it became to confer status and identity to the
              diners. Dining together we distinguish ourselves from others and
              at the same time it gives us the sense of community we seek. The
              communal table has become the place where members of a community
              gathers.
              <br /> <br />
              Masonic desirability of a social dinner is as old as the
              Freemasonry we know. In 1717, when the Mother Grand Lodge was
              formed to revitalize the Lodges of London, one of the reasons
              given was &quot;To revive the Quarterly Communication and hold the
              Annual Feast&quot;.
              <br /> <br />
              <div className="pt-5 justify-center grid">
                <Image alt="" src="/Overview/Picture36.jpg" width="450" height="300" />
              </div>
              <br /> 
              <div className="pt-5 justify-center grid">
                <Image alt="" src="/Overview/Picture37.jpg" width="800" height="400" />
              </div>
              <br />
              <br />
              ____________________
              <br />
              <span className="text-base">
                <span className=" text-sm align-top ...">17</span> Harmony is what
                is called in the Scottish lodges the masonic dinner after the
                meeting.
              </span>
              <br /> <br />
              <br /> <br />
              {/* page 56 */}
              The masonic dinner, which take place after the meeting, is called
              Harmony by Scottish Freemasons.
              <br /> <br />
              Harmony is integral part of the masonic meeting and only the most
              serious matter should prevent a brother to attend.
              <br /> <br />
              Before the Harmony, Bro. Chaplain will say Grace. Then, during the
              dinner, Bro. D.o.C. will call some of the Brethren to give the
              following toasts:
              <br /> <br />
              <br /> <br />
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>1)</div>
                <div>
                  By signs, tokens, and words, and other true and proper
                  evidences of Masonic knowledge
                </div>
              </div>
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>2)</div>
                <div>H M the Queen – by the RWM</div>
              </div>
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>3)</div>
                <div>
                  The Grand Lodge of Scotland it’s Office Bearers Past and
                  Present – by the RWM
                  <br />
                  *3a) Toast to the District Grand Lodge of the Middle East – by
                  the WSW
                  <br />
                  *3b) Reply by the WSDGM
                </div>
              </div>
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>4)</div>
                <div>Toast to the Candidate – by the RWM</div>
              </div>
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>5)</div>
                <div>Reply – by the Candidate(s)</div>
              </div>
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>6)</div>
                <div>
                  The Visitors – by the WJW
                  <br />
                  **6a) Reply from the Visiting RWM/WM
                </div>
              </div>
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>7)</div>
                <div>Reply from a selected Visitors chosen by the DoC</div>
              </div>
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>8)</div>
                <div>Toast to the Absent Brethren – by the WSW</div>
              </div>
              <div className="pl-10 flex justify-items-start gap-x-5">
                <div>9)</div>
                <div>Tyler’s Toast</div>
              </div>
              <br /> <br />
              *If there is a formal visit from the WSDGM
              <br /> <br />
              **If there is a visit by other Lodge Brethren
              <br /> <br />
              At the discretion of the D.o.C., other Brethren may be given the
              Floor if they have an announcement to make. The timing of such
              additional speaker will slotted in by the D.o.C.
              <br /> <br />
              <br /> <br />
              <p className="text-center pt-5 font-semibold">The Next Level</p>
              <br /> <br />
              In this short note we have explained the meaning of many masonic
              symbols. However, these explanations are just the first level of
              interpretation of those symbols. There is in fact a second level
              which is strictly personal and no one can interpret it for you.{" "}
              <br /> <br />
              Today there is a temptation to interpret most of what we see at a
              basic level, with only a single straightforward explanation of the
              message conveyed though symbols [what is the meaning of sun and
              moon in Freemasonry? The sun means … the moon means …]. <br />{" "}
              <br />
              But we are not dealing with street signals and the interpretation
              of the symbols can be very different from person to person.
              Symbols, for their own nature, are not susceptible of being fully
              interpreted by human reason, and it has been said that they are
              more like words of poetry instead of words of prose. They lead us
              to that second level of interpretation which guides us to a
              dimension not fully available to our senses. A dimension that
              widens our level of consciousness and enables us to approach &quot;that
              ethereal mansion veiled from mortal eyes&quot;. In other words, symbols
              create a junction between two realms of reality, the conscious and
              the unconscious. They are the meeting point between the microcosm
              and the macrocosm, between material and spiritual, between man and
              Divinity. <br /> <br />
              How? Everyone must find his own way to absorb symbols as these
              talk with each one of us in a different way. And in this journey,
              independently from our rank, must traveled alone, just similarly
              to what Sir Gawain of the Round Table did when went in search of
              the Holy Grail: he entered the forest where there was no path,
              because where there is a path, it is someone else’s path. In fact,
              no one, not even a master can tell you what to do. A real master
              is like a lighthouse. A lighthouse doesn’t tell you where to go.
              It just can tell you where not to go, otherwise you will crash and
              sink. <br /> <br />
              In any case, through symbols, is possible to obtain that kind of
              consciousness without which you cannot reach the Holy Grail, or
              Center, or State of Peace, or whatever you want to call that
              particular state of mind in which the action is all around you,
              while you are in a state of calmness. And once in that state, you
              can establish a link with the Whole. <br /> <br />
              <div className="pt-5 justify-center grid">
                <Image alt="" src="/Overview/Picture38.png" width="200" height="200" />
              </div>
              <br /> <br />
              <br /> <br />
              If you are interested in joining us in our journey please contact
              our Lodge Secretary at LDxxx@gmail.com
            </span>
            <br /> <br />
            {/* page 57 */}
            {/* END Page */}
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
