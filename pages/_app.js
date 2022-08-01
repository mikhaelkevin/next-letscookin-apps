import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layouts from "../components/Layouts";

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
