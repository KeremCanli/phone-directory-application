import React from "react";
import "./List.css";
class List extends React.Component
  {
    state={FilterText: ""};
    OnChange=(Event)=>
      {
        this.setState ({FilterText: Event.target.value});
      }
    render ()
      {
        const FilteredContacts=this.props.Contacts.filter (Contact=>{return Contact.name.toLowerCase ().indexOf (this.state.FilterText.toLocaleLowerCase ())!==-1 || Contact.phone.indexOf (this.state.FilterText)!==-1});
        return (<div className={"ListArea"}>
                  <input name={"filter"} id={"filter"} value={this.state.FilterText} onChange={this.OnChange} placeholder={"Filter By Name Or Phone"}/>
                  <ul className={"List"}>
                    {FilteredContacts.map (Contact=>{return (<li key={Contact.phone}>
                                                                  <span className={"Name"}>{Contact.name}</span>
                                                                  <span className={"Phone"}>{Contact.phone}</span>
                                                                  <span className={"ClearFix"}></span>
                                                             </li>);})}
                  </ul>
                </div>);
      }
  }
export default List;