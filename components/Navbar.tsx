import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const Navbar = () => {

    const handlechange = () => {

    }
    return (
        <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image
                    width={74}
                    height={30} // Set an appropriate height
                    src="/hilink-logo.svg"
                    alt="Hilink Logo"
                />
            </Link>

            <ul className="hidden lg:flex gap-12 h-full">
                {NAV_LINKS.map((link) => (
                    <li key={link.key}>
                        <Link className=" pb-1 hover:font-bold transition-all cursor-pointer regular-16 text-grey-50 flexCenter  " href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="hidden lg:flexCenter  ">
                <Button
                    type="button"
                    title="Login"
                    icon='public/user.svg'
                    variant="btn-dark-greeb"
                />
            </div>
            <Image
                className="inline-block cursor-pointer"
                src="/menu.svg"
                height={32}
                width={32}
                alt="menu"
            />
        </nav>
    );
};

export default Navbar;
