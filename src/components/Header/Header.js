import React from 'react';
import Button from '../Button/Button';
import classes from './styles.css';

const Header = () => (
    <div style={{ textAlign: 'center' }}>
        <Button style={{ display: 'inline', fontFamily: 'Pacifico' }}>
            Home
        </Button>
        <header style={{ display: 'inline' }}>
            <Button style={{ fontFamily: 'Pacifico' }}>We heart it !</Button>
        </header>
    </div>
);
export default Header;
