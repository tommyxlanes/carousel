import Image from "next/image";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
    </>
  );
}
