import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { _showNetInfo } from '../redux/ducks/showInfo';

export const InformationModal = ({name, message, icon, additionalClasses}) => {
    const dispatch = useDispatch();

    const handleModal = ()=>{
        dispatch(_showNetInfo(false));
    }
    return (
    <div className={`bg-dark bg-opacity-75 w-100 h-100 position-fixed  d-flex align-items-end z-index-1 ${additionalClasses}`}>

        <div className='bg-dark text-light px-4 pt-2 rounded w-100 '>
            
            <section className='text-end'>
                <button 
                className='bg-transparent border-0 close-btn'
                onClick={handleModal}>
                    <FontAwesomeIcon 
                        icon={faTimes}
                        color='white'/>
                </button>
            </section>

            <section>
                <FontAwesomeIcon 
                icon={icon}/>
                <h5 className='mb-0 mx-2 pt-1 text-capitalize d-inline'>
                    {name}
                </h5>
            </section>

            <p className='mb-0 py-3 fw-light '>
                {message}
            </p>

        </div>

    </div>
    )
};

export const InformationBox = ({name, message, icon ,additionalClasses })=>{
    return (
        <div id='information-box' className={`bg-dark text-light p-3 me-4 rounded-3 w-info ${additionalClasses} `}>
            <section>
                <FontAwesomeIcon 
                icon={icon}/>
                <h6 className='mb-0 mx-2  text-capitalize d-inline '>
                    {name}
                </h6>
            </section>
            <p className='mb-0 mt-2 font-light'>
                {message}
            </p>
        </div>
    )
}
