import { Formik, Form, Field } from 'formik';
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={(values, { resetForm }) => {
          onAddContact(values.name, values.number);
          resetForm();
        }}
      >
        <Form className={styles.formContainer}>
          <label htmlFor="nameField" className={styles.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id="nameField"
            className={styles.input}
          />

          <label htmlFor="phoneField" className={styles.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id="phoneField"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;