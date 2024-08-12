"use client";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";
import LoadingPage from "@/components/LoadingPage";
import { auth } from "../firebase/config";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

function page() {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
  const router = useRouter();

  const toggleDisplay = () => {
    setDisplayLogin(!displayLogin);
  };

  useEffect(() => {
    async function checkUser() {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            router.push("/");
          } else {
            setLoadingPage(false);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    checkUser();
  }, [router]);

  if (loadingPage) {
    // return <div>Loading...</div>;
    return <LoadingPage />;
  }

  return displayLogin ? (
    <Login toggleDisplay={toggleDisplay} />
  ) : (
    <SignUp toggleDisplay={toggleDisplay} />
  );
}

export default page;
