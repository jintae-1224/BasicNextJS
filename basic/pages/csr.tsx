import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";
import styles from "../styles/Home.module.css";

export default function Csr() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(new Date().toISOString());
  }, []);

  return <h1 className={styles.title}>{time}</h1>;
}

//csr 페이지에 getLayout 적용
Csr.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
