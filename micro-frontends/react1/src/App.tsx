import React from "react";
import { useGetter } from "@alicante-microfrontends/runtime-react";

export function App() {
  const locale = useGetter("locale");

  return (
   <h2>
      {locale === "en" ? `🇬🇧 Hello micro-frontend` : `🇪🇸 Hola  micro-frontend 1`}{" "}
      react1
    </h2>
  );
}
