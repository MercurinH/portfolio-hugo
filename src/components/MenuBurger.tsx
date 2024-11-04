import React from 'react';
import '../styles/components/MenuBurger.css';

interface MenuBurgerProps {
    isOpen: boolean;
    onToggle: () => void;
}

const MenuBurger: React.FC<MenuBurgerProps> = ({ isOpen, onToggle }) => {
    return (
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={onToggle}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
};

export default MenuBurger;
