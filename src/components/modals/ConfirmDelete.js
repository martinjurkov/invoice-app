import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import InvoiceContext from '../../context/InvoiceContext';

const ConfirmDelete = ({ setViewDeleteModal }) => {
  const { deleteInvoice, viewSingleInvoice, lightMode } = useContext(
    InvoiceContext
  );

  return (
    <>
      <div className='overlay delete' />
      <div className={`modal__deletion ${lightMode && 'reverse'}`}>
        <h3 className='modal__deletion--heading'>Confirm Deletion</h3>
        <p className='modal__deletion--text'>
          Are you sure you want to delete invoice #{`${viewSingleInvoice.id}`}?
          This action cannot be undone.
        </p>
        <div className='modal__deletion--btns'>
          <button
            className={`invoice__btn--edit ${lightMode && 'reverse'}`}
            onClick={() => setViewDeleteModal(false)}
          >
            Cancel
          </button>
          <button
            className='invoice__btn--delete'
            onClick={() => deleteInvoice(viewSingleInvoice.id)}
          >
            <Link to='/' className='btn__delete--link'>
              Delete
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
