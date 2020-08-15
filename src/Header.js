import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useStateValue } from './StateProvider'

export const Header = () => {
    const [{ user }] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar" alt={user?.photoURL} src={user?.displayName} />
                <AccessTimeIcon />
            </div>

            <div className="header__center">
                <SearchIcon />
                <input placeholder="Search" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>

        </div>
    )
}
