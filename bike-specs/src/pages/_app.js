import React from "react";
import Layout from "../app/layout"; // Import your custom Layout component
import RootLayout from "../app/layout";

function MyApp({ Component, pageProps }) {
  // Determine the layout based on the page component

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;