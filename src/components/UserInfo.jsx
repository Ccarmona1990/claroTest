import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { customer1 } from '../utils/customerInfo';

const UserInfo = ()=> {
    const {name, lastName, phoneNumber, status} = customer1;

    return (
        <section className='d-flex d-md-block justify-content-between flex-row-reverse py-4 pb-md-4 pt-md-3 px-md-3 px-4 bg-light rounded-3 user-info '>
            <article className='text-md-end '>
                <button className='border-0 bg-transparent '>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </button>
            </article>

            <article className='d-flex d-md-block text-md-center align-items-center'>
                
                <section className='me-4 me-md-0 py-md-3'>
                    <button className='rounded-circle phone-icon  p-md-2 s-md-btn border-0'>
                        <FontAwesomeIcon 
                        icon={faMobileAlt} 
                        size='1x'/>
                    </button>
                </section>

                <section>
                    <p className='mb-0 text-capitalize text-black text-opacity-50 '>
                        {`${name} ${lastName}` }
                    </p>
                    <span>
                        <p className='d-inline d-md-block mb-0 phoneNumber'><strong className='py-md-2'>{phoneNumber}</strong></p> <p className='d-inline d-md-block mb-0 text-capitalize fw-light active'>{status}</p>
                    </span>
                </section>
            </article>
            
        </section>
    )
}

export default UserInfo;
