import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("Required"),
    number: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
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
          <ErrorMessage name="name" component="div" className={styles.error} />

          <label htmlFor="phoneField" className={styles.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id="phoneField"
            className={styles.input}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
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