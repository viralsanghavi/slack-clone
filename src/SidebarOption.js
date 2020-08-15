import React from 'react'
import './SidebarOption.css'
import { useHistory } from 'react-router-dom'
import db from './firebase'


export const SidebarOption = ({ addChannelOption, id, Icon, title }) => {
    const history = useHistory()
    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }
    const addChannel = () => {
        const channelName = prompt('Please Enter channel Name')
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }

    }
    return (
        <div className="siderbarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="siderbarOption__icon" />}
            {Icon ?
                (<h3>{title}</h3>) :
                (<h3 className="sidebarOption__channel"> <span className="SidebarOption__hash">#</span>{title}</h3>)}
        </div>
    )
}
