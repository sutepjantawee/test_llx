import Footer from "./component/footer";
import Navbar from "./component/navbar";
export default function Member() {
  return (
    <div className="grid font-serif">
      <Navbar />
      <div className="pt-[114px] justify-self-end pr-[76px]">
        <input
          className="focus:ring-indigo-500 focus:border-indigo-500  rounded-md bg-[#FFFFFF]         
          border-[#959595] border-2 w-[207px] h-[33px] text-[16px] pl-[15px]"
          placeholder="Search"
        />
      </div>

      <div className="pt-[54px]  flex justify-center">
        <div className="flex justify-center w-full">
          <div className="w-[339px] pr-[77px]">
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

          <div className="w-[842px]">
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
          <div className="w-[259px] pl-[39px] text-start ">
            {" "}
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
