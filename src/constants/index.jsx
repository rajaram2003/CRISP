import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpg";
import dish8 from "../assets/dish8.jpg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpg";

import Italian from "../assets/Italian.jpg";
import Chinese from "../assets/Chinese.jpg";
import Mexican from "../assets/Mexican.jpg";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Butter Chicken",
    description: "Creamy, rich curry made with marinated chicken cooked in spiced tomato-based sauce with butter and cream.",
  },
  {
    image: dish2,
    title: "Mutton Kassa",
    description: "Spicy, slow-cooked mutton (goat meat) curry with a thick gravy.",
  },
  {
    image: dish3,
    title: "Biryani",
    description: "Fragrant rice dish layered with marinated meat (usually chicken or goat), spices, and saffron.",
  },
  {
    image: dish4,
    title: "Dahi Pakhala",
    description: "Rice is soaked in water and fermented, but curd (dahi) is added for an extra tangy flavor.",
  },
  {
    image: dish5,
    title: "Tandoori Chicken",
    description: "Chicken is marinated in yogurt and spices, then grilled in a tandoor.",
  },
  {
    image: dish6,
    title: " Matar Paneer",
    description: "Paneer cubes and green peas simmered in a tomato-based curry.",
  },
  {
    image: dish7,
    title: "Samosa",
    description: "Deep-fried, triangular pastries stuffed with a mixture of spiced potatoes and peas.",
  },
  {
    image: dish8,
    title: "Rasagola",
    description: " Traditional sweet dish from Odisha made from cottage cheese and cooked in syrup.",
  },
  {
    image: dish9,
    title: "Rasabali",
    description: "Chhena (cheese) patties soaked in thick, sweetened milk flavored with cardamom.",
  },
  {
    image: dish10,
    title: "Chhena Poda",
    description:
      "Fresh chhena (a type of cottage cheese), sugar, and caramelized crust.",
  },
];

export const ABOUT = {
  header: "Cooking is our art!",
  content:
    "At Crisp, our love for cooking is at the heart of everything we do. We believe great food is more than just a meal—it’s an expression of passion, creativity, and craftsmanship. From our chef’s expertly crafted signature dishes to the welcoming service, every detail is designed to make your dining experience unforgettable. Whether you’re savoring our renowned Mutton Kassa or exploring the bold flavors of our globally inspired menu, each bite is a celebration of culinary excellence. Join us at Crisp, where every dish is a masterpiece waiting to be discovered.",
};

export const MISSION = "Our mission is to provide an unforgettable dining journey filled with delectable dishes and heartwarming experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: Italian,
    title: "Italian",
    description: "Fresh ingredients, rich flavors, classic dishes like pasta and pizza.",
  },
  {
    number: "02.",
    image: Chinese,
    title: "Chinese",
    description: "Diverse flavors, vibrant dishes like stir-fries, dumplings, and noodles.",
  },
  {
    number: "03.",
    image: Mexican,
    title: "Mexican",
    description: "Bold spices, colorful tacos, enchiladas, and rich cultural heritage.",
  },
];

export const REVIEW = {
  name: "Gordon Ramsay",
  profession: "Food Critic",
  content:
    "“As a food critic, my standards are always high. Crisp, with its stylish decor and warm atmosphere, hinted at something special — and it delivered far beyond what I anticipated.”",
};

export const CONTACT = [
  { key: "address", value: "Address: Bhubaneswar, Odisha" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@crisp.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/share/5F4AoGWVhM5Ey7Gj/?mibextid=qi2Omg",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/rajaram_biswal_?igsh=MTAxaTJ4em0wdHAzcA==",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://api.whatsapp.com/send?phone=917854984157&text=Hello",
    icon: <FaWhatsapp fontSize={30} className="hover:opacity-80" />,
  },
];
