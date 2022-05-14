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
      <main className="main">
        <section className="banner">
          <div className="container">
            <div className="info-container">
              <h1 className="title">Welcome to</h1>
              <h1 className="title title-xl fancy-title">
                Dylan's Cafe Bar and Restaurant
              </h1>
            </div>
            <button className="btn btn-accent cta-btn">Contact Us</button>
          </div>
        </section>
        <section className="section-container section-our-story">
          <div className="container ">
            <div className="grid-row">
              <div className="col-sm-6">
                <div className="image-block">
                  <div className="media-image custom-border">
                    <Image
                      className="img"
                      src={"/images/image-001.jpg"}
                      layout="responsive"
                      width={320}
                      height={320}
                      alt="food image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="header">
                  <h2 className="title title-lg fancy-title">Our Story</h2>
                </div>
                <p className="subtitle-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                  dolorum beatae laudantium earum expedita repellendus placeat
                  voluptatem praesentium excepturi animi ullam, cumque inventore
                  suscipit id adipisci corporis laborum odio quisquam.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-container section-gallery">
          <div className="container">
            <div className="grid-row">
              <div className="col-sm-12">
                <div className="gallery-container">
                  <div className="media-image">
                    <Image
                      className="img"
                      src={"/images/image-001.jpg"}
                      layout="responsive"
                      width={240}
                      height={240}
                      alt="food image"
                    />
                  </div>
                  <div className="media-image">
                    <Image
                      className="img"
                      src={"/images/image-001.jpg"}
                      layout="responsive"
                      width={240}
                      height={240}
                      alt="food image"
                    />
                  </div>
                  <div className="media-image">
                    <Image
                      className="img"
                      src={"/images/image-001.jpg"}
                      layout="responsive"
                      width={240}
                      height={240}
                      alt="food image"
                    />
                  </div>
                  <div className="media-image">
                    <Image
                      className="img"
                      src={"/images/image-001.jpg"}
                      layout="responsive"
                      width={240}
                      height={240}
                      alt="food image"
                    />
                  </div>
                  <div className="media-image">
                    <Image
                      className="img"
                      src={"/images/image-001.jpg"}
                      layout="responsive"
                      width={240}
                      height={240}
                      alt="food image"
                    />
                  </div>
                  <div className="media-image">
                    <Image
                      className="img"
                      src={"/images/image-001.jpg"}
                      layout="responsive"
                      width={240}
                      height={240}
                      alt="food image"
                    />
                  </div>
                  <div className="media-image">
                    <Image
                      className="img"
                      src={"/images/image-001.jpg"}
                      layout="responsive"
                      width={240}
                      height={240}
                      alt="food image"
                    />
                  </div>
                  <div className="media-image">
                    <Image
                      className="img"
                      src={"/images/image-001.jpg"}
                      layout="responsive"
                      width={240}
                      height={240}
                      alt="food image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-container section-menu">
          <div className="container">
            <div className="grid-row">
              <div className="col-sm-12">
                <div className="header">
                  <h2 className="title title-lg fancy-title">Menus</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
