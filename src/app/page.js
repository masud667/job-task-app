import Gallery from "./Components/gallery";
import Navbar from "./Components/Navbar";


export default function Home() {
  return (
   <div>
     <Navbar></Navbar>
   <main>
    <Gallery />
   </main>
   </div>
  );
}
