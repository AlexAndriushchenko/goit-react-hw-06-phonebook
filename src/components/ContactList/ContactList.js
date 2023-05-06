import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <div>
      <ul className={css.contact_list}>
        {getVisibleContacts().map(({ id, name, number }) => (
          <li key={id} className={css.contact_item}>
            <p className={css.contact_text}>
              {name} {number}
            </p>
            <button
              className={css.contact_delbtn}
              type="button"
              onClick={onDeleteContact.bind(this, id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
