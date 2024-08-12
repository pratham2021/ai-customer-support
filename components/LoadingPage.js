import { Box, CircularProgress } from "@mui/material";
import React from "react";

function LoadingPage() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin={"auto"}
    >
      <Box
        width="50vw"
        height="60vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    </Box>
  );
}

export default LoadingPage;
