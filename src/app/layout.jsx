import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import Script from "next/script";

export const metadata = {
  title: "Let's Rent A Car",
  description:
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  icons: "../assets/logo.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="../assets/css/open-iconic-bootstrap.min.css"
        />
        <link rel="stylesheet" href="../assets/css/animate.css" />

        <link rel="stylesheet" href="../assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="../assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="../assets/css/magnific-popup.css" />

        <link rel="stylesheet" href="../assets/css/aos.css" />

        <link rel="stylesheet" href="../assets/css/ionicons.min.css" />

        <link rel="stylesheet" href="../assets/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="../assets/css/jquery.timepicker.css" />

        <link rel="stylesheet" href="../assets/css/flaticon.css" />
        <link rel="stylesheet" href="../assets/css/icomoon.css" />
        <link rel="stylesheet" href="../assets/css/style.css" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />

        {/* jQuery ve diğer bağımlı kütüphaneler */}
        <Script src="../assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script
          src="../assets/js/jquery-migrate-3.0.1.min.js"
          strategy="beforeInteractive"
        />
        <Script src="../assets/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="../assets/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="../assets/js/jquery.easing.1.3.js" strategy="lazyOnload" />
        <Script
          src="../assets/js/jquery.waypoints.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="../assets/js/jquery.stellar.min.js"
          strategy="lazyOnload"
        />
        <Script src="../assets/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script
          src="../assets/js/jquery.magnific-popup.min.js"
          strategy="lazyOnload"
        />
        <Script src="../assets/js/aos.js" strategy="lazyOnload" />
        <Script
          src="../assets/js/jquery.animateNumber.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="../assets/js/bootstrap-datepicker.js"
          strategy="lazyOnload"
        />
        <Script
          src="../assets/js/jquery.timepicker.min.js"
          strategy="lazyOnload"
        />
        <Script src="../assets/js/scrollax.min.js" strategy="lazyOnload" />

        {/* Google Maps API */}
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"
          strategy="lazyOnload"
        />
        {/* <Script src="../assets/js/google-map.js" strategy="lazyOnload" /> */}

        {/* Ana script */}
        <Script src="../assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
