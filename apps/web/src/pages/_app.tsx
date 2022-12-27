import Layout from "../components/Layout";
import { trpc } from "../utils/trpc";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default trpc.withTRPC(MyApp);
