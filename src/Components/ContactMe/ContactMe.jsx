import "./ContactForm/ContactForm";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactLeft = () => {
  return (
    <div >
      <div>
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


