import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="mainsectionhomepage">
      <div className="mainbox1" id="box1">
        <div className="box1pic"></div>
        <h1 className="mainbox1h1">About Typescript</h1>
        <p className="mainbox1p">In the ever-evolving landscape of web development, JavaScript has long stood as the cornerstone language powering dynamic and interactive web applications.</p>
        <Link href={"ReadMoreTS"}>
        <button className="button">Read More</button>
        </Link>
      </div>
      <div className="mainbox1" id="box2">
        <div className="box2pic"></div>
        <h1 className="mainbox1h1">About Typescript</h1>
        <p className="mainbox1p">JavaScript is one of the most influential programming languages in the world. Developed initially by Brendan Eich at Netscape in 1995,</p>
        <Link href={"ReadMoreJS"}>
        <button className="button">Read More</button>
        </Link>
      </div>
      <div className="mainbox1" id="box3">
        <div className="box3pic"></div>
        <h1 className="mainbox1h1">About Phython</h1>
        <p className="mainbox1p">Python is one of the most popular programming languages in the world, and for good reason. It is known for its simplicity, </p>
        <Link href={"ReadMorePHY"}>
        <button className="button">Read More</button>
        </Link>
      </div>
      <div className="mainbox1" id="box4">
        <div className="box4pic"></div>
        <h1 className="mainbox1h1">About C language</h1>
        <p className="mainbox1p">C is a powerful, general-purpose programming language that has been the foundation for many modern programming languages and systems.</p>
        <Link href={"ReadMoreC"}>
        <button className="button">Read More</button>
        </Link>
      </div>
      <div className="mainbox1" id="box5">
      <div className="box5pic"></div>
      <h1 className="mainbox1h1">About C++ language</h1>
      <p className="mainbox1p">C++ is a versatile and powerful programming language that has stood the test of time. From system/software development to game programming,</p>
      <Link href={"ReadMoreClang"}>
      <button className="button">Read More</button>
        </Link>
      </div>
     
      <div className="mainbox1" id="box6">
        <div className="box6pic"></div>
        <h1 className="mainbox1h1">About Java </h1>
        <p className="mainbox1p">Java has been a cornerstone of the programming landscape for over two decades. Renowned for its versatility, reliability, and widespread adoption,</p>
        <Link href={"ReadMoreJava"}>
        <button className="button">Read More</button>
        </Link>
      </div>
      </main>
  )}