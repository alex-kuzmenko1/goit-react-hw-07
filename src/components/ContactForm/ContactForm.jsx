import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="name" required placeholder="Ім’я" />
      <input type="tel" name="number" required placeholder="Номер" />
      <button type="submit">Додати контакт</button>
    </form>
  );
};

export default ContactForm;
