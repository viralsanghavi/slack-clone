import React, { useState } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import { SidebarOption } from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import { useEffect } from 'react'
import db from './firebase'
import { useStateValue } from './StateProvider'

export const Sidebar = () => {
    const [channels, setChannels] = useState([])
    const [{ user }] = useStateValue()
    useEffect(() => {
        // Run Once
        db.collection('rooms').onSnapshot(
            snap => {
                setChannels(snap.docs.map(doc => ({ id: doc.id, name: doc.data().name })))
            }
        )
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">

                    <h2>Learning Engineer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <hr />
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />

            <hr />
            <SidebarOption Icon={InsertCommentIcon} addChannelOption title="Add Channel" />

            {/* Connect to db and list all the changes */}
            {channels.map(channel => <SidebarOption key={channel.id} id={channel.id} title={channel.name} />)}
        </div>
    )
}
