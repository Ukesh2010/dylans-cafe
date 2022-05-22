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
                  Authentic Nepalese, Indian, Indo-Chinese and street foods
                  arrive in the famous Medway town Chatham High Street,
                  delivering an exclusive Multi-cuisine dining experience
                  (Breakfast lunch and dinner) under one roof of Dylan's Cafe
                  Bar and Restaurant.
                </p>
                <p className="subtitle-lg">
                  All our dishes have been personally created by our
                  Professional Chefs Raju and Keshav. Both are childhood friends
                  from the small village of Bihunkot Nepal. They both have more
                  than 20 years of experience in the hospitality industry in
                  Nepal, India, and top hotels and restaurants in the UK. They
                  developed a unique menu offering an array of dishes guaranteed
                  to satisfy the most sophisticated pallets and not forget the
                  more traditional devotee.
                </p>
                <p className="subtitle-lg">
                  A Culinary journey of exploration awaits you, filled with
                  innovation and delivering a truly unique experience. While our
                  culinary style represents an evolution in Indian, Nepalese,
                  and Indo-Chinese food, authenticity is the foundation of our
                  menu. We look to create a dining experience that will not be
                  easily forgotten. We believe if you cook from the heart, the
                  rest will follow. Visit us to sample our amazing cuisine
                  alternatively, you can order our delicious food for delivery
                  from our delivery partners ( Just Eat, Uber Eats, and
                  Deliveroo) or collect to enjoy a 10% Discount in the comfort
                  of your own home.
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
