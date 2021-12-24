import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&family=Poppins:wght@500;600&display=swap" rel="stylesheet" />
      </Head>
      
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
export default MyApp