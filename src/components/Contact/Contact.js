
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import css from './Contact.module.css';


export const Contact= ({contact}) =>{ 
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id))

    return (
        <div className={css.contactListConteiner}>
            <div className={css.contactsConteiner}>
                <p className={css.userName}>{contact.name}: </p>
                <p>{contact.phone}</p>
            </div>
            <button className={css.listButton} type="button" onClick={handleDelete}> 
                <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m8 8 14 14M8 22 22 8" stroke="#000" strokeWidth="2"/>
                </svg>
            </button>
        </div>
    )
}