import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react"
import Link from "next/link";

export default function Navbar(props){
    const [navbarOpened,setNavbarOpened] = useState(false);
    return(
        <nav>
            <div className="p-3 flex justify-center">
                <Link href="/"><a className="mx-auto text-2xl md:text-3xl" >Resource Tracker</a></Link>
                <span className="text-2xl my-auto lg:hidden" onClick={()=>{setNavbarOpened(!navbarOpened)}}><FontAwesomeIcon icon={["fas",navbarOpened?"times":"bars"]}/></span>
            </div>
            <div className={classNames("navbar-items py-3 lg:py-0 flex flex-col lg:flex-row lg:flex",{"hidden": !navbarOpened})}>
                <IconNavItem href="plasma" icon={["fas","shield-virus"]}>
                    Plasma
                </IconNavItem>
                <IconNavItem href="hospital" icon={["fas","hospital"]}>Hospitals</IconNavItem>
                <IconNavItem href="medicine" icon={["fas","syringe"]}>Medicines</IconNavItem>
                <IconNavItem href="oxygen" icon={["fas","lungs"]}>Oxygen</IconNavItem>
                <IconNavItem href="helpline" icon={["fas","phone"]}>Helplines</IconNavItem>
                
            </div>
        </nav>
    )
}

function IconNavItem({href,icon, children}) {
    return (
        <Link href={href}>
            <div className="navbar-item">

            <a> {icon&& <span><FontAwesomeIcon className="mr-2" icon={icon}/></span> }<span>{children}</span></a>
            </div>
        </Link>
    )
}