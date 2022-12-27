import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import { FC } from "react";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>hello, world!</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
