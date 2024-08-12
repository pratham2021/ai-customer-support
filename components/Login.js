"use client";
import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../app/firebase/config";
import { useRouter } from "next/navigation";

function Login({ toggleDisplay }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const changeDisplay = () => {
    toggleDisplay();
  };

  const handleSubmit = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);

      setError("Invalid Email or Password. Please try again.");
    }
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
        height="65vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border={1}
        borderRadius={2}
        sx={{ boxShadow: 5 }}
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
            {error && <Typography color="error">{error}</Typography>}
            <TextField
              placeholder="Email"
              variant="outlined"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              placeholder="Password"
              variant="outlined"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Stack>
          <Button className="button" variant="contained" onClick={handleSubmit}>
            Login
          </Button>

          <Typography>
            Need to create an account? <a onClick={changeDisplay}>Sign up</a>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
