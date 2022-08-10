import { Button } from "@nextui-org/react";
import Footer from "./component/footer";
import { Input } from "@nextui-org/react";
import Navbar from "./component/navbar";
import { Textarea } from "@nextui-org/react";
export default function Example() {
  return (
    <div className="font-serif">
      <Navbar />

      <div className=" grid place-items-center h-[739px]">
        <from className="grid ">
          <div className="text-center text-3xl font-extrabold text-gray-900 pb-10">
            Joining
          </div>
          <div className="text-xl pb-[10px]"> Name</div>
          <input
            type="Name"
            className="focus:ring-indigo-900 focus:border-indigo-900 block rounded-md bg-[#D9D9D9]         
          border-[#767676] border-2  fold:w-[340px] w-[250px] h-[40px] pl-5 text-xl"
          />
          <div className="text-xl pb-[10px] pt-[12px]"> Email address</div>
          <input
            type="passwEmail addresord"
            className="focus:ring-indigo-900 focus:border-indigo-900 block rounded-md bg-[#D9D9D9]         
          border-[#767676] border-2 fold:w-[340px] w-[250px] h-[40px] pl-5 text-xl"
          />
          <div className="text-xl pb-[10px] pt-[12px]"> Messages</div>
          <textarea
            type="Messages"
            rows={2}
            className="focus:ring-indigo-900 focus:border-indigo-900 block rounded-md bg-[#D9D9D9]         
          border-[#767676] border-2 fold:w-[340px] w-[250px] h-[80px] pl-5 pt-2 text-xl"
          />

          <button
            type="submit"
            value="Login"
            className="mt-[32px] h-[43px] w-full justify-self-center lg:w-[200px] border border-transparent rounded-xl text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Submit
          </button>
        </from>
      </div>

      {/* <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Joining
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <Input placeholder="Name" label="Name " css={{ w: "260px" }} />
            <br />
            <Input
              placeholder=" Email address"
              label=" Email address "
              css={{ w: "260px" }}
            />
            <br />
            <Textarea
              css={{ w: "260px" }}
              label="Messages"
              placeholder="Messages."
            />
            <Button
              shadow
              color="#4f46e5"
              css={{ w: "100px" }}
              type="submit"
              auto
              className="bg-indigo-600 text-white"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>  */}
      <Footer />
    </div>
  );
}
