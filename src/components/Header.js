import React, { useState, useContext } from 'react';
import { ReactComponent as IconPlus } from '../assets/icon-plus.svg';
import { ReactComponent as IconDown } from '../assets/icon-arrow-down.svg';

import ModalNewInvoice from './modals/newInvoice/ModalNewInvoice';
import InvoiceContext from '../context/InvoiceContext';

const Header = () => {
  const {
    invoiceData,
    lightMode,
    viewFilterTable,
    setViewFilterTable,
  } = useContext(InvoiceContext);

  // state for showing a modal table for entering data for a new invoice
  const [showNewInvoice, setShowNewInvoice] = useState(false);

  const greyColor = {
    color: '#888eb0',
  };

  const whiteColor = {
    color: '#f8f8fb',
  };

  const blackColor = {
    color: '#000',
  };

  return (
    <header className='container-header'>
      <div className='header__left'>
        <h1 style={lightMode ? whiteColor : blackColor}>Invoices</h1>
        <p style={greyColor}>
          {/* showing total number of invoices */}
          {invoiceData.length === 0
            ? `No invoices`
            : `There are ${invoiceData.length} total invoices`}{' '}
        </p>
      </div>
      <div className='header__right'>
        <button
          className={`btn__filter ${lightMode && 'reversed'}`}
          // opening and closing filter table
          onClick={() => {
            setViewFilterTable(!viewFilterTable);
          }}
        >
          Filter by status <IconDown style={{ marginLeft: '20px' }} />
        </button>

        <button
          className='btn__new--invoice'
          // opening a new modal window for creating a new invoice
          onClick={() => setShowNewInvoice(true)}
        >
          <span className='white__dot'>
            <IconPlus />
          </span>
          <p>New Invoice</p>
        </button>
        {showNewInvoice && (
          <ModalNewInvoice setShowNewInvoice={setShowNewInvoice} />
        )}
      </div>
    </header>
  );
};

export default Header;
