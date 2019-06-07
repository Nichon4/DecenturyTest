import React from "react";
import {connect} from "react-redux";


const mapStateToProps = ({contacts, loading, status, editContact}) => ({
  contacts: contacts,
  loading: loading,
  status: status,
  editContact: editContact
});

const mapDispatchToProps = (dispatch) => ({
  createContact: (contact) => dispatch({type: "CREATE_CONTACT", payload: contact}),
  updateContact: (contact) => dispatch({type: "UPDATE_CONTACT", payload: contact}),
  cancelEdit: () => dispatch({type: "CANCEL_EDIT"})
});

const NewContact = (props) => {

  const formSubmit = (e) => {
    e.preventDefault();
    const {name, phone, email} = e.target;
    const contact = {
      name: name.value,
      phone: phone.value,
      email: email.value
    };
    console.log(contact);
    props.createContact(contact)
  };

  const editContact = (e) => {
    e.preventDefault();
    const {id, name, phone, email} = e.target;
    const contact = {
      id: id.value,
      name: name.value,
      phone: phone.value,
      email: email.value
    };
    console.log(contact);
    props.updateContact(contact)
  };

  if (props.editContact === null) {
    return (
      <>
        <span>Create contact</span>
        <form onSubmit={formSubmit}>
          <input type="text" id="name" defaultValue="" placeholder="Name"/>
          <input type="phone" id="phone" defaultValue="" placeholder="Phone"/>
          <input type="email" id="email" defaultValue="" placeholder="E-mail"/>
          <input type="submit" value="Ok"/>
          <input type="reset" value="clear"/>
        </form>
      </>
    )
  } else {
    const {id, name, phone, email} = props.editContact;
    return (
      <>
        <span>Edit contact</span>
        <form onSubmit={editContact} onReset={props.cancelEdit}>
          <input type="hidden" id="id" value={id}/>
          <input type="text" id="name" defaultValue={name}/>
          <input type="phone" id="phone" defaultValue={phone}/>
          <input type="email" id="email" defaultValue={email}/>
          <input type="submit" value="Ok"/>
          <input type="reset" value="cancel"/>
        </form>
      </>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);
