import Head from "next/head";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="page-home">
      <Head>
        <title>Dylan's Cafe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className="main">
        <section className="banner">
          <div className="container">
            <div className="info-container">
              <h1 className="title">Welcome to</h1>
              <h1 className="title title-xl">
                Dylan's Cafe Bar and Restaurant
              </h1>
            </div>
            <button className="btn btn-outline-primary">Contact Us</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
