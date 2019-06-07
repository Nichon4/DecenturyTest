import React from "react";
import ContactList from './contact-list';
import {CLContainer} from "../layouts/containers";
import NewContact from "./new-contact";

export const Container = () => {


  return (
    <CLContainer>
      <NewContact/>
      <ContactList/>
    </CLContainer>
  )
};
