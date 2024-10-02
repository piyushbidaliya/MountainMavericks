import React, { useRef} from 'react';
import './contact.css';
import emailjs from "@emailjs/browser";
import mav from '../../asset/banner1.jpeg'

const Contact = () => {
  const form = useRef();

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_foml2t6",
        "template_3krts9v",
        form.current,
        "CM1c9pzKtZLOPFLye"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent");
          resetForm();
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message");
        }
      );
  };

  return (
    <div className='contact-margin'>
      <div className='contact-loc'>
        <img src={mav} alt="mountain maverick" loading="lazy"/>
      </div>

      <div className='contact-heading'>
        <h1>Contact Us</h1>
      </div>
            <div className="contact-us">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
  );
};

export default Contact;
