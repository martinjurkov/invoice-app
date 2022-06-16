import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/icon-arrow-right.svg';
import InvoiceContext from '../context/InvoiceContext';

const ClickToInvoiceViewIcon = ({ item }) => {
  const { viewInvoice } = useContext(InvoiceContext);

  return (
    <button className='btn__to--invoiceview' onClick={() => viewInvoice(item)}>
      <Link to={`/invoice-view/${item.id}`}>
        <ArrowRightIcon />
      </Link>
    </button>
  );
};

export default ClickToInvoiceViewIcon;
