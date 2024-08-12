"use client";
import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../app/firebase/config";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SignUp({ toggleDisplay }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const changeDisplay = () => {
    toggleDisplay();
  };

  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      if (errorCode === "auth/weak-password") {
        setError("The password is too weak.");
      } else if (errorCode === "auth/email-already-in-use") {
        setError("The email is already in use.");
      } else {
        setError("Falied to create an account. Please try again.");
      }
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
          <Typography variant="h4">Sign Up</Typography>
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
            Sign Up
          </Button>

          <Typography>
            Already Have an Account? <a onClick={changeDisplay}>Login</a>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default SignUp;
