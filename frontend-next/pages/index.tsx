import Head from "next/head";
import Header from "../components/header/header";
import PostList from "../components/postList/postList";
import metadata from "../meta.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>UNKNOWN-PGR</title>
        <meta name="description" content="Unknownpgrs' blog" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <PostList metadata={metadata} />
    </div>
  );
}
