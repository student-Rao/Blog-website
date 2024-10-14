import Link from "next/link"
export default function Header(){
    return (
        <header className="navbar">
            <ul className="nav-button">
               <Link href={"/"}>
                <li>Home</li>
                </Link>
                <Link href={"contact-us"}>
                <li>Contact Us</li>
                </Link>

            </ul>

        </header>
    )
}