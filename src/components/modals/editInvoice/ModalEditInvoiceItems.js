import React, { useContext } from 'react';

import InvoiceContext from '../../../context/InvoiceContext';

const ModalEditInvoiceItems = ({
  setItemsName,
  itemsName,
  setItemsQty,
  itemsQty,
  setItemsPrice,
  itemsPrice,
}) => {
  const { lightMode } = useContext(InvoiceContext);

  return (
    <>
      <div className={`modal__items--titles ${lightMode && 'reverse'}`}>
        <div className='modal__items--1'>
          <span>Item Name</span>
        </div>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
      </div>

      <div>
        <div className={`modal__items--data ${lightMode && 'reverse'}`}>
          <div className='modal__items--1'>
            <input
              type='text'
              onChange={(e) => setItemsName(e.target.value)}
              value={itemsName}
              name='itemName'
              className='input item-name__input'
            />
          </div>

          <input
            onChange={(e) => setItemsQty(e.target.value)}
            value={itemsQty}
            name='qty'
            className='input qty__input'
          />

          <input
            onChange={(e) => setItemsPrice(e.target.value)}
            value={itemsPrice}
            name='price'
            className='input price__input'
          />

          <div className='input total__input'>
            {(itemsQty * itemsPrice).toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditInvoiceItems;
