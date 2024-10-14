import "./ContactInfoCard.css";


const ContactInfoCard = () => {
  return (
    <div className="profile-info">
    <h3 className="profile-name">Mehrnaz Pishyar</h3>
    <p className="profile-title">Front Developer</p>
    <p className="profile-description">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
      ipsam autem cumque, accusantium dicta odio.
    </p>
   
    <p className="profile-contact">
      Email: <span className="profile-contact-detail">mpishyar.de@gmail.com</span>
    </p>
  </div>
  
   
  );
};

export default ContactInfoCard;
