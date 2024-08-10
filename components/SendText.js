"use client";
import React from "react";
import { Stack, Button, TextField } from "@mui/material";

function SendText({ meessages, input, handleInputChange, handleSubmit }) {
  return (
    <Stack direction={"row"} spacing={2}>
      <TextField
        multiline
        maxRows={3}
        placeholder="Type your message here"
        fullWidth
        value={input}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Send
      </Button>
    </Stack>
  );
}

export default SendText;
