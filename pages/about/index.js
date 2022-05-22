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
        <section className="section-container title-section">
          <div className="container">
            <h1 className="title title-lg fancy-title">Who Are We</h1>
          </div>
        </section>

        <section className="section-container about-content">
          <div className="container">
            <p className="subtitle-lg">
              Authentic Nepalese, Indian, Indo-Chinese and street foods arrive
              in the famous Medway town Chatham High Street, delivering an
              exclusive Multi-cuisine dining experience (Breakfast lunch and
              dinner) under one roof of Dylan's Cafe Bar and Restaurant.
            </p>
            <p className="subtitle-lg">
              All our dishes have been personally created by our Professional
              Chefs Raju and Keshav. Both are childhood friends from the small
              village of Bihunkot Nepal. They both have more than 20 years of
              experience in the hospitality industry in Nepal, India, and top
              hotels and restaurants in the UK. They developed a unique menu
              offering an array of dishes guaranteed to satisfy the most
              sophisticated pallets and not forget the more traditional devotee.
            </p>
            <p className="subtitle-lg">
              A Culinary journey of exploration awaits you, filled with
              innovation and delivering a truly unique experience. While our
              culinary style represents an evolution in Indian, Nepalese, and
              Indo-Chinese food, authenticity is the foundation of our menu. We
              look to create a dining experience that will not be easily
              forgotten. We believe if you cook from the heart, the rest will
              follow. Visit us to sample our amazing cuisine alternatively, you
              can order our delicious food for delivery from our delivery
              partners ( Just Eat, Uber Eats, and Deliveroo) or collect to enjoy
              a 10% Discount in the comfort of your own home.
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
