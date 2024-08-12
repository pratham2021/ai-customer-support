"use client";
import ChatBox from "@/components/ChatBox";
import LoadingPage from "@/components/LoadingPage";
import { auth } from "../app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function checkUser() {
      try {
        onAuthStateChanged(auth, (user) => {
          if (!user) {
            router.push("/auth");
          } else {
            setUser(user);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    checkUser();
  }, [router]);

  if (user === undefined) {
    return <LoadingPage />;
  }

  return <ChatBox setUser={setUser} />;
}
