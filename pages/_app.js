import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Layouts from "../components/Layouts";
import { store } from "../redux/store";
import { Provider } from "react-redux";

// export default class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const pageProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {};

//     //Anything returned here can be accessed by the client
//     return { pageProps };
//   }

//   render() {
//     //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
//     const { Component, pageProps } = this.props;

//     return (
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <MainApp Component={Component} pageProps={pageProps} />
//         </PersistGate>
//       </Provider>
//     );
//   }
// }

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
// const MainApp = ({ Component, pageProps }) => {
//   const { login } = useSelector((state) => state);
//   console.log("token :>> ", login);

//   return <Component {...pageProps} />;
// };
