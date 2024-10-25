import "./ContactInfoCard.css";

const ContactInfoCard = () => {
  return (
    <div className="profile-info">
      <div className="contact-image">
        <img src="./contact.jpg" alt="contact" />
      </div>
      <h3 className="profile-name">Mehrnaz Pishyar</h3>
      <p className="profile-title">Frontend Developer</p>
      <p className="profile-description">
      To get in touch with me, please feel free to reach out via the email below or through the contact form. Thank you!
      </p>

      <p className="profile-contact">
        Email:{" "}
        <span className="profile-contact-detail">mpishyar.de@gmail.com</span>
      </p>
    </div>
  );
};

export default ContactInfoCard;
