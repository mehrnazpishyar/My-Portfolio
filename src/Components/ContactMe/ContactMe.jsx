import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
        <div className="contact-info" style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={<CgMail />} />
          <ContactInfoCard iconUrl={<FaGithub />} />
          <ContactInfoCard iconUrl={<FaLinkedin />} />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
