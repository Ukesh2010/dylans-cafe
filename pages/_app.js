import Footer from "../components/footer";
import Nav from "../components/nav";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
