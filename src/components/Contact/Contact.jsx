import React from "react";
import "./Contact.css";
import msg_icon from "../../assests/msg-icon.png";
import mail_icon from "../../assests/mail-icon.png";
import phone_icon from "../../assests/phone-icon.png";
import location_icon from "../../assests/location-icon.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e89fd66a-fe07-4708-90e1-bcd8052964fd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={phone_icon} alt="" /> +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your mobile number" required />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email id" required />
          <label>Write a message to here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={6}
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;