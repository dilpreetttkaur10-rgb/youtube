import type { AppProps } from "next/app";
import { UserProvider } from "@/lib/AuthContent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}