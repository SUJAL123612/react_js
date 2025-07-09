import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div id="home">
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
    <h1>Sujal Chalke</h1>
    </div>
    <div id="about">
    <h1>Graduation : Completed</h1>
    </div>
    <p>College Name: Mulund College OF Commerce(MCC) </p>
    </>
  );
}
