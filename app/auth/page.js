"use client";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import React from "react";
import { useState } from "react";

function page() {
  const [displayLogin, setDisplayLogin] = useState(true);
  const toggleDisplay = () => {
    setDisplayLogin(!displayLogin);
  };

  return displayLogin ? (
    <Login toggleDisplay={toggleDisplay} />
  ) : (
    <SignUp toggleDisplay={toggleDisplay} />
  );
}

export default page;
