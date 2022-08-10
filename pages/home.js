import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Input,
  Modal,
  Row,
  Text,
} from "@nextui-org/react";

import Image from "next/image";
import Navbar from "./component/navbar";
import React from "react";

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const features = [
    {
      name: "Competitive exchange rates",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: GlobeAltIcon,
    },
    {
      name: "No hidden fees",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: ScaleIcon,
    },
    {
      name: "Transfers are instant",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: LightningBoltIcon,
    },
    {
      name: "Mobile notifications",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: AnnotationIcon,
    },
  ];
  return (
    <div className="z-10 ">
      <Navbar />
      <div className="grid justify-items-center place-items-center h-[607px] w-full bg-[#1E2643] pt-16">
        <div className="bg-logoheader h-[328px] w-[280px] sm:h-[422px] sm:w-[359px] bg-cover static "></div>
        <div className=" md:text-[40px] sm:text-[30px] text-[20px] absolute text-white px-2 place-self-center pt-20">
          Welcome to Lodge Lane Xang 1632 SC
        </div>
      </div>
      <div className="xl:h-[350px] md:h-[400px] sm:h-[440px] fold:h-[550px] h-[620px] w-full bg-white text-center px-2">
        <div className="text-2xl pt-[73px] text-[24px]">What is Freemasonry?</div>
        <div className="text-xl pt-[37px] text-[#3A3A3A] text-[20px]">
          Freemasonry is “a fraternity of brothers who share one common goal:{" "}
          <br />
          to help each other become better men,” according to the websites of
          several Freemason lodges. <br />
          The Freemasons “strengthen and improve our character by learning and
          practicing basic virtues of fraternal love, <br />
          charity, and truth. Our principles extend far beyond our interactions
          with each other, and we strive to <br />
          apply them to our daily lives.”
        </div>
      </div>

      <div className=" md:flex md:flex-row bg-header bg-cover bg-fixed">
        <div className="justify-center flex pt-24 flex-col items-center  md:flex-row-reverse w-full">
          <div className="md:pt-10 md:w-1/2 items-center flex w-4/5">
            <div>
              {/* <Image
                src="/llx-logo.png"
                width={911}
                height={625}
                className=" "
              /> */}
            </div>
          </div>

          <div className=" md:w-1/2 items-center flex flex-col md:pt-16 pb-16 pt-5 w-4/5">
            <Text
              className=" text-3xl xl:text-6xl lg:text-4xl md:text-3xl pb-2"
              h1
              css={{
                // textGradient: "45deg, $purple600 10%, $pink600 100%",
                color: "White",
              }}
              weight="bold"
            >
              Lodge Lane Xang 1632 SC
              <br />
              <br />
              <br />
              <br />
            </Text>

            <div className="md:pt-16 pt-10">
              <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
                <Modal.Header>
                  <Text id="modal-title" size={20}>
                    Welcome to
                    <Text b size={18}>
                      Lodge Lane Xang
                    </Text>
                  </Text>
                </Modal.Header>
                <Modal.Footer>
                  <Button auto flat color="error" onClick={closeHandler}>
                    Close
                  </Button>
                  <Button auto onClick={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Some Title
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex-row md:flex flex flex-col bg-pattern bg-cover bg-center h-full pb-20 pt-10">
        <div className="text-white w-full flex flex-col justify-center items-center pt-10 ">
          <div className="text-6xl ">Title</div>
          <div className="text-2xl pt-4">
            Lorem ipsum dolor <br /> sit amet consect adipisicing elit.
          </div>
        </div>
        <div className="justify-center flex flex-col w-full lg:pl-32 items-center">
          <div className="md:z-10 md:pt-10 h-20 md:pl-10 pt-10 mx-5">
            {/* <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", p: "10px", h: "180px", bgBlur: "#fffff66" }}
              className=""
            >
              <Card.Body>
                <Text>
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </Text>
              </Card.Body>
            </Card>
          </div>
          <div className="md:z-20 md:pt-24 pt-44 mx-5 md:pr-20 ">
            <Card
              isHoverable
              variant="bordered"
              css={{ mw: "400px", p: "10px", h: "180px" }}
              className=""
            >
              <Card.Body>
                <Text>
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis
                  <br />A hoverable card.
                </Text>
              </Card.Body>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}
