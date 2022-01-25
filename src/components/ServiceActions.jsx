import React from 'react';

const ServiceActions = ({children, additionalClasses}) => {
  return (
    <section 
    className={`order-3 order-md-2 text-md-end pe-md-3 py-4 py-md-0 buy-button ${additionalClasses}`}>
        {children}
    </section>
    )
};

export default ServiceActions;
