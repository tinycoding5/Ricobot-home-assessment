"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Dogs } from "@/utils/constant";
import Thumbnail from "./Thumbnail";
import Grid from "@mui/material/Grid2";

const MainDogContent = () => {
  const [active, setActive] = useState(true);
  const handleMouseEnter = () => {
    setActive(false);
  };

  const handleMouseLeave = () => {
    setActive(true);
  };
  return (
    <Root>
      <Grid
        container
        spacing={{ xs: 0.5, sm: 2, md: 3 }}
        alignItems="flex-end"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Dogs.map((dog) => (
          <Grid key={dog.id}>
            <Thumbnail
              url={dog.url}
              alt={dog.name}
              active={dog.id === 1 ? active : undefined}
            />
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default MainDogContent;

const Root = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(5),
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: theme.spacing(6),
  },
  [theme.breakpoints.up("xl")]: {
    marginTop: theme.spacing(8),
  },
  [theme.breakpoints.up("xxl")]: {
    marginTop: theme.spacing(16),
  },
  [theme.breakpoints.up("xxxl")]: {
    marginTop: theme.spacing(20),
  },
}));
