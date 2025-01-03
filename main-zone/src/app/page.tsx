import Header from "@/components/header/header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <p>This is our homepage</p>
      <div>
        <a href="/blog">Blog</a>
      </div>
      <div>
        <Link href="/about">About us</Link>
      </div>
    </div>
  );
}
