import type { AppRouter } from "../server/routers/_app";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           **/
          url: `${process.env.NEXT_PUBLIC_BASEURL}/api/trpc`,
        }),
      ],
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       **/
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: false,
});
