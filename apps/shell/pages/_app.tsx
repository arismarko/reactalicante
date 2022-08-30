import { HostProvider, createRuntime } from "@alicante-microfrontends/runtime-react";

const runtime = createRuntime();

export default function MyApp({ Component, pageProps }) {
  return (
    <HostProvider origin="http://localhost:33000" runtime={runtime}>
      <Component {...pageProps} />
    </HostProvider>
  );
}
