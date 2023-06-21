import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)

    const handleSubmit = event => {
        event.preventDefault();
        const formName = event.target.elements.name.value;
        const formNumber = event.target.elements.number.value;
        if (contacts.find(contact => contact.name.toLowerCase() === formName.toLowerCase())) {
            return  alert(`${formName} is already in contacts`);
        } 
        dispatch(addContact({name: formName, phone: formNumber}));
        event.target.reset();
    }
    return (
        <form className={css.phonebookForm} onSubmit={handleSubmit}>
            <label className={css.phonebookLable}>Name
                <input className={css.phonebookInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </label>
            <label className={css.phonebookLable}>Phone
                <input className={css.phonebookInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required />
            </label>
            <button className={css.addButton} type="submit">Add contact</button>
        </form>
    );
}