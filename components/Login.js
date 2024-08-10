import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function Login() {
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
        border={1}
        borderRadius={2}
      >
        <Stack
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4">Login</Typography>
          <Stack
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <TextField label="Username" variant="outlined" />
            <TextField label="Password" variant="outlined" />
          </Stack>
          <Button variant="contained">Login</Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
