import Head from "next/head";
import styles from "../styles/Home.module.css";
// import Image from "next/image";
// import Link from "next/link";
// import Button from "@mui/material/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>keigomichi</title>
        <meta property="og:title" content="keigomichi.dev" />
        <meta
          property="og:description"
          content="keigomichi's personal website."
        />
        <meta name="description" content="keigomichi's personal website." />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <div className={styles.contentWrapper}>
        {/* Description */}
        <container className={styles.container}>
          <div className={styles.header}>
            <img src="/icon_round.png" width={64} height={64} />
            <nav className={styles.header__item}>
              <a href="https://twitter.com/keigomichi" target="_blank">
                Twitter
              </a>
              <a href="https://github.com/keigomichi" target="_blank">
                GitHub
              </a>
            </nav>
          </div>
          <h1 className={styles.title}>keigomichi.dev</h1>
          <p className={`${styles.description} ${styles.border}`}>
            デザインとフロントエンドに興味がある大学2年生です。
            <br />
            このサイトは、私が所属しているサークルである
            <a href="https://hicoder.one" target="_blank">
              HiCoder
            </a>
            のハッカソン企画に出品する作品として制作されました。
            <br />
            Next.jsでSSGされ、Cloudflare Pagesを使って配信されています。
            <br />
            まだBlogに投稿された記事はありません、何卒ご了承ください。
          </p>
        </container>

        {/* Works */}
        <container className={styles.container}>
          <h2 className={styles.subtitle}>Works</h2>
          <div className={styles.works__wrapper}>
            <img src="/hicoder.png" width="100%" />
            <div className={styles.works__content}>
              <span className={styles.works__title}>
                広島大学コンピュータサークル HiCoder 公式Webサイト
              </span>
              <p className={styles.works__description}>
                大学1年生のときに作ったはじめての作品。当時は割と思い通りのデザインに仕上がってうれしかった記憶があります。学んだばかりだったHTML・CSS(Sass)・JavaScriptで作りました。作り直したい気持ちがあります。
              </p>
            </div>
            <img src="/revive.png" width="100%" />
            <div className={styles.works__content}>
              <span className={styles.works__title}>
                株式会社Revive オンラインストア
              </span>
              <p className={styles.works__description}>
                高校時代の知人の知人の紹介で新しく会社をはじめる方のECサイトを制作しました。Shopifyのテンプレートをカスタマイズして作ったため、デザイン上の制約はありましたが、注文通りの雰囲気のサイトにできて喜んでいただけました。
              </p>
            </div>
          </div>
        </container>

        {/* Interest */}
        <container className={styles.container}>
          <h2 className={styles.subtitle}>Interest</h2>
          <div className={styles.interest__wrapper}>
            <div className={styles.interest__item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className={styles.icon}
              >
                <path d="M14.75 40Q13.65 40 12.825 39.175Q12 38.35 12 37.25V16.75Q12 15.6 12.825 14.8Q13.65 14 14.75 14H19V8.55Q19 7.95 19.4 7.55Q19.8 7.15 20.4 7.15H27.6Q28.2 7.15 28.6 7.55Q29 7.95 29 8.55V14H33.25Q34.35 14 35.175 14.825Q36 15.65 36 16.75V37.25Q36 38.35 35.175 39.175Q34.35 40 33.25 40Q33.25 40.65 32.8 41.1Q32.35 41.55 31.7 41.55Q31.05 41.55 30.6 41.1Q30.15 40.65 30.15 40H17.85Q17.85 40.65 17.4 41.1Q16.95 41.55 16.3 41.55Q15.65 41.55 15.2 41.1Q14.75 40.65 14.75 40ZM20.3 14H27.7V8.45H20.3ZM14.75 38.45H33.25Q33.75 38.45 34.1 38.1Q34.45 37.75 34.45 37.25V16.75Q34.45 16.25 34.1 15.9Q33.75 15.55 33.25 15.55H14.75Q14.25 15.55 13.9 15.9Q13.55 16.25 13.55 16.75V37.25Q13.55 37.75 13.9 38.1Q14.25 38.45 14.75 38.45ZM16.85 35H18.15V19H16.85ZM23.35 35H24.65V19H23.35ZM29.85 35H31.15V19H29.85ZM13.55 38.45Q13.55 38.45 13.55 38.1Q13.55 37.75 13.55 37.25V16.75Q13.55 16.25 13.55 15.9Q13.55 15.55 13.55 15.55Q13.55 15.55 13.55 15.9Q13.55 16.25 13.55 16.75V37.25Q13.55 37.75 13.55 38.1Q13.55 38.45 13.55 38.45Z" />
              </svg>

              <span className={styles.interest__title}>鉄道・旅行</span>
              <p className={styles.description}>
                祖父が元国鉄マンだったこともあり小さい頃から興味がありました。最近は、特別急行列車に乗車してリクライニングを倒してくつろぐことに魅力を感じています。『安全の確保は、輸送の生命である』、良い言葉。
              </p>
            </div>
            <div className={styles.interest__item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className={styles.icon}
              >
                <path d="M20.9 23H27.1V8.4Q27.1 7.1 26.2 6.2Q25.3 5.3 24 5.3Q22.7 5.3 21.8 6.175Q20.9 7.05 20.9 8.4ZM9.3 30.7H38.7V25.75Q38.7 25.25 38.35 24.9Q38 24.55 37.45 24.55H10.55Q10 24.55 9.65 24.9Q9.3 25.25 9.3 25.75ZM7.55 42.7H13.6V37.45Q13.6 37.15 13.825 36.925Q14.05 36.7 14.4 36.7Q14.75 36.7 14.95 36.925Q15.15 37.15 15.15 37.45V42.7H23.25V37.45Q23.25 37.15 23.475 36.925Q23.7 36.7 24 36.7Q24.35 36.7 24.55 36.925Q24.75 37.15 24.75 37.45V42.7H32.85V37.45Q32.85 37.15 33.075 36.925Q33.3 36.7 33.65 36.7Q33.95 36.7 34.175 36.925Q34.4 37.15 34.4 37.45V42.7H40.45Q41.05 42.7 41.425 42.225Q41.8 41.75 41.6 41.15L38.95 31.75H9.05L6.4 41.15Q6.2 41.75 6.575 42.225Q6.95 42.7 7.55 42.7ZM40.15 44.25H7.85Q6.4 44.25 5.475 43.075Q4.55 41.9 5 40.45L7.75 30.9V26Q7.75 24.75 8.625 23.875Q9.5 23 10.75 23H19.4V8.4Q19.4 6.45 20.75 5.1Q22.1 3.75 24 3.75Q25.9 3.75 27.25 5.1Q28.6 6.45 28.6 8.4V23H37.25Q38.5 23 39.375 23.875Q40.25 24.75 40.25 26V30.9L43 40.55Q43.4 41.95 42.5 43.1Q41.6 44.25 40.15 44.25ZM38.7 24.55H9.3Q9.3 24.55 9.65 24.55Q10 24.55 10.55 24.55H37.45Q38 24.55 38.35 24.55Q38.7 24.55 38.7 24.55ZM27.1 23H20.9Q20.9 23 21.8 23Q22.7 23 24 23Q25.3 23 26.2 23Q27.1 23 27.1 23Z" />
              </svg>
              <span className={styles.interest__title}>掃除・片付け</span>
              <p className={styles.description}>
                掃除・片付けが好きです。掃除なんかしても意味ない、時代はお掃除ロボットだとは思いますが、汚い部屋を綺麗にする、とても楽しいです。昔は、大改造ビフォーアフターを見るのが好きでした。デザインが好きなのもその延長線上にあるような気がします。
              </p>
            </div>
            <div className={styles.interest__item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className={styles.icon}
              >
                <path d="M5.95 37.55V35.25H10.1V12.7Q10.1 11.55 10.9 10.725Q11.7 9.9 12.9 9.9H41.1V11.45H12.9Q12.4 11.45 12.025 11.85Q11.65 12.25 11.65 12.7V35.25H22.5V37.55ZM30.65 37.55Q30 37.55 29.55 37.1Q29.1 36.65 29.1 35.9V18.05Q29.1 17.4 29.55 16.975Q30 16.55 30.65 16.55H40.3Q41.05 16.55 41.55 16.975Q42.05 17.4 42.05 18.05V35.9Q42.05 36.65 41.55 37.1Q41.05 37.55 40.3 37.55ZM30.65 35.25H40.5V18.1H30.65Z" />
              </svg>
              <span className={styles.interest__title}>ガジェット</span>
              <p className={styles.description}>
                これは高校生のときが全盛期だったように思いますが、ガジェット好きの端くれもやっています。昨年は某家電量販店でクリスマスプレゼントのラッピングの短期バイトに取り組み、その際の給与所得で16インチMacBook
                Proを購入しました。今はGoogle謹製のPixel
                4a(5G)を使用していますが、PCがmacOSになったのでiPhoneも気になっています（Apple信者の皆さん、どうもこんにちは）。Lightning何とかしてくれ…。
              </p>
            </div>
            <div className={styles.interest__item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                className={styles.icon}
              >
                <path d="M18.35 40V38.45H22.45V34H8.8Q7.65 34 6.825 33.2Q6 32.4 6 31.25V10.75Q6 9.6 6.825 8.8Q7.65 8 8.8 8H39.25Q40.4 8 41.2 8.8Q42 9.6 42 10.75V31.25Q42 32.4 41.2 33.2Q40.4 34 39.25 34H25.55V38.45H29.7V40ZM8.8 32.45H39.25Q39.7 32.45 40.075 32.075Q40.45 31.7 40.45 31.25V10.75Q40.45 10.3 40.075 9.925Q39.7 9.55 39.25 9.55H8.8Q8.3 9.55 7.925 9.925Q7.55 10.3 7.55 10.75V31.25Q7.55 31.7 7.925 32.075Q8.3 32.45 8.8 32.45ZM7.55 32.45Q7.55 32.45 7.55 32.1Q7.55 31.75 7.55 31.25V10.75Q7.55 10.25 7.55 9.9Q7.55 9.55 7.55 9.55Q7.55 9.55 7.55 9.9Q7.55 10.25 7.55 10.75V31.25Q7.55 31.75 7.55 32.1Q7.55 32.45 7.55 32.45Z" />
              </svg>
              <span className={styles.interest__title}>その他</span>
              <p className={styles.description}>
                私はふとしたタイミングでドラマやアニメにハマります。昨年は、名探偵コナンや相棒、王様のレストランなどを見ていました。今年はウルトラマン・ウルトラセブンを見返すなどしています。
              </p>
            </div>
          </div>
        </container>
        {/* Blog */}
        <container className={styles.container}>
          <h2 className={styles.subtitle}>Posts</h2>
          <p className={styles.description}>ただいま準備中です。</p>
        </container>
      </div>
      <footer className={styles.footer}>
        All rights reserved &copy; keigomichi 2022
      </footer>
    </>
  );
}
