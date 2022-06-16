import React, { useContext } from 'react';

import InvoiceContext from '../../context/InvoiceContext';

const ConfirmDelete = ({ setMessageError }) => {
  const { lightMode } = useContext(InvoiceContext);

  return (
    <>
      <div className='overlay delete' />
      <div className={`modal__message ${lightMode && 'reverse'}`}>
        <p style={{ marginBottom: '20px' }}>All items are required!</p>
        <div>
          <button
            className={`invoice__btn--edit ${lightMode && 'reverse'}`}
            onClick={() => setMessageError(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
