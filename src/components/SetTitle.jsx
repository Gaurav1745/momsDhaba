import React from 'react';
import Helmet from 'react-helmet';

const SetTitle = ({ title }) => {
    var defaultTitle = 'Mummy Da Dhaba';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export { SetTitle };