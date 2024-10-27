import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    
    <div className="container">

      <h1 className="heading">Get In Touch With Us</h1>

      <h2 className="contact-intro"> We are ready to help you.
          For immediate inquiry or joining, please call us..<br />
          Hyderabad: <span>+91-9951666670</span>,<br /> 
          Pune: <span>+91-9951666671</span> 
      </h2>   



      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-heading">Contact Form</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />



        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
       



      <div className="contact-information">
         <p className="info-intro">Contact Information</p>

         <ul>
            <li>Kukatpally — Hyderabad</li>
            <p>#205, 2nd Floor, Fortune Signature, Near JNTU Metro Station.
                Kukatpally, Hyderabad, Telangana 500085</p>
         </ul>

         <ul>
            <li>Gachibowl — Hyderabad</li>
            <p>2nd Floor, Leeway, BP Raju Marg, Opp. Sarath City Capital Mall,
            Beside Subbayagari Hotel, Laxmi Cyber City, Whitefields, Kondapur, 
            Telangana 500081</p>
         </ul>

         <ul>
            <li>Pune :</li>
            <p>2nd Floor, Sai Sayaji Apartment, 201,(P, Paud Rd, beside VANAZ Metro, above 
               Bata showrrom, Ramkrishna Paramhans Nagar, Kothrud, Pune, Maharashtra 411038</p>
         </ul>

        <ul>
            <li>Phone/Whatsapp : </li>
            <p>+91-9951666670 / +91-6304126766 / +91-9347804375</p>
         </ul>
   
         <ul>
	    <li>Emails :</li>
            <p>For Course details : info@innomatics.in</p>
            <p>For Careers: hr@innomatics.in</p>
         </ul>
    
      </div>
    

    </div>
  );
};

export default Contact;
