import Head from "next/head";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="page-gallery">
      <Head>
        <title>Dylan's Cafe: Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="section-container">
          <div className="container">
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
        </section>
      </main>
    </div>
  );
}
