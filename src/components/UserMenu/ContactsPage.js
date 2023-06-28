import { ContactForm } from "components/ContactForm/ContactForm"
import Container from "components/Container/Container"
import { Filter } from "components/Filter/Filter"
import css from "./Views.module.css"
import { ContactList } from "components/ContactList/ContactList"
import { CircleLoader  } from "react-spinners";
import { useSelector } from "react-redux"
import { selectIsLoading } from "tasks/selectors"

export const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <div className={css.phonebook}>
        <h2 className={css.phonebookTitle}>Phonebook</h2>
        <ContactForm />
        <Filter />
        <h3 className={css.phonebookSubTitle}>{isLoading ? <CircleLoader  color="#b61a77" size={32}/> : <p>Contacts</p>}</h3>
        <ContactList />
      </div>
    </Container>
  )
}