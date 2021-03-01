import Head from "next/head";

const MainLayout = ({ children, title = "Next app" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="keywords" content="movie" />
            </Head>
            <nav>
                <a>1</a>
                <a>2</a>
                <a>3</a>
            </nav>
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
