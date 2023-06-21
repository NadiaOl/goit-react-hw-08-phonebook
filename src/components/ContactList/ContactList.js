
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { selectContacts, selectError, selectFilter, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import css from './ContactList.module.css';

export const ContactList = () =>{ 
    const items = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const filteredContactsList = useSelector(selectFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const filteredContacts = items.filter(contact =>
        contact.name.toLowerCase().includes(filteredContactsList.toLowerCase())
    );

    const visibleContacts = filteredContactsList ? filteredContacts : items

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {visibleContacts && <ul className={css.contactLists}>
                {visibleContacts.map((contact) =>
                    <li className={css.contactListItem}
                        key={contact.id}>
                        <Contact contact={contact}/>
                    </li>
                )}
            </ul>}
        </div>

    )
}