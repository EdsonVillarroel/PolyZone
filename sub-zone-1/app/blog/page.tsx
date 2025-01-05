'use client'
import Link from "next/link";
import { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const channel = new BroadcastChannel("shared-data-channel");

      channel.onmessage = (event) => {
        console.log("Mensaje recibido:", event.data); // { key: 'theme', value: 'dark' }
      };

      return () => channel.close(); // Cerrar el canal para evitar fugas de memoria
    }
  }, []);

  return (
    <div>
      <h3>This is our blog</h3>
      <ul>
        <li>
          <Link href="/blog/post/1">Post 1</Link>
        </li>
        <li>
          <Link href="/blog/post/2">Post 2</Link>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
}
