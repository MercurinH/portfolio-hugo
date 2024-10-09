import React, { useState } from 'react'; // Import de useState pour gérer l'état local

const Contact = () => {
    // Définition de l'état local pour stocker les valeurs du formulaire
    const [formData, setFormData] = useState({
        name: '',      // Nom de l'utilisateur
        email: '',     // Email de l'utilisateur
        message: '',   // Message de l'utilisateur
    });

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Mise à jour de l'état formData à chaque modification d'un champ du formulaire
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fonction appelée lorsque le formulaire est soumis
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
        console.log('Form Data:', formData); // Affiche les données du formulaire dans la console (à remplacer par l'envoi d'email)

        // add du code pour envoyer les données via une API ou EmailJS
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
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name" // L'attribut name correspond à la clé dans formData
                            value={formData.name} // Liaison entre l'état formData et le champ input
                            onChange={handleChange} // Déclenchement de handleChange quand le name change
                            required // Champ obligatoire
                        />
                    </div>

                    {/* Champ pour l'email de l'utilisateur */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email" // Liaison avec l'état pour l'email
                            value={formData.email} // Valeur actuelle de l'email dans l'état
                            onChange={handleChange} // Appel à handleChange quand l'email change
                            required // Email obligatoire
                        />
                    </div>

                    {/* Champ pour le message de l'utilisateur */}
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message" // Liaison avec l'état pour le message
                            value={formData.message} // Valeur actuelle du message
                            onChange={handleChange} // Mise à jour du message
                            required // Champ obligatoire
                        ></textarea>
                    </div>

                    {/* Bouton pour envoyer le formulaire */}
                    <button type="submit">Envoyer</button>
                </form>

                {/* Informations de contact direct */}
                <div className="contact-info">
                    <p>Ou contactez-moi directement par email :</p>
                    <a href="mailto:email@example.com">email@example.com</a>
                </div>

                {/* Liens vers les réseaux sociaux */}
                <div className="social-links">
                    <a href="https://github.com/profil" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/profil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
