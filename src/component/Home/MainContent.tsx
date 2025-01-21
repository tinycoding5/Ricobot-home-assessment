"use client";
import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import MainTextContent from "./MainTextContent";
import { HOME_BACKGROUND_IMAGE_RATE } from "@/utils/constant";
import Image from "next/image";

const MainContent = () => {
  const [dogImageSize, setDogImageSize] = useState(1);
  const [height, setHeight] = useState<string | number>("auto");
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateDogImageScale = () => {
      if (backgroundRef.current) {
        const backgroundWidth = backgroundRef.current.clientWidth;
        const backgroundHeight = backgroundRef.current.clientHeight;
        const width = Math.floor(backgroundWidth * HOME_BACKGROUND_IMAGE_RATE);
        setDogImageSize(width);
        setHeight(backgroundHeight);
      }
    };

    // Update width on initial render
    updateDogImageScale();

    // Add a resize event listener
    window.addEventListener("resize", updateDogImageScale);

    // Clean up the event listener
    return () => window.removeEventListener("resize", updateDogImageScale);
  }, []);
  return (
    <div>
      <MainRoot>
        <Background ref={backgroundRef}>
          <Image src="assets/1-background.png" alt="background" />
        </Background>
        <DogImage>
          <Image
            src="assets/1-foreground-cutout.png"
            alt="dog"
            style={{ width: `${dogImageSize}px` }}
          />
        </DogImage>
        <MainTextContent height={height} />
      </MainRoot>
    </div>
  );
};

export default MainContent;

const MainRoot = styled("div")(() => ({
  position: "relative",
}));

const Background = styled("div")(() => ({
  width: "100%",
  "& img": {
    width: "100%",
    objectFit: "cover",
  },
}));

const DogImage = styled("div")(() => ({
  position: "absolute",
  top: "-12%",
  left: "47%",
}));
