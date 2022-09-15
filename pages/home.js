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
      <div className="grid justify-items-center place-items-center h-[607px] w-full bg-[#1E2643] bg-logoheader bg-auto bg-no-repeat bg-center ">
        <div className=" w-full text-center md:text-[40px] sm:text-[30px] text-[20px]  text-white px-2 place-self-center ">
          Welcome to Lodge Lane Xang 1632 SC
        </div>
      </div>
      <div className="xl:h-[350px] md:h-[400px] sm:h-[440px] fold:h-[550px] h-[620px] w-full bg-white text-center px-2">
        <div className="text-2xl pt-[73px] text-[24px]">
          What is Freemasonry?
        </div>
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

     
    </div>
  );
}
