import PropTypes from "prop-types";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <div className="item">
          <span role="img" aria-label="user">
            👤
          </span>
          <p>{contact.name}</p>
        </div>
        <div className="item">
          <span role="img" aria-label="phone">
            📞
          </span>
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        className="delete-button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
