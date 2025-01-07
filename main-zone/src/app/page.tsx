import Header from "@/components/header/header";
import Link from "next/link";
import { Button } from "smart-ui-custom";

export default function Home() {
  return (
    <div>
      <Header />
      <Button label="hola"></Button>
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
