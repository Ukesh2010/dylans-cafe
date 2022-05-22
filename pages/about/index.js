import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <div className="page-about">
      <Head>
        <title>Dylan's Cafe: About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="section-container banner">
          <div className="container">
            <h1 className="title title-lg fancy-title">Who Are We</h1>
          </div>
        </section>

        <section className="section-container about-content">
          <div className="container">
            <p className="subtitle-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum recusandae eius est, pariatur, quo modi sapiente optio
              natus aliquid dignissimos, nesciunt deserunt culpa cumque libero
              molestiae? Aliquid consequuntur animi maiores ipsa similique
              dolorum voluptatem vitae explicabo culpa, fugit veniam voluptatum
              placeat inventore ex debitis quasi reprehenderit deleniti ducimus
              saepe eos.
            </p>

            <div className="image-block">
              <div className="media-image">
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
        </section>
      </main>
    </div>
  );
}
