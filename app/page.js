import Image from "next/image";
import logo from "./images/logo.jpg"
import GetCharacters from "./characters/page";

export default function Home() {
  return (
    <div>
      <h1>Rick and Morty page</h1>
      <Image src={logo} height={300} width={500} alt="Rick And Morty Logo"/>
      <GetCharacters/>
    </div>
  );
}
