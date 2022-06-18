import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>keigomichi</title>
        <meta name="description" content="keigomichi's personal website." />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/icon_round.png" width={100} height={100} />
        <h1 className={styles.title}>keigomichi</h1>

        <h2>About</h2>
        <p>
          デザインとフロントエンドに興味がある大学生2年生です。
        </p>

        <h2>Works</h2>
          <ul>
            <li>
              <a href="https://hicoder.one/">HiCoder｜広島大学コンピュータサークル</a>
              <p>大学1年生のときに作成しました。使用技術は，HTML・CSS・JavaScriptです。</p>
            </li>
            <li>
              <a href="https://revive22hiroshima.com/">株式会社Revive オンラインストア</a>
              <p>知人の紹介で新しく会社をはじめる方のECサイトを制作しました。Shopifyを使っています。</p>
            </li>
          </ul>
        <h2>Blog</h2>
      </main>

      <footer className={styles.footer}>
        All rights reserved &copy; keigomichi 2022
      </footer>
    </div>
  );
}
