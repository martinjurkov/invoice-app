import React from 'react';

const ModalEditInvoiceDate = ({
  setInvoiceDate,
  invoiceDate,
  setPaymentTerm,
  paymentTerm,
  setTextProjectDescription,
  textProjectDescription,
}) => {
  return (
    <>
      <div className='modal__two--inputlabel'>
        <label htmlFor='invoice__date' className='modal__more--labels'>
          Invoice Date
        </label>
        <label
          htmlFor='invoice__payment--terms'
          className='modal__more--labels'
        >
          Payment Terms
        </label>
        <input
          id='invoice__date'
          type='date'
          className='modal__more--inputs'
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
        />
        <input
          id='invoice__payment--terms'
          className='modal__more--inputs'
          list='payment__terms'
          value={paymentTerm}
          placeholder='number of days'
          onChange={(e) => setPaymentTerm(e.target.value)}
        />
        <datalist id='payment__terms'>
          <option value='1' />
          <option value='3' />
          <option value='7' />
          <option value='10' />
          <option value='14' />
          <option value='21' />
          <option value='30' />
        </datalist>
      </div>
      <div>
        <label htmlFor='from__street' className='modal__long--label'>
          Project Description
        </label>
        <input
          id='from__street'
          className='modal__long--input'
          placeholder='e.g. Graphic Design Service'
          value={textProjectDescription}
          onChange={(e) => setTextProjectDescription(e.target.value)}
        />
      </div>
    </>
  );
};

export default ModalEditInvoiceDate;
