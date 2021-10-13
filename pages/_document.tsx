import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="stylesheet" href="css/bootstrap.min.css" />
            <link rel="stylesheet" href="css/font-awesome.min.css" />
            <link rel="stylesheet" href="css/bootstrap.offcanvas.min.css" />
            <link rel="stylesheet" href="css/bootstrap-responsive-tabs.css" />
            <link rel="stylesheet" href="css/bootstrap-select.min.css" />
            <link rel="stylesheet" href="css/featherlight.min.css" />
            <link rel="stylesheet" href="css/hover.min.css" />
            <link rel="stylesheet" href="css/owl.carousel.min.css" />
            <link rel="stylesheet" href="css/core.css" />

            <link rel="stylesheet" href="css/style.css" />
          </head>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="js/jquery-3.2.0.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/bootstrap-select.min.js"></script>
          <script src="js/featherlight.min.js"></script>
          <script src="js/bootstrap.offcanvas.min.js"></script>
          <script src="js/bootstrap-responsive-tabs.min.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/main.js"></script>
        </body>
      </Html>
    );
  }
}
