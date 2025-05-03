// components/Font.js
import React from 'react';

const Font = ({ children, className = '' }) => {
    return <span className={`font-montserrat ${className}`}>{children}</span>;
};

export default Font;
