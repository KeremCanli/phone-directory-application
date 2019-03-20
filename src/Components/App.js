import React from "react";
import Contacts from "./Contacts.js";
import "../App.css";
class App extends React.Component
  {
    constructor (props)
      {
        super (props);
        this.AddContact=this.AddContact.bind (this);
      }
    state={Contacts: [{name: "Kerem",
                       phone: "123456789"},
                      {name: "Hasan",
                       phone: "112233445"},
                      {name: "Veli",
                       phone: "566778899"}]};
    AddContact (Contact)
      {
        const {Contacts}=this.state;
        Contacts.push (Contact);
        this.setState ({Contacts: Contacts});
      }
    render()
      {
        return (<div className="App">
                  <Contacts Contacts={this.state.Contacts} AddContact={this.AddContact}/>
                </div>);
      }
  }
export default App;