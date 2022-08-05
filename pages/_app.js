import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layouts from "../components/Layouts";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Provider>
  );
}

export default MyApp;
