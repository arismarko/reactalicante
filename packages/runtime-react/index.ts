import { createRuntimeBindings } from "@leanjs/react";
import { createRuntime } from "@alicante-microfrontends/runtime-shared";

export { createRuntime };

export const {
  useGetter,
  useSetter,
  useLoading,
  useError,
  useRuntime,
  HostProvider,
} = createRuntimeBindings(createRuntime);
