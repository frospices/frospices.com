import type { AppProps } from "next/app";

import ThemeProvider from "../components/ThemeProvider";
import Body from "../components/Body";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaitingList from "../components/WaitingList";
import FeatureFlagsProvider from "../contexts/featureFlags";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FeatureFlagsProvider>
      <ThemeProvider>
        <Header />
        <Body>
          <Component {...pageProps} />
        </Body>
        <WaitingList />
        <Footer />
      </ThemeProvider>
    </FeatureFlagsProvider>
  );
}
