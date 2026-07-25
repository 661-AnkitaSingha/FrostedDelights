import ReactDOM from 'react-dom/client'
import { useState } from 'react'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Story from "./components/Story"
import Productcard from "./components/Productcard"
import Cart from './components/Cart'


const flavours = [
  {
    id: 1,
    name: "Vanilla Dream",
    price: 120,
    image: "https://thumbs.dreamstime.com/b/vanilla-ice-cream-sundae-26337973.jpg"
  },
  {
    id: 2,
    name: "Chocolate Blast",
    price: 140,
    image: "https://i.pinimg.com/originals/2f/27/f1/2f27f135fda3557ff7488e177a944d85.jpg"
  },
  {
    id: 3,
    name: "Strawberry Delight",
    price: 130,
    image: "https://img.magnific.com/premium-photo/bowl-strawberry-ice-cream-with-strawberries-table_718585-1858.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    id: 4,
    name: "Mango Magic",
    price: 150,
    image: "https://img.freepik.com/premium-photo/mango-ice-cream-close-up-top-view-sweet-mango-generative-ai_655310-6793.jpg?semt=ais_hybrid"
  },
  {
    id: 5,
    name: "Butterscotch Crunch",
    price: 160,
    image: "https://t4.ftcdn.net/jpg/01/62/00/31/360_F_162003166_EEWFQVHmqDNquaQ5Dnb7ImmhdSevr5uv.jpg"
  },
  {
    id: 6,
    name: "Black Currant",
    price: 170,
    image: "https://media.istockphoto.com/id/807318786/photo/summer-layered-ice-cream-berry-dessert.jpg?s=612x612&w=0&k=20&c=VLEVMiyCfDJ3Uw_NLgpKTPHtvbzUuyPp4KHvEmiUKPw="
  },
  {
    id: 7,
    name: "Pista Royale",
    price: 180,
    image: "https://static.vecteezy.com/system/resources/thumbnails/072/524/732/small/delicious-pistachio-ice-cream-with-pistachio-free-photo.jpg"
  },
  {
    id: 8,
    name: "Kesar Kulfi",
    price: 200,
    image : "https://t3.ftcdn.net/jpg/09/61/01/60/360_F_961016029_QQT03DCNxIzmKbN7b4TLhCalphvvkGH2.jpg"
  },
  {
    id: 9,
    name: "Blueberry Cheesecake",
    price: 220,
    image: "https://bakeorbreak.com/wp-content/uploads/2024/06/blueberry-cheesecake-ice-cream9577-310x350.jpg"
  },
  {
    id: 10,
    name: "Cookies & Cream",
    price: 190,
    image: "https://static.vecteezy.com/system/resources/thumbnails/075/413/751/small/cookies-and-cream-ice-cream-in-a-bowl-photo.jpeg"
  }
];

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (flavour, change) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === flavour.id);
      if (existing) {
        return prevCart
          .map((item) =>
            item.id === flavour.id ? { ...item, qty: item.qty + change } : item
          )
          .filter((item) => item.qty > 0);
      } else {
        return [...prevCart, { ...flavour, qty: 1 }];
      }
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <h2 className='title'>SIGNATURE FLAVOURS</h2>
      <div id='flavours'>
        {flavours.map((flavour) => (
          <Productcard
            key={flavour.id}
            name={flavour.name}
            price={flavour.price}
            image={flavour.image}
            onAddToCart={(change) => addToCart(flavour, change)}
          />
        ))}
      </div>
      <Cart cartItem={cart} />
      <section id='contact'>
        <h2>Contact Us</h2>
        <p>Email : frosteddelights@gmail.com</p>
      </section>
    </>
  )
}

export default App
