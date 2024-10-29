import React, { useState } from 'react'; // Import de useState pour gérer l'état local
import emailjs from 'emailjs-com'; // Import de la bibliothèque emailjs pour envoyer des emails
import Button from '../components/Button'; // Import du composant Button
import '../styles/pages/Contact.css'; // Import du fichier de styles CSS


const Contact = () => {
    // Définition de l'état local pour stocker les valeurs du formulaire
    const [formData, setFormData] = useState({
        name: '',      // Nom de l'utilisateur
        email: '',     // Email de l'utilisateur
        message: '',   // Message de l'utilisateur
    });

    const [isSending, setIsSending] = useState(false); // État pour gérer l'envoi du formulaire

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Mise à jour de l'état formData à chaque modification d'un champ du formulaire
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fonction appelée lorsque le formulaire est soumis
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
        setIsSending(true); // Changement de l'état pour indiquer l'envoi du formulaire

        // Vérifiez que tous les champs requis sont remplis
        if (formData.name === '' || formData.email === '' || formData.message === '') {
            alert("Veuillez remplir tous les champs.");
            return; // Ne pas envoyer si un champ est vide
        }

        // Envoi des données via EmailJS
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const userID = import.meta.env.VITE_EMAILJS_USER_ID;

        // Envoi des données du formulaire via EmailJS
        emailjs.send(serviceID, templateID, {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
        }, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Votre message a été envoyé avec succès !');
                setFormData({ name: '', email: '', message: '' }); // Réinitialisation des champs du formulaire
                setIsSending(false); // Réinitialisation de l'état de l'envoi
            }, (err) => {
                console.log('FAILED...', err);
                alert('Échec de l\'envoi du message. Veuillez réessayer.');
                setIsSending(false); // Réinitialisation de l'état de l'envoi
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Contactez-moi</h2>
                <p>Si vous avez un projet ou souhaitez discuter, n'hésitez pas à me contacter via le formulaire ci-dessous ou directement par email.</p>

                {/* Formulaire de contact */}
                <form onSubmit={handleSubmit}>
                    {/* Champ pour le nom de l'utilisateur */}
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name" // L'attribut name correspond à la clé dans formData
                            placeholder={"Nom*"} // Placeholder pour le nom
                            value={formData.name} // Liaison entre l'état formData et le champ input
                            onChange={handleChange} // Déclenchement de handleChange quand le name change
                            required // Champ obligatoire
                        />
                    </div>

                    {/* Champ pour l'email de l'utilisateur */}
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email" // Liaison avec l'état pour l'email
                            placeholder={"Email*"} // Placeholder pour l'email
                            value={formData.email} // Valeur actuelle de l'email dans l'état
                            onChange={handleChange} // Appel à handleChange quand l'email change
                            required // Email obligatoire
                        />
                    </div>

                    {/* Champ pour le message de l'utilisateur */}
                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message" // Liaison avec l'état pour le message
                            placeholder={"Message"} // Placeholder pour le message
                            value={formData.message} // Valeur actuelle du message
                            onChange={handleChange} // Mise à jour du message
                            required // Champ obligatoire
                        ></textarea>
                    </div>

                    {/* Bouton pour envoyer le formulaire */}
                    <Button variant="primary" disabled={isSending || !formData.name || !formData.email || !formData.message}>
                        {isSending ? "Envoi en cours..." : "Envoyer"}
                    </Button>
                </form>

                {/* Informations de contact direct */}
                <div className="contact-info">
                    <p>Ou contactez-moi directement par email :</p>
                    <a href="mailto:mercurinh.contact@gmail.com">mercurinh.contact@gmail.com</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
