import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import InvoiceContext from '../../context/InvoiceContext';

const ConfirmDelete = ({ setMessage }) => {
  const { lightMode } = useContext(InvoiceContext);

  return (
    <>
      <div className='overlay delete' />
      <div className={`modal__message ${lightMode && 'reverse'}`}>
        <h3 style={{ marginBottom: '20px' }}>Succesfully Changed!</h3>
        <div>
          <button
            className={`invoice__btn--edit ${lightMode && 'reverse'}`}
            onClick={() => setMessage(false)}
          >
            <Link to='/' className='modal__btn--link'>
              Cancel
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
