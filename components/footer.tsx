import Image from "next/image"
import footPic3 from "../src/app/images/footPic3.png"
import footPic4 from "../src/app/images/footPic4.jpeg"
import linkedicon from "../src/app/images/linkedicon.png"
import footPic1 from "../src/app/images/footPic1.png"

export default function Footer(){
return (
    <footer>
        <div className="mainSecFoot">
            <p>Follow Us :</p>
            <a href="https://github.com/student-Rao?tab=repositories"><Image src={footPic3} alt="" id="footlogopic"/></a>
            <a href="https://www.instagram.com/raowakeel895/"><Image src={footPic4} alt="" id="footlogopic"/></a>
            <a href="https://www.facebook.com/profile.php?id=100087208187542"><Image src={footPic1} alt="" id="footlogopic"/></a>
            <a href="https://www.linkedin.com/in/rao-wakeel-445847318/"><Image src={linkedicon} alt="" id="footlogopic" /></a>

        </div>
        <div className="copyright">
            <p>&CopyRight:Raoblog.com,All Right Reserved</p>
        </div>
    </footer>
)
}