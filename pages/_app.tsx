import { AppProps } from "next/app";
import { wrapper } from "../src/store";
import "i18n";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
