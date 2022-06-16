import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from '../../assets/icon-arrow-left.svg';

import InvoiceContext from '../../context/InvoiceContext';

const InvoiceViewBack = () => {
  const { lightMode } = useContext(InvoiceContext);

  return (
    <div className={`back__button ${lightMode && 'reverse'}`}>
      {/* going back to invoice list */}
      <button>
        <Link to='/'>
          <ArrowLeftIcon />
        </Link>
      </button>
      <p>Go back</p>
    </div>
  );
};

export default InvoiceViewBack;
