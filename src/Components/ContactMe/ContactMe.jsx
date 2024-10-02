import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
            <ContactInfoCard 
            iconUrl = './email.png'
            text='mpishyar.de@gmail.com'
            />
            <ContactInfoCard 
            iconUrl = './linkedin.png'
            text='https://www.linkedin.com/in/mehrnaz-pishyar'
            />
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
    </section>
  );
};

export default ContactMe;
