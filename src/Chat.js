import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import db from './firebase'
import Message from './Message'
import ChatInput from './ChatInput'

export const Chat = () => {
    const { roomId } = useParams()
    const [channelDetails, setChannelDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])
    useEffect(() => {
        db.collection('rooms').doc(roomId).onSnapshot(
            snapshot => {
                setChannelDetails(snapshot.data())
            }
        )
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
            .onSnapshot(
                snapshot =>
                    setRoomMessages(snapshot.docs.map(doc => doc.data()))
            )
    }, [roomId])
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">

                        <strong>#{channelDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>

                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                        </p>
                </div>
            </div>
            <div className="char__messages">
                {roomMessages.map(
                    ({ message, timestamp, user, userImage }) =>
                        <Message
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                        />
                )
                }

            </div>
            <ChatInput channelName={channelDetails?.name} channelId={roomId} />
        </div>
    )
}
