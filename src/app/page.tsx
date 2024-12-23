import About from "./components/about";
import Blogdeatials from "./components/blogdeatials";
import Bloglist from "./components/bloglist";
import Cart from "./components/cart";
import CheckoutPage from "./components/checkout";
import Error from "./components/error";
import Faq from "./components/faq";
import Homepage from "./components/homepage";
import Menu from "./components/menu";
import Ourchefs from "./components/ourchefs";
import Shopdetails from "./components/shopdetails";
import Shoplist from "./components/shoplist";
import Signin from "./components/signin";
import Signup from "./components/signup";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Menu />
      <Shoplist />
      <Shopdetails />
      <Cart />
      <Bloglist />
      <Blogdeatials />
      <About />
      <Ourchefs />
      <CheckoutPage />
      <Faq />
      <Error />
      <Signup />
      <Signin />
      
    </div>
  );
}
