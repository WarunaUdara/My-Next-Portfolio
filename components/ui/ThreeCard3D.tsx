"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import myImg from "../../public/Picsart_my propic.jpg";

export function ThreeCard3D() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-48 h-48 sm:w-64 sm:h-64 rounded-full">
        <CardItem translateZ="100" className="w-full h-full">
          <Image
            src={myImg}
            height="256"
            width="256"
            className="object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}