import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <span> Welcome to Next.js! </span>
      <ul>
        <li>
          <Link href="/Home">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
