import Head from "next/head";
import Header from "../components/header";
import Form from "../components/form";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Head>
          <title>Settings.wtf</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/lozibig.png" />
        </Head>
        <Header />
      </header>
      <Form />
    </>
  );
}
