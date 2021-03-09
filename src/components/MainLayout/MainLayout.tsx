import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SeachMain from "../Searc/SearMain";

const MainLayout = ({ children, title = "Next app" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="keywords" content="movie" />
            </Head>
            {/* <nav>
                <div>
                    <SeachMain />
                </div>
            </nav> */}
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
