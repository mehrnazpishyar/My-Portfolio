import "./ContactForm/ContactForm";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import './ContactMe.css'

const ContactLeft = () => {
  return (
    <div className="contact-main">
      <div id="contact" className="content-title">
      <h2>Contact with Me</h2>
      </div>
      <div className="contact-container">
        <ContactInfoCard />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactLeft;


