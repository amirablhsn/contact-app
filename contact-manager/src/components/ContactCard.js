import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {

    const { id, name, email, number } = props.contact;
    return(
        <div className="item">
                <img className="ui user default image"
                src={user} alt="user" style={{width: '35px'}}/>
                <div className="content" >
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    <div>{number}</div>
                </div>
                <i className="trash alternate outline icon" 
                style={{color:"red", marginTop: "7px", float: "right"}}
                onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    );
};

export default ContactCard;