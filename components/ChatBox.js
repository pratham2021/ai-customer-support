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
  const { initialMessages, messages, input, handleInputChange, handleSubmit } =
    useChat({
      api: "/api/chat",
      initialMessages: [
        {
          role: "assistant",
          content:
            "Hi there! I'm here to help with your coding challenges by offering hints and guidance. Feel free to ask for assistance whenever you need it!",
        },
      ],
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
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="90vw"
        height="90vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          direction={"column"}
          width="100%"
          height="100%"
          border="1px solid black"
          borderRadius={2}
          padding={1}
          spacing={1.5}
          sx={{ boxShadow: 3 }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            padding={1}
            borderBottom="1px solid black"
            paddingX={1}
          >
            <Typography variant="h6">Chat</Typography>
            <Button
              className="button"
              variant="contained"
              onClick={handleLogout}
            >
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
    </Box>
  );
}

export default ChatBox;
