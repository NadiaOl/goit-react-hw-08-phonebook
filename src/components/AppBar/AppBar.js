import {ContactForm} from '../ContactForm/ContactForm';
import {ContactList} from '../ContactList/ContactList';
import {Filter} from '../Filter/Filter'
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <div className={css.phonebook}>
      <h2 className={css.phonebookTitle}>Phonebook</h2>
      <ContactForm />
      <Filter />
      <h3 className={css.phonebookSubTitle}>Contacts</h3>
      <ContactList />
    </div>
  )
}
