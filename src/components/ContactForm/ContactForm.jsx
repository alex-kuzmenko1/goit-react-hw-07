import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" name="name" required placeholder="Name" className={styles.input} />
      <input type="tel" name="number" required placeholder="Number" className={styles.input} />
      <button type="submit" className={styles.button}>Add contact</button>
    </form>
  );
};

export default ContactForm;