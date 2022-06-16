import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import InvoiceStatusOrange from '../status/InvoiceStatusOrange';
import InvoiceStatusGreen from '../status/InvoiceStatusGreen';
import InvoiceStatusGrey from '../status/InvoiceStatusGrey';
import Card from '../../shared/Card';
import InvoiceContext from '../../context/InvoiceContext';

const InvoiceViewHeader = ({ setViewEditInvoice, setViewDeleteModal }) => {
  const { markInvoicePaid, viewSingleInvoice, lightMode } = useContext(
    InvoiceContext
  );

  const paidStatus = viewSingleInvoice.status === 'paid';
  const pendingStatus = viewSingleInvoice.status === 'pending';
  const draftStatus = viewSingleInvoice.status === 'draft';

  return (
    <Card lightMode={lightMode}>
      <div className='invoice__card--left'>
        <p className={`invoice__status ${lightMode && 'reverse'}`}>Status</p>
        <div>
          {/* determination of invoice status */}
          {pendingStatus && <InvoiceStatusOrange />}
          {paidStatus && <InvoiceStatusGreen />}
          {draftStatus && <InvoiceStatusGrey lightMode={lightMode} />}
        </div>
      </div>
      <div className='invoice__card--right'>
        <button
          className={`invoice__btn--edit ${lightMode && 'reverse'}`}
          //   opening modal table for editing data in invoice
          onClick={() => setViewEditInvoice(true)}
        >
          Edit
        </button>
        <button
          className='invoice__btn--delete'
          // opening modal windoe for confirmation of deleting invoice
          onClick={() => setViewDeleteModal(true)}
        >
          Delete
        </button>
        {(pendingStatus || draftStatus) && (
          <button
            className='invoice__btn--paid'
            // changing status of invoice from 'pending' or 'draft' to 'paid'
            onClick={() => markInvoicePaid(viewSingleInvoice.id)}
          >
            <Link to='/' className='btn__delete--link'>
              Mark As Paid
            </Link>
          </button>
        )}
      </div>
    </Card>
  );
};

export default InvoiceViewHeader;
