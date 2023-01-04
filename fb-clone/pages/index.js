import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed />
        <Widget />
      </main>
    </>
  );
}
