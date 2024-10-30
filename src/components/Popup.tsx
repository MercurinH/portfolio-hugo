import React from 'react';
import Button from "./Button.tsx";
import '../styles/components/Popup.css';

interface PopupProps {
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({title, children, onClose }) => {

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                {title && <h2 className="popup-title">{title}</h2>}
                <div className="popup-body">
                    {children}
                </div>
                <Button variant="primary" onClick={onClose}>
                    Fermer
                </Button>
            </div>
        </div>
    );
};

export default Popup;