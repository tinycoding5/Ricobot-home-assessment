import React from "react";
import { styled } from "@mui/material/styles";
import { CustomButton } from "../common/CustomButton";
import { useIsMobile } from "@/hooks/useIsMobile";
import MainDogContent from "./MainDogContent";

interface MainTextContentProps {
  height: string | number;
}

const MainTextContent = ({ height }: MainTextContentProps) => {
  const { isMobile } = useIsMobile();
  return (
    <MainRoot>
      <Root style={{ minHeight: height }}>
        <MoreText>
          MORE FROM
          <br />
          RICO THE DOG
        </MoreText>
        <BackButtonRoot>
          <CustomButton variant="outlined" color="white">
            Rico is back!
          </CustomButton>
        </BackButtonRoot>
        <RicoBot>RICOBOT</RicoBot>
        <RicoText>
          Charge into a brand-new supersized adventure with RICO across{" "}
          {!isMobile ? <br /> : ""}50 exciting and diverse worlds, available now
          on PS5!
        </RicoText>
        <BtnLearnMore variant="contained" color="white" size="large">
          Learn More
        </BtnLearnMore>
        <MainDogContent />
      </Root>
      <FooterSection />
    </MainRoot>
  );
};

export default MainTextContent;

const MainRoot = styled("div")(() => ({
  position: "absolute",
  top: 0,
  width: "100%",
}));

const Root = styled("div")(({ theme }) => ({
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

const MoreText = styled("div")(({ theme }) => ({
  fontSize: 31,
  fontWeight: 900,
  [theme.breakpoints.down("md")]: {
    fontSize: 17,
  },
}));

const BackButtonRoot = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(12),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(8),
  },
}));

const RicoBot = styled("div")(({ theme }) => ({
  fontSize: 35,
  fontWeight: 900,
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    fontSize: 49,
  },
}));

const RicoText = styled("div")(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
}));

const BtnLearnMore = styled(CustomButton)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  fontSize: 16,
  letterSpacing: -1,
  fontWeight: 900,
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
}));

const FooterSection = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("mmd")]: {
    height: theme.spacing(12),
    backgroundColor: "#FFF",
  },
}));
