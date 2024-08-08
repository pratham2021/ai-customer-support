"use client";
import { Box, Stack, Button, TextField, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import React from "react";
import DisplayText from "./DisplayText";
import SendText from "./SendText";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the Headstarter support assistant. How can I help you today?",
    },
    {
      role: "user",
      content: "Hi!",
    },
    {
      role: "assistant",
      content: "Hello there",
    },
    {
      role: "assistant",
      content: "Hello there",
    },
    {
      role: "assistant",
      content: "Hello here",
    },

    {
      role: "user",
      content: "Hi there!",
    },
    {
      role: "user",
      content: "Hi here!",
    },
    {
      role: "user",
      content: "Hi there!",
    },
    {
      role: "user",
      content:
        "fuiewbifenfheifnien ienifneifn wenfiwe nifneifnienfi ewfne nwfniwe ife  fiweqnfi wnf nifnwein wieunf wqnfei weifniwef nen fwenqif newiufnw nfwifniewfi we",
    },
  ]);

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
        <DisplayText messages={messages} />
        <SendText messages={messages} setMessages={setMessages} />
      </Stack>
    </Box>
  );
}

export default ChatBox;
