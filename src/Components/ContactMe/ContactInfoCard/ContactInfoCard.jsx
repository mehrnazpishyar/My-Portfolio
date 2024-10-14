import "./ContactInfoCard.css";
import { CgMail } from "react-icons/cg";

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={<CgMail /> }alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
