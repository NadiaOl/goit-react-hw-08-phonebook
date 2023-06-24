import { ContactForm } from "components/ContactForm/ContactForm"
import Container from "components/Container/Container"
import { Filter } from "components/Filter/Filter"
import css from "./Views.module.css"
import { ContactList } from "components/ContactList/ContactList"

export const ContactsPage = () => {
  return (
<Container>
      <div className={css.phonebook}>
        <h2 className={css.phonebookTitle}>Phonebook</h2>
        <ContactForm />
        <Filter />
        <h3 className={css.phonebookSubTitle}>Contacts</h3>
        <ContactList />
      </div>
</Container>
  )
}