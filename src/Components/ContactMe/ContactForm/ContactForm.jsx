import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css";

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bwkc4u7', 'template_abe0qvd', form.current, {
        publicKey: 'qvICHaqRSY6V5wHZq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="from_name" placeholder="Your Name" />
        </div>
        <input type="text" name="form_email" placeholder="Email" />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows={3}
        ></textarea>
        <input className='submit-btn' type="submit" value="send" />
      </form>
    </div>
  );
};

export default ContactForm;
