"use client";
import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import MainTextContent from "./MainTextContent";
import { Dogs, HOME_BACKGROUND_IMAGE_RATE } from "@/utils/constant";
// import Image from "next/image";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { Grid2 as Grid, Tab } from "@mui/material";
import Thumbnail from "./Thumbnail";
import { useIsMobile } from "@/hooks/useIsMobile";

const MainContent = () => {
  const [dogImageSize, setDogImageSize] = useState(1);
  const [height, setHeight] = useState<string | number>("auto");
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = React.useState("1");
  const { isMobile } = useIsMobile();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClick = (newValue: string) => {
    setValue(newValue);
  };

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
      <TabContext value={value}>
        <MainRoot>
          <Background ref={backgroundRef}>
            {Dogs.map((dog) => (
              <img
                key={dog.id}
                className={parseInt(value) === dog.id ? "active" : ""}
                src={dog.backgroundUrl}
                alt="background"
              />
            ))}
          </Background>
          {value === "1" ? (
            <DogImage>
              <img
                src="assets/1-foreground-cutout.png"
                alt="dog"
                style={{ width: `${dogImageSize}px` }}
              />
            </DogImage>
          ) : (
            ""
          )}
          <SubRoot>
            <DogRoot style={{ minHeight: height }}>
              <MainTextContent />
              {isMobile ? (
                <Grid
                  container
                  spacing={{ xs: 0.5, sm: 2, md: 3 }}
                  alignItems="flex-end"
                  mt={6}
                >
                  {Dogs.map((dog) => (
                    <Grid key={dog.id}>
                      <Thumbnail
                        url={dog.url}
                        alt={dog.name}
                        active={parseInt(value) === dog.id}
                        onClick={() => handleClick(`${dog.id}`)}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <CustomTabList onChange={handleChange} aria-label="Dog tabs">
                  {Dogs.map((dog) => (
                    <Tab
                      key={dog.id}
                      label={
                        <Thumbnail
                          url={dog.url}
                          alt={dog.name}
                          active={parseInt(value) === dog.id}
                        />
                      }
                      value={`${dog.id}`}
                    />
                  ))}
                </CustomTabList>
              )}
            </DogRoot>
            <FooterSection />
          </SubRoot>
        </MainRoot>
      </TabContext>
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
    display: "none",
    "&.active": {
      display: "block",
    },
  },
}));

const DogImage = styled("div")(() => ({
  position: "absolute",
  top: "-12%",
  left: "47%",
}));

const SubRoot = styled("div")(() => ({
  position: "absolute",
  top: 0,
  width: "100%",
}));

const DogRoot = styled("div")(({ theme }) => ({
  color: "#FFFFFF",
  width: "100%",
  padding: theme.spacing(14, 10),
  background:
    "linear-gradient(to left, rgba(37, 45, 55, 0) 40%, #000000 100%, #09101A 100%), linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 75%)",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(4, 3),
    background:
      "linear-gradient(to left, rgba(37, 45, 55, 0) 50%, #000000 100%, #09101A 100%), linear-gradient(to top, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 75%)",
  },
  [theme.breakpoints.down("mmd")]: {
    padding: theme.spacing(4, 3),
    background:
      "linear-gradient(to left, rgba(37, 45, 55, 0) 50%, #000000 100%, #09101A 100%), linear-gradient(to top, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 75%)",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 3),
    background:
      "linear-gradient(to left, rgba(37, 45, 55, 0) 50%, #000000 100%, #09101A 100%), linear-gradient(to top, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 75%)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 3),
    background:
      "linear-gradient(to left, rgba(37, 45, 55, 0) 50%, #000000 100%, #09101A 100%), linear-gradient(to top, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
  },
}));

const CustomTabList = styled(TabList)(({ theme }) => ({
  marginTop: theme.spacing(12),
  "&.MuiTabs-flexContainer": {
    display: "flex",
    alignItems: "flex-end",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root": {
    paddingLeft: 0,
  },
}));

const FooterSection = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("mmd")]: {
    height: theme.spacing(12),
    backgroundColor: "#FFF",
  },
}));
