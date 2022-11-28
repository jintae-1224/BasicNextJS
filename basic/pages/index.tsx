import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
  };
}

interface Iprops {
  time: string;
}

export default function Home({ time }: Iprops) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <Link href="/csr">Csr로</Link>
      <Link href="/ssg">ssg로</Link>
      <Link href="/isr">isr로</Link>
    </>
  );
}
