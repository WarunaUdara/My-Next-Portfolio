"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import myImg from "../../public/Picsart_my propic.jpg";

export function ThreeCard3D() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative" style={{ opacity: isMounted ? 1 : 0 }}>
      <CardContainer className="inter-var">
        <CardBody className="relative group/card w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-black/[0.1] dark:border-white/[0.2] bg-black/[0.2] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] transition duration-500">
          <CardItem
            translateZ="100"
            className="h-full w-full rounded-full"
          >
            <div className="relative h-full w-full rounded-full overflow-hidden">
              <Image
                src={myImg}
                alt="profile picture"
                fill
                className="object-cover group-hover/card:shadow-xl"
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}