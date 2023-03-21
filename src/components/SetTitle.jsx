import React from 'react';
import Helmet from 'react-helmet';

const SetTitle = ({ title }) => {
    var defaultTitle = 'MomsDhaba';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export { SetTitle };