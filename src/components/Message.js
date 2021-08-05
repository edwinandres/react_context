import React, { useContext } from 'react'
import CrudContext from '../context/CrudContext'

const Message = ({ }) => {

    const {msg, bgColor} = useContext(CrudContext)

    let styles = {
        padding: "1rem",
        marginBottom:"1rem",
        textAlign:"center",
        backgroundColor: bgColor,
        color:"#fff",
        fontWeight:"bold"
    }

    return (
        <div style={styles}>           
            {/* <p>{msg}</p> */}
            <p dangerouslySetInnerHTML={{__html:msg}}></p>
        </div>
    )
}

export default Message
