"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DisplayText from "./DisplayText";
import SendText from "./SendText";
import { useChat } from "ai/react";
import { Button } from "@mui/material";
import { auth } from "../app/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

function ChatBox({ setUser }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const signout = await signOut(auth);
      setUser(undefined);
      router.push("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      width="90vw"
      height="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop={2}
      marginX={"auto"}
    >
      <Stack
        direction={"column"}
        marginTop={4}
        width="100%"
        height="100%"
        border="1px solid black"
        padding={1}
        spacing={1.5}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          padding={1}
          borderBottom="1px solid black"
        >
          <Typography variant="h6">Chat</Typography>
          <Button variant="contained" onClick={handleLogout}>
            Log Out
          </Button>
        </Box>
        <DisplayText messages={messages} />
        <SendText
          messages={messages}
          handleSubmit={handleSubmit}
          input={input}
          handleInputChange={handleInputChange}
        />
      </Stack>
    </Box>
  );
}

export default ChatBox;
