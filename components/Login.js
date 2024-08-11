"use client";
import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email);
    console.log(password);
  };

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
            <TextField
              placeholder="Email"
              variant="outlined"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                // console.log(email);
              }}
            />
            <TextField
              placeholder="Password"
              variant="outlined"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                // console.log(password);
              }}
            />
          </Stack>
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
