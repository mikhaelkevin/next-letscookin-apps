import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="col-lg-4 offset-lg-4 col-sm-12 col-12 mainContainer">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
