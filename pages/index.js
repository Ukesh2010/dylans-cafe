import Head from "next/head";
import Image from "next/image";
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
            <button className="btn btn-accent cta-btn">Contact Us</button>
          </div>
        </section>
        <section className="section-container">
          <div className="container our-story">
            <div className="grid-row">
              <div className="col-sm-6">
                <div className="media-image">
                  <Image src={"/test.png"} layout="fill" alt="footer image" />
                </div>
              </div>
              <div className="col-sm-6">
                <h2 className="title">Our Story</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  dolorum beatae laudantium earum expedita repellendus placeat
                  voluptatem praesentium excepturi animi ullam, cumque inventore
                  suscipit id adipisci corporis laborum odio quisquam.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-container">
          <div className="container gallery">
            <div className="grid-row">
              <div className="col-sm-12">Gallery Images</div>
            </div>
          </div>
        </section>
        <section className="section-container">
          <div className="container menu">
            <div className="grid-row">
              <div className="col-sm-12">Menu Items</div>
            </div>
          </div>
        </section>
        <section className="section-container">
          <div className="container menu">
            <div className="grid-row">
              <div className="col-sm-12">Testimonials</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
