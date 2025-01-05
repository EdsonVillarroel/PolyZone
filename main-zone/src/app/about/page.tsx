'use client'
import Link from "next/link";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const channel = new BroadcastChannel("shared-data-channel");
    
    channel.postMessage({ key: "theme", value: "dark" });
  }, [])
  

  return (
    <div>
      <p>This is the about page. Main</p>
      
      <div>
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}
