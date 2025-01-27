import * as React from "react";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface IconButtonProps {
    iconName : "login" | "join" | "mypage" | "support"
    label : string
}

export default function IconButtons({ iconName, label } : IconButtonProps) {
    const renderIcon = () => {
        switch (iconName) {
            case "login":
                return <LockIcon/>
            case "join":
                return <PersonAddAlt1Icon/>
            case "mypage":
                return <PersonIcon/>
            case "support":
                return <SupportAgentIcon/>
            default:
                return <LockIcon/>
        } 
    }

    return (
        <li className="header-btn">
            <IconButton aria-label={label}>
                {renderIcon()}
            </IconButton>
            {label && <span>{label}</span>}
        </li>
    );
}
