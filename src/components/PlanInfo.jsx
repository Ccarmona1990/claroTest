import React from 'react';

const PlanInfo = ({name, info, additionalClasses}) => {
    return (
        <div className={`mx-4 ${additionalClasses}`}>
            <p className='py-3 py-md-3 py-xxl-4 my-0 text-black text-opacity-50'>{name} <strong className='d-xxl-block pt-xxl-2'>{info}</strong></p>
        </div>
    )
}

export default PlanInfo;
