import { Host } from "@leanjs/next";
import React from "react";
import Head from "next/head";
import { useGetter, useSetter } from "@alicante-microfrontends/runtime-react";

const Home = () => {
  const locale = useGetter("locale");
  const setLocale = useSetter("locale");

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>{locale === "en" ? `🇬🇧 Hello Nextjs` : `🇪🇸 Hola Nextjs`}</h1>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <hr />
      <Host app={{ packageName: "@alicante-microfrontends/react1" }} />
      <Host app={{ packageName: "@alicante-microfrontends/react2" }} />
    </>
  );
};

export default Home;
