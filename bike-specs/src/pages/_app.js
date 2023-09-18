import React from "react";
import RootLayout from "../app/layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // Add useEffect to fix the hydration issue
  useEffect(() => {
    // Remove the server-rendered styles to prevent the mismatch
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;