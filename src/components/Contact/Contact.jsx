import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <span>{contact.name}: {contact.number}</span>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Видалити
      </button>
    </div>
  );
};

export default Contact;
