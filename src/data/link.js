// import BMIForm from "../components/home/BMIForm.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import NotFound from "../components/NotFound.jsx";
import InfoBMI from "../components/InfoBMI.jsx";
import UnderWeight from "../components/diet/Underweight.jsx";
import Normal from "../components/diet/Normal.jsx";
import OverWeight from "../components/diet/Overweight.jsx";
import Obese from "../components/diet/Obese.jsx";
import Context from "../Context.js";

const link = [
  {
    link: "/",
    title: "Home",
    component: Context,
    isLink: true,
    isExact: true
  },
  {
    link: "/infobmi",
    title: "What is the BMI ?",
    component: InfoBMI,
    isLink: true,
    isExact: true
  },
  {
    link: "/underweight",
    component: UnderWeight,
    isLink: false,
    isExact: true
  },
  {
    link: "/normal",
    component: Normal,
    isLink: false,
    isExact: true
  },
  {
    link: "/overweight",
    component: OverWeight,
    isLink: false,
    isExact: true
  },
  {
    link: "/obese",
    component: Obese,
    isLink: false,
    isExact: true
  },
  {
    link: "/contact",
    title: "Contact",
    component: Contact,
    isLink: true,
    isExact: false
  },
  {
    link: "/about",
    title: "About",
    component: About,
    isLink: true,
    isExact: false
  },
  {
    link: "/404",
    title: "404",
    component: NotFound,
    isLink: false,
    isExact: true
  }
];

export default link;
