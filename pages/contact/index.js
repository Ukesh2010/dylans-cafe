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

        <section className="forms-container">
          <div className="container">
            <div className="grid-row main-grid-row">
              <div className="col-md-6">Maps</div>
              <div className="col-md-6">
                <form>
                  <div className="form-group">
                    <div className="grid-row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
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
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
