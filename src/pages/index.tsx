import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { getPostMetadata } from "../backend";
import Header from "../components/Header";
import styles from "../styles/index.module.css";
import { IPost } from "../types";

function formatDateString(dateString: string) {
  const date = new Date(dateString);
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate();
  return `${y}.${m}.${d}`;
}

interface IHomeProps {
  postNames: string[];
  posts: Omit<IPost, "html">[];
}

export const getStaticProps: GetStaticProps<IHomeProps> = async (context) => {
  const postMetadata = await getPostMetadata();
  const posts = postMetadata.posts.map((post) => {
    const { html, ...others } = post;
    return others;
  });
  const props = { ...postMetadata, posts };
  return {
    props,
  };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>UNKNOWN-PGR</title>
        <meta name="description" content="Unknownpgrs' blog" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        {posts.map(({ name, title, date, category }) => (
          <div key={title} className={styles.post}>
            <div>
              <h1>
                <Link href={`/posts/${name}`}>{title} </Link>
              </h1>
            </div>
            <div>
              {formatDateString(date)} #{category}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
