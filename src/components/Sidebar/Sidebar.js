import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatIcon from '@material-ui/icons/Chat';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://www.google.com/search?q=coding+image&sxsrf=ALeKk03mfSkVP7ffr3_dlnZb19ax6vYC8Q:1610096076779&tbm=isch&source=iu&ictx=1&fir=sS83SoEFm6qdyM%252C1OxJcp-rH_ccwM%252C_&vet=1&usg=AI4_-kRuKCg5DGEMwY4F6PX7Magg3Ey1UQ&sa=X&ved=2ahUKEwioiNel-4vuAhW-zjgGHYgjAF8Q9QF6BAgIEAE#imgrc=sS83SoEFm6qdyM"
            title="Saurabh Prakash"/>
            <SidebarRow Icon={LocalHospitalIcon}
            title="COVID-19 info Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="MArketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>
        </div>
    )
}

export default Sidebar
