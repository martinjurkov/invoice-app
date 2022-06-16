import React, { useState, useContext } from 'react';

import InvoiceViewMain from './InvoiceViewMain';
import InvoiceViewHeader from './InvoiceViewHeader';
import InvoiceViewItems from './InvoiceViewItems';
import ModalEditInvoice from '../modals/editInvoice/ModalEditInvoice';
import ConfirmDelete from '../modals/ConfirmDelete';
import Navbar from '../Navbar';
import InvoiceViewBack from './InvoiceViewBack';
import Spinner from '../../components/Spinner';
import InvoiceContext from '../../context/InvoiceContext';

const InvoiceView = () => {
  const { isLoading, lightMode } = useContext(InvoiceContext);

  // state for opening modal table for editing data in existing invoice
  const [viewEditInvoice, setViewEditInvoice] = useState(false);
  // state for opening modal window for confirmation of deleting invoice from globalState
  const [viewDeleteModal, setViewDeleteModal] = useState(false);

  return (
    <>
      <Navbar />

      <InvoiceViewBack />

      <div className='container'>
        <InvoiceViewHeader
          setViewEditInvoice={setViewEditInvoice}
          setViewDeleteModal={setViewDeleteModal}
        />

        <main className={`invoice__main ${lightMode && 'reverse'}`}>
          <InvoiceViewMain />
          <InvoiceViewItems />
        </main>

        {viewEditInvoice && (
          <ModalEditInvoice setViewEditInvoice={setViewEditInvoice} />
        )}
        {viewDeleteModal && (
          <ConfirmDelete setViewDeleteModal={setViewDeleteModal} />
        )}
        {isLoading && <Spinner />}
      </div>
    </>
  );
};

export default InvoiceView;
