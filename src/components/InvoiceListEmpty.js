import React, { useContext } from 'react';
import { ReactComponent as IllustrationEmpty } from '../assets/illustration-empty.svg';
import InvoiceContext from '../context/InvoiceContext';

const InvoiceListEmpty = () => {
  const { lightMode } = useContext(InvoiceContext);

  return (
    <div className={`invoice__list--empty ${lightMode && 'reverse'}`}>
      <IllustrationEmpty />
      <h2 style={{ padding: '50px 0 30px 0' }}>There is nothing here</h2>
      <p>
        Create an invoice by clicking the New Invoice button and get started
      </p>
    </div>
  );
};

export default InvoiceListEmpty;
