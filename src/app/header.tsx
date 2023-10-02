"use client"
import sizeMe from "react-sizeme";
import DesktopHeader from "@/app/features/desktopHeader";
import MobileHeader from "@/app/features/mobileHeader";

interface HeaderProps {
    size: Size
}

interface Size {
    width: number,
    height: number
}

function Header({size}: HeaderProps) {
    return (
        <div>
            {size.width > 390 ? <DesktopHeader/> : <MobileHeader/>}
        </div>
    )
}

export default sizeMe({monitorWidth: true})(Header);