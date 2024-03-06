import "./contact.scss";
import { useState } from "react";
import Address from "../Address/Address";
import Socials from "../Socials/Socials";
import Button from "../Button/Button";
import resume from "../../assets/resume.pdf";
import Download from "../../assets/download.svg?react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    yourName: "",
    yourEmail: "",
  });
  const [submitStatus, setSubmitStatus] = useState({status: Boolean, message: ""});
  const [isLoading, setIsLoading] = useState(false);
  const serviceId = import.meta.env.VITE_EMAILJS_GMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const key = e.target.name;
    setFormData((prev) => {
      return { ...prev, [key]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.yourName.length > 0 ||
      formData.yourEmail.length > 0 ||
      e.nativeEvent.submitter.className === "nice-try-field"
    ) {
      return;
    }

    setIsLoading(true);
    emailjs
      .send(serviceId, templateId, formData, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          setSubmitStatus({status: true, message: "Your message has been sent successfully!"});
          setIsLoading(false);
        },
        (err) => {
          setSubmitStatus({status: false, message: "Error sending message, please try again later."});
          setIsLoading(false);
        }
      );
  };
  return (
    <div className="contact-me spacing">
      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>
        <div className="content flex">
          <div className="contact-details">
            <div className="address-wrap">
              <h5 className="base font-display">Address</h5>
              <Address />
            </div>
            <div className="follow-me">
              <h5 className="base font-display">Follow me</h5>
              <Socials />
            </div>
            <div className="download-cv">
              <Button>
                <a
                  href={resume}
                  download="ABRERA, REIN, D. - Resume"
                  className="flex items-center"
                >
                  Download my CV <Download />
                </a>
              </Button>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="flex row">
                <div className="your-name">
                  <label className="base" htmlFor="name">
                    Your name
                  </label>
                  <input
                    onChange={handleChange}
                    className="base"
                    type="text"
                    name="name"
                    value={formData.name}
                    required={true}
                  />
                </div>
                <div className="your-email">
                  <label className="base" htmlFor="email">
                    Your email
                  </label>
                  <input
                    onChange={handleChange}
                    className="base"
                    type="email"
                    name="email"
                    value={formData.email}
                    required={true}
                  />
                </div>
              </div>
              <div className="your-message">
                <label className="base" htmlFor="message">
                  Your message
                </label>
                <textarea
                  onChange={handleChange}
                  className="base"
                  name="message"
                  row="6"
                  value={formData.message}
                  required={true}
                />
              </div>
              <label className="nice-try-field" htmlFor="yourName"></label>
              <input
                onChange={handleChange}
                className="nice-try-field"
                autoComplete="off"
                type="text"
                id="name"
                name="yourName"
                value={formData.yourName}
                placeholder="Your name here"
              />
              <label className="nice-try-field" htmlFor="yourEmail"></label>
              <input
                onChange={handleChange}
                className="nice-try-field"
                autoComplete="off"
                type="email"
                id="email"
                name="yourEmail"
                value={formData.yourEmail}
                placeholder="Your e-mail here"
              />
              <button type="submit" className="nice-try-field">
                Submit
              </button>
              {!submitStatus.message.length > 0 && (
                <Button type="submit" customClass={isLoading ? "loading" : ""}>
                  {isLoading && <span className="loader" />}Submit
                </Button>
              )}
              <div className={`status-message ${submitStatus.status ? "success" : "error"}`}>
                <span className="base">{submitStatus.message}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
