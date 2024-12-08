import Image from "next/image";
import Frame1 from "./Component/Frame1";
import Header from "./Component/Header";
import Rectangle from "./Component/Rectangle";
import Rectangle3 from "./Component/Rectangle3";
import Arrival from "./Component/Arrival";
import Card from "./Component/Card";
import Style from "./Component/Style";
import Happ from "./Component/Happ";
import Test from "./Component/Test";
import Footer from "./Component/Footer";




export default function Home() {
  return (
    <div>
      <Frame1 />
      <Header />
      <Rectangle />
      <Rectangle3 />
      <Arrival />
      <Card />
      <Style />
      <Happ />
      <Test />
      <Footer />
    </div>
  );
}
