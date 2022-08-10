import Footer from "./component/footer";
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

          <div className=" flex flex-col md:flex md:flex-row fold:flex fold:flex-row  lg:hidden pb-14 ml-10 ">
            <div className="w-full sm:hidden pt-3">
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
            <div className="w-full sm:pt-1 pt-3 sm:hidden sm:pl-5 ">
              On this page
              <ul className="pl-[14px] pt-2">
                <li>Overview</li>
                <li>Good to read</li>
                <li>Stuff</li>
              </ul>
            </div>
          </div>

          <div className="col-span-3 mx-3 sm:mx-1 pb-16">
            <p className="text-3xl ">Overview</p>
            <div className="text-xl pt-8  ">
              Officia nobis tempora maiores id iusto magni reprehenderit velit.
              Quae dolores inventore molestiae perspiciatis aut. Quis sequi
              officia quasi rem officiis officiis. Nesciunt ut cupiditate. Sunt
              aliquid explicabo enim ipsa eum recusandae. Vitae sunt eligendi et
              non beatae minima aut.
              <br />
              <br />
              <br />
              Harum perferendis aut qui quibusdam tempore laboriosam voluptatum
              qui sed. Amet error amet totam exercitationem aut corporis
              accusantium dolorum. Perspiciatis aut animi et. Sed unde error ut
              aut rerum.
              <br />
              <br />
              <br />
              Ut quo libero aperiam mollitia est repudiandae quaerat corrupti
              explicabo. Voluptas accusantium sed et doloribus voluptatem fugiat
              a mollitia. Numquam est magnam dolorem asperiores fugiat. Soluta
              et fuga amet alias temporibus quasi velit. Laudantium voluptatum
              perspiciatis doloribus quasi facere. Eveniet deleniti veniam et
              quia veritatis minus veniam perspiciatis.{" "}
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
