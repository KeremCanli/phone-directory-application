import React from "react";
import PropTypes from "prop-types";
import List from "./List.js";
import Form from "./Form.js";
const Contacts=(props)=>
  {
    return (<div>
              <List Contacts={props.Contacts}/>
              <Form AddContact={props.AddContact}/>
            </div>);
  };
Contacts.propTypes={Contacts: PropTypes.array.isRequired,
                    AddContact: PropTypes.func};
export default Contacts;