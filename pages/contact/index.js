import Head from "next/head";

export default function Contact() {
  return (
    <div className="page-contact">
      <Head>
        <title>Dylan's Cafe: Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <section className="header">
          <h1 className="title title-lg fancy-title">Get In Touch</h1>
        </section>

        <section className="section-container">
          <div className="container">
            <div className="contact-info-header">
              <h3 className="title">
                For Orders & Collection Please Contact Us
              </h3>
              <a
                href="tel:01634817772"
                className="text-xl fancy-title link-accent"
              >
                01634817772
              </a>
              <p className="subtitle-lg">
                For home delivery please contact our delivery partners ( Just
                Eat, Uber Eat and Deliveroo )
              </p>
              <div className="address-block">
                <h3 className="title fancy-title">Address</h3>
                <p className="text-md">56 Chatham High Street Kent ME4 4DS</p>
              </div>
            </div>
            <div className="forms-container">
              <div className="grid-row">
                <div className="col-md-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4980.138923177181!2d0.5153815348876953!3d51.38340139999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8cd0176ce7e09%3A0x2f5fb963d2ebbf4d!2sDylans%20Cafe%20Bar%20%26%20Restaurant!5e0!3m2!1sen!2snp!4v1652449149171!5m2!1sen!2snp"
                    allowfullscreen="false"
                    loading="lazy"
                    className="map-iframe"
                  ></iframe>
                </div>
                <div className="col-md-6">
                  <form className="form">
                    <div className="form-group">
                      <div className="grid-row name-grid-row">
                        <div className="col-sm-6">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control"
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        placeholder="Contact Number"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="Message"
                        className="form-control"
                        rows={6}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-accent">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
