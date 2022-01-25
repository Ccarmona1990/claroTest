import React from 'react';

const PlanInfo = ({name, info, additionalClasses}) => {
    return (
        <div className={`mx-4 ${additionalClasses}`}>
            <p className='py-3 py-md-3 py-xl-4 my-0 text-black text-opacity-50'>{name} <strong className='d-xl-block pt-xl-2'>{info}</strong></p>
        </div>
    )
}

export default PlanInfo;
