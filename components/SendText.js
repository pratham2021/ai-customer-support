"use client";
import React from "react";
import { Box, Stack, Button, TextField } from "@mui/material";
import { useState } from "react";

function SendText({ messages, setMessages }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [rows, setRows] = useState(1);

  const sendMessage = () => {
    if (!currentMessage) {
      console.log("No message to send");
      return;
    }

    // api call to send message and generate response

    setMessages([...messages, { role: "user", content: currentMessage }]);
    setCurrentMessage("");
  };

  const textChange = (e) => {
    setCurrentMessage(e.target.value);

    // the resizing of the textfield...still needs work to make it dynamic
    // currenttly it can only increase the number of rows, but not decrease
    const scrollHeight = e.target;
    const lineHeight = 23;
    const newRows = Math.min(
      Math.ceil(scrollHeight.scrollHeight / lineHeight),
      3
    );
    console.log(newRows);
    setRows(newRows);
  };

  return (
    <Stack direction={"row"} spacing={2}>
      <TextField
        multiline
        rows={rows}
        placeholder="Type your message here"
        fullWidth
        // overflow="auto"
        value={currentMessage}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
        onChange={textChange}
      />
      {/* <TextareaAutosize 
				minRows={1}
				maxRows={3}
				aria-label="maximum height"
				style={{ width: '100%' }}
				variant="outlined"
				placeholder="Type your message here"
				value={currentMessage}
				overflow="auto"
				sx={{
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: 'none',
						},
					},
					resize: 'none',
				}}
				onChange={(e) => setCurrentMessage(e.target.value)}
			/> */}
      {/* we can make it a symbol or so later */}
      <Button variant="contained" onClick={sendMessage}>
        Send
      </Button>
    </Stack>
  );
}

export default SendText;
