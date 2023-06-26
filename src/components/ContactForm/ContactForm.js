import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "tasks/selectors";
import { addContact } from "tasks/operations";
import css from './ContactForm.module.css';
import { toast } from "react-hot-toast";

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);


    const handleSubmit = event => {
        event.preventDefault();
        const formName = event.target.elements.name.value;
        const formNumber = event.target.elements.number.value;
        if (contacts.find(contact => contact.name.toLowerCase() === formName.toLowerCase())) {
            return toast.error(`${formName} is already in contacts`);        } 
        dispatch(addContact({name: formName, number: formNumber}));
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
            <button className={css.addButton} name='submit' type="submit">Add contact</button>
        </form>
    );
}