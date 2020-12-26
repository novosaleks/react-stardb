import React from 'react';

import './error-notification.scss'

const ErrorNotification = () => {
    return (
        <div className='error-notification text-center'>
            Sorry, but we couldn't get enough data to load &#128549; <br/>
            Please, wait a few second or reload this page.
        </div>
    );
};

export default ErrorNotification;