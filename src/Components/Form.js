import React from "react";
import PropTypes from "prop-types";
class Form extends React.Component
  {
    constructor (props)
      {
        super (props);
        this.OnChange=this.OnChange.bind (this);
        this.OnSubmit=this.OnSubmit.bind (this);
      }
    static propTypes={AddContact: PropTypes.func};
    state={name: "",
           phone: ""};
    OnChange (Event)
      {
        this.setState ({[Event.target.name]: Event.target.value});
      }
    OnSubmit (Event)
      {
        Event.preventDefault ();
        this.props.AddContact ({...this.state});
        this.setState ({name: "",
                        phone: ""});
      }
    render ()
      {
        return (<div>
                  <form onSubmit={this.OnSubmit}>
                    <input name={"name"} id={"name"} value={this.state.name} onChange={this.OnChange} placeholder={"Enter A Name"}/>
                    <br/>
                    <input name={"phone"} id={"phone"} value={this.state.phone} onChange={this.OnChange} placeholder={"Enter A Phone"}/>
                    <button>Add</button>
                  </form>
                </div>);
      }
  }
export default Form;