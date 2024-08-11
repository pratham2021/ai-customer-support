"use client";

import React, { use, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { useRef } from "react";

function DisplayText({ messages }) {
  const endofMessagesRef = useRef(null);

  useEffect(() => {
    endofMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Stack
      direction={"column"}
      spacing={2}
      flexGrow={1}
      maxHeight="100%"
      overflow="auto"
      paddingBottom={2}
      paddingX={2}
      sx={{
        borderBottom: "1px solid black",
      }}
    >
      {messages.map((message, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent={
            message.role === "assistant" ? "flex-start" : "flex-end"
          }
        >
          <Box
            bgcolor={message.role === "assistant" ? "#f0f0f0" : "primary.main"}
            color={message.role === "assistant" ? "black" : "white"}
            borderRadius={5}
            p={3}
            maxWidth="52%"
          >
            {message.content}
          </Box>
        </Box>
      ))}
      <div ref={endofMessagesRef}></div>
    </Stack>
  );
}

export default DisplayText;
