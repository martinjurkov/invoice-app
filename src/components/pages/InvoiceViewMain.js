import React, { useContext } from 'react';

import InvoiceContext from '../../context/InvoiceContext';

const ImportViewMain = () => {
  const { viewSingleInvoice, lightMode } = useContext(InvoiceContext);

  return (
    <>
      <div className='invoice__header'>
        <div className='invoice__header--left'>
          <span className={`invoice__header--title ${lightMode && 'reverse'}`}>
            #{viewSingleInvoice.id}
          </span>
          <span className='invoice__header--subtitle'>
            {viewSingleInvoice.description}
          </span>
        </div>
        <div className='invoice__header--right'>
          <span>{viewSingleInvoice.senderAddressStreet}</span>
          <span>{viewSingleInvoice.senderAddressCity}</span>
          <span>{viewSingleInvoice.senderAddressPostCode}</span>
          <span>{viewSingleInvoice.senderAddressCountry}</span>
        </div>
      </div>

      <div className='invoice__billing'>
        <div>
          <div className='invoice__billing--info'>
            <span className='invoice__billing--title'>Invoice Date</span>
            <span
              className={`invoice__billing--data ${lightMode && 'reverse'}`}
            >
              {viewSingleInvoice.createdAt}
            </span>
          </div>
          <div className='invoice__billing--info'>
            <span className='invoice__billing--title'>Payment Due</span>
            <span
              className={`invoice__billing--data ${lightMode && 'reverse'}`}
            >
              {viewSingleInvoice.paymentDue}
            </span>
          </div>
        </div>
        <div>
          <div className='invoice__billing--info'>
            <span className='invoice__billing--title'>Bill To</span>
            <span
              className={`invoice__billing--data ${lightMode && 'reverse'}`}
            >
              {viewSingleInvoice.clientName}
            </span>
          </div>
          <div className='invoice__billing--address'>
            <span>{viewSingleInvoice.clientAddressStreet}</span>
            <span>{viewSingleInvoice.clientAddressCity}</span>
            <span>{viewSingleInvoice.clientAddressPostCode}</span>
            <span>{viewSingleInvoice.clientAddressCountry}</span>
          </div>
        </div>
        <div>
          <div className='invoice__billing--info'>
            <span className='invoice__billing--title'>Sent to</span>
            <span
              className={`invoice__billing--data ${lightMode && 'reverse'}`}
            >
              {viewSingleInvoice.clientEmail}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImportViewMain;
