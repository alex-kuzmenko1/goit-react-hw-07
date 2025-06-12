import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={styles.list}>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;