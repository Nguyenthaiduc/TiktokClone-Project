import Header from '../components/Header';

import React from 'react';

interface PropTypes {
    children?: React.ReactNode;
}

const HeaderOnly: React.FC<PropTypes> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">

                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
