import About from "./components/about";
import CheckoutPage from "./components/checkout";
import Error from "./components/error";
import Faq from "./components/faq";
import Homepage from "./components/homepage";
import Ourchefs from "./components/ourchefs";
import Signin from "./components/signin";
import Signup from "./components/signup";

export default function Home() {
  return (
    <div>
      <Homepage />
      <CheckoutPage />
      <Ourchefs />
      <Faq />
      <Error />
      <Signup />
      <Signin />
      <About />
    </div>
  );
}
