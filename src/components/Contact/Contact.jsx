import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span>{contact.name}: {contact.number}</span>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;