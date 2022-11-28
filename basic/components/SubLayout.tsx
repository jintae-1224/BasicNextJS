import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface Iprops {
  children: React.ReactNode;
}

export default function SubLayout({ children }: Iprops) {
  return (
    <div>
      <h1>
        <Link href="/">홈으로</Link>
        {children}
      </h1>
    </div>
  );
}
