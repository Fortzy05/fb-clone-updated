import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import { getSession } from "next-auth/react";
import Login from "../components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    Props: {
      session
    },
  };
}
