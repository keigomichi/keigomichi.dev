// import Link from 'next/link'

export default function Post({ title, content, id }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      {/* <Link href={`/post/${id}`}>
        <a>Read more...</a>
      </Link> */}
    </article>
  );
}
