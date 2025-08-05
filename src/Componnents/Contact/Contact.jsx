import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaPhoneFlip } from 'react-icons/fa6';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dyyb5ja', 'template_jmgf59r', e.target, 'yJpyPS9GSI60EPPF1')
            .then((result) => {
                alert("Email envoyé avec succès !");
                e.target.reset();
            })
    };

    return (
        <div id="contact" className="contact">
            <div className="contactMe">
                <div className="contact-content">
                    <div className="contact-start">
                        <h3 className="text-contact">Envoyer votre email pour contacter moi</h3>
                        <div className="contact-start-text">
                            <p>Email: rsolofoniainapatrick4@gmail.com</p>
                            <p>Tél: +261 34 69 673 23 / +261 32 15 425 63</p>
                        </div>
                    </div>
                    <div className="contact-content-text">
                        <h4 className="center-text"><span><FaPhoneFlip />{" "}</span><i>Contacter Moi</i></h4>
                        <form className="form-contact" onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" name="nom" id="nom" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="5" required></textarea>
                            </div>
                            <button className="buton" type="submit">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
