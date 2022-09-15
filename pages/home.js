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
    

    
    </div>
  );
}
