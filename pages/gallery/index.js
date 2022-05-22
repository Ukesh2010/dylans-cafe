import Head from "next/head";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "gallery-01.jpg",
    "gallery-02.jpg",
    "gallery-03.jpg",
    "gallery-04.jpg",
    "gallery-05.jpg",
    "gallery-06.jpg",
    "gallery-07.jpg",
  ];

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
              {images.map((image) => (
                <div className="media-image">
                  <Image
                    className="img"
                    src={"/images/gallery/" + image}
                    layout="responsive"
                    width={240}
                    height={240}
                    alt="food image"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
