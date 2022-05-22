import Head from "next/head";
import GalleryImages from "../../components/galleryImages";

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
            <GalleryImages />
          </div>
        </section>
      </main>
    </div>
  );
}
