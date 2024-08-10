"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import DisplayText from "./DisplayText";
import SendText from "./SendText";
import { useChat } from "ai/react";

function ChatBox() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

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
