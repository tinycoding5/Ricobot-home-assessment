import { Theme, useMediaQuery } from "@mui/material";

export const useIsMobile = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return {
    isMobile,
  };
};
