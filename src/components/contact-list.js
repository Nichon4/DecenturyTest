import React from "react";
import {FETCH_ALL_CONTACTS} from "../actions";
import {connect} from "react-redux";
import {Contact} from "../layouts/contact";

const contact = {name: 'Vladislav', phone: '+7 543 7979', email: 't5456st@qwe.com'};
const contactUp = {id: "zam1y8", name: "Vladislav",
  phone: '+7 543 7979', email: 't5456st@qwe.com'};

const mapStateToProps = ({contacts, loading, status}) => ({
  contacts: contacts,
  loading: loading,
  status: status
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllContacts: () => dispatch(FETCH_ALL_CONTACTS()),
  createContact: () => dispatch({type: "CREATE_CONTACT", payload: contact}),
  updateContact: () => dispatch({type: "UPDATE_CONTACT", payload: contactUp}),
  deleteContact: (id) => dispatch({type: "DELETE_CONTACT", payload: id}),
  editContact: (contact) => dispatch({type: "EDIT_CONTACT", payload: contact})
});


class ContactList extends React.Component {


  componentDidMount() {
    this.props.fetchAllContacts()
  }

  render() {
    const contactList = Object.values(this.props.contacts)
      .filter((contact) => contact)
      .map(
      (contact) => <Contact key={contact.id} data={contact}
                            editAction={this.props.editContact}
                            deleteAction={this.props.deleteContact} />
    );
    console.log(this.props.status);
    return (
      <>
        {contactList}
        <span>status: {this.props.status.toString()}</span>
      </>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);