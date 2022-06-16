import React, { useContext } from 'react';

import InvoiceContext from '../../context/InvoiceContext';

const InvoiceViewItems = () => {
  const { viewSingleInvoice, lightMode } = useContext(InvoiceContext);

  // format amount of money into EUR and into european/slovak style of format number
  const formatter = new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'EUR',
  });
  return (
    <>
      <div className={`invoice__items ${lightMode && 'reverse'}`}>
        <div className='invoice__items--titles'>
          <div className='invoice__items--1'>
            <span>Item Name</span>
          </div>
          <span className='invoice__items--titlesqty'>QTY.</span>
          <span className='invoice__items--titlesprice'>Price</span>
          <span>Total</span>
        </div>

        <div className={`invoice__items--data ${lightMode && 'reverse'}`}>
          <div className='invoice__items--1'>
            <span>{viewSingleInvoice.itemsName}</span>
          </div>
          <span className='invoice__items--dataqty'>
            {viewSingleInvoice.itemsQty}
          </span>
          <span className='invoice__items--dataprice'>
            {formatter.format(viewSingleInvoice.itemsPrice)}
          </span>
          <span>{formatter.format(viewSingleInvoice.itemsTotal)}</span>
        </div>
      </div>

      <div className={`invoice__total ${lightMode && 'reverse'}`}>
        <span>Amount Due</span>
        <span className='invoice__total--number'>
          {formatter.format(viewSingleInvoice.itemsTotal)}
        </span>
      </div>
    </>
  );
};

export default InvoiceViewItems;
