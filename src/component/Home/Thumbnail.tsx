"use client";
import React from "react";
import { styled } from "@mui/material/styles";

interface ThumbnailProps {
  url: string;
  alt: string;
  active?: boolean;
}

const Thumbnail = ({ url, alt, active = false }: ThumbnailProps) => {
  return (
    <Root>
      <ImageRoot className={active ? "active" : ""}>
        <ImageBackground className={active ? "active" : ""}>
          <img src={url} alt={alt} />
        </ImageBackground>
      </ImageRoot>
    </Root>
  );
};

export default Thumbnail;

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    height: 100,
  },
  [theme.breakpoints.up("md")]: {
    height: 200,
  },
  [theme.breakpoints.up("lg")]: {
    height: 200,
  },
  [theme.breakpoints.up("xl")]: {
    height: 320,
  },
  display: "flex",
  alignItems: "end",
}));

const ImageRoot = styled("div")(({ theme }) => ({
  width: 100,
  height: 100,
  [theme.breakpoints.up("sm")]: {
    width: 100,
    height: 100,
    "&:hover": {
      width: 100,
      height: 100,
      borderRadius: 12,
    },
    "&.active": {
      width: 100,
      height: 100,
      borderRadius: 12,
    },
  },
  [theme.breakpoints.up("md")]: {
    width: 120,
    height: 120,
    "&:hover": {
      width: 200,
      height: 200,
      borderRadius: 14,
    },
    "&.active": {
      width: 200,
      height: 200,
      borderRadius: 14,
    },
  },
  [theme.breakpoints.up("lg")]: {
    width: 140,
    height: 140,
    "&:hover": {
      width: 200,
      height: 200,
      borderRadius: 16,
    },
    "&.active": {
      width: 200,
      height: 200,
      borderRadius: 16,
    },
  },
  [theme.breakpoints.up("xl")]: {
    width: 124,
    height: 124,
    "&:hover": {
      width: 248,
      height: 248,
      borderRadius: 18,
    },
    "&.active": {
      width: 248,
      height: 248,
      borderRadius: 18,
    },
  },
  [theme.breakpoints.up("xxl")]: {
    width: 160,
    height: 160,
    "&:hover": {
      width: 320,
      height: 320,
      borderRadius: 18,
    },
    "&.active": {
      width: 320,
      height: 320,
      borderRadius: 18,
    },
  },
  transition: "transform 0.3s ease",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    overflow: "hidden",
    borderRadius: 8,
    background: "linear-gradient(45deg, white, black 50%, black 50%, white)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
    padding: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.375),
    },
  },
  "&.active": {
    overflow: "hidden",
    borderRadius: 8,
    background: "linear-gradient(45deg, white, black 50%, black 50%, white)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
    padding: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.375),
    },
  },
}));

const ImageBackground = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "black",
    padding: theme.spacing(0.5),
    borderRadius: 16,
    width: "99%",
    height: "99%",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 8,
      width: "99.5%",
      height: "99.5%",
      padding: theme.spacing(0.375),
    },
  },
  "&.active": {
    backgroundColor: "black",
    padding: theme.spacing(0.5),
    borderRadius: 16,
    width: "99%",
    height: "99%",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 8,
      width: "99.5%",
      height: "99.5%",
      padding: theme.spacing(0.375),
    },
  },
  "& img": {
    width: "90%",
    height: "90%",
    objectFit: "cover",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      borderRadius: 6,
    },
  },
}));
