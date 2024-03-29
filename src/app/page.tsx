import Featured from "@/components/Featured";
import Slider from "@/components/Slider";
import Offer from "@/components/Offer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  );
}
