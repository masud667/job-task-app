
import Gallery from "./Components/gallery";
import Hero from "./Components/hero";
import Navbar from "./Components/Navbar";


export default function Home() {
  return (
   <div>
     <Navbar></Navbar>
   <main>
    <Hero />
    <Gallery />
   </main>
   </div>
  );
}
