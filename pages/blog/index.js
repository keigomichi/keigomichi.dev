import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { client } from "../../libs/client";
import { Post } from "../../components/post";

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
  });

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  // console.log(data);
  // console.log(data.contents);
  const postList = data.contents;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>{data.contents.title}</h1> */}
        <h1>Blog</h1>
        <section>
          {postList.map((post) => (
            <>
              <h1>{post.title}</h1>
              <img src={`${post.eyecatch.url}`} />
              <p>{post.content}</p>
            </>
          ))}
        </section>
      </main>
    </div>
  );
}

// export default function Home({ postData }) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Blog List</title>
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//       </Head>
//       <main className={styles.main}>
//         <ul>
//           {postData.contents.map((post) => (
//             <Post {...post} key={post.id} />
//           ))}
//           {/* {postDate.map((post) => (
//             <Post {...post} key={post.id} />
//           ))} */}
//           {/* {blogData.map((article) => {
//             return <li>{article.title}</li>;
//           })}
//           <li>
//             <h2>タイトル - ここにはタイトルが表示されます</h2>
//             <p>内容 - ここには内容が表示されます</p>
//           </li>
//           <li>
//             <h2>タイトル - ここにはタイトルが表示されます</h2>
//             <p>内容 - ここには内容が表示されます</p>
//           </li> */}
//         </ul>
//       </main>
//     </div>
//   );
// }
