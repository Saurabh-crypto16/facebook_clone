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
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user},dispatch]=useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL}
            title={user.displayName}/>
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
