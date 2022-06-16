import React, { useState, useContext } from 'react';

import ModalEditInvoiceSender from './ModalEditInvoiceSender';
import ModalEditInvoiceClient from './ModalEditInvoiceClient';
import ModalEditInvoiceDate from './ModalEditInvoiceDate';
import ModalEditInvoiceItems from './ModalEditInvoiceItems';
import ModalEditInvoiceBtns from './ModalEditInvoiceBtns';
import ModalMessage from '../ModalMessage';
import Spinner from '../../Spinner';
import InvoiceContext from '../../../context/InvoiceContext';

const ModalNewInvoice = ({ setViewEditInvoice }) => {
  const { updateInvoice, viewSingleInvoice, lightMode } = useContext(
    InvoiceContext
  );

  // states for inputs in modal window for editing invoice, data are taken from existing invoice
  const [textAddressFrom, setTextAddressFrom] = useState(
    viewSingleInvoice.senderAddressStreet
  );
  const [textCityFrom, setTextCityFrom] = useState(
    viewSingleInvoice.senderAddressCity
  );
  const [textPostcodeFrom, setTextPostcodeFrom] = useState(
    viewSingleInvoice.senderAddressPostCode
  );
  const [textCountryFrom, setTextCountryFrom] = useState(
    viewSingleInvoice.senderAddressCountry
  );
  const [textNameTo, setTextNameTo] = useState(viewSingleInvoice.clientName);
  const [textEmailTo, setTextEmailTo] = useState(viewSingleInvoice.clientEmail);
  const [textAddressTo, setTextAddressTo] = useState(
    viewSingleInvoice.clientAddressStreet
  );
  const [textCityTo, setTextCityTo] = useState(
    viewSingleInvoice.clientAddressCity
  );
  const [textPostcodeTo, setTextPostcodeTo] = useState(
    viewSingleInvoice.clientAddressPostCode
  );
  const [textCountryTo, setTextCountryTo] = useState(
    viewSingleInvoice.clientAddressCountry
  );
  const [invoiceDate, setInvoiceDate] = useState(viewSingleInvoice.createdAt);
  const [paymentTerm, setPaymentTerm] = useState(
    viewSingleInvoice.paymentTerms
  );
  const [textProjectDescription, setTextProjectDescription] = useState(
    viewSingleInvoice.description
  );
  const [itemsName, setItemsName] = useState(viewSingleInvoice.itemsName);
  const [itemsQty, setItemsQty] = useState(viewSingleInvoice.itemsQty);
  const [itemsPrice, setItemsPrice] = useState(viewSingleInvoice.itemsPrice);

  // state for showing error message after failing defining conditions
  const [message, setMessage] = useState(false);

  // state for adding a spinner
  const [isLoading, setIsLoading] = useState(false);

  const whiteColor = {
    color: '#f8f8fb',
  };

  const blackColor = {
    color: '#000',
  };

  // calculating due date from invoice date and number of days in payment terms
  let day;
  invoiceDate.slice(8, 9) === '0'
    ? (day = invoiceDate.slice(9))
    : (day = invoiceDate.slice(8));

  let month;
  invoiceDate.slice(5, 6) === '0'
    ? (month = invoiceDate.slice(6, 7))
    : (month = invoiceDate.slice(5, 7));

  const year = invoiceDate.slice(0, 4);

  const current = new Date(year, month - 1, day);
  current.setDate(current.getDate() + +paymentTerm);

  const newDate = `${current.getFullYear()}-${
    current.getMonth() + 1 < 10
      ? '0' + (current.getMonth() + 1)
      : current.getMonth() + 1
  }-${current.getDate() < 10 ? '0' + current.getDate() : current.getDate()}`;

  // putting modified data from modal table from items into globalState for 'pending' invoice
  const handleEditInvoice = (e) => {
    e.preventDefault();

    const editInvoice = {
      id: viewSingleInvoice.id,
      status: 'pending',
      senderAddressStreet: textAddressFrom,
      senderAddressCity: textCityFrom,
      senderAddressPostCode: textPostcodeFrom,
      senderAddressCountry: textCountryFrom,
      clientName: textNameTo,
      clientAddressStreet: textAddressTo,
      clientAddressCity: textCityTo,
      clientAddressPostCode: textPostcodeTo,
      clientAddressCountry: textCountryTo,
      clientEmail: textEmailTo,
      createdAt: invoiceDate,
      paymentTerms: paymentTerm,
      paymentDue: newDate,
      description: textProjectDescription,
      itemsName,
      itemsQty,
      itemsPrice,
      itemsTotal: itemsQty * itemsPrice,
    };

    updateInvoice(editInvoice);
  };

  return (
    <>
      <div className='overlay' onClick={() => setViewEditInvoice(false)} />
      <div className={`modal__invoice ${lightMode && 'reverse'}`}>
        <div>
          <h2 style={lightMode ? whiteColor : blackColor}>
            Edit Invoice #{`${viewSingleInvoice.id}`}
          </h2>
        </div>
        <div>
          <p className='bill__from--to'>Bill From</p>
        </div>
        <form onSubmit={handleEditInvoice}>
          <ModalEditInvoiceSender
            setTextAddressFrom={setTextAddressFrom}
            textAddressFrom={textAddressFrom}
            setTextCityFrom={setTextCityFrom}
            textCityFrom={textCityFrom}
            setTextPostcodeFrom={setTextPostcodeFrom}
            textPostcodeFrom={textPostcodeFrom}
            setTextCountryFrom={setTextCountryFrom}
            textCountryFrom={textCountryFrom}
          />
          <div>
            <p className='bill__from--to'>Bill To</p>
          </div>

          <ModalEditInvoiceClient
            setTextNameTo={setTextNameTo}
            textNameTo={textNameTo}
            setTextEmailTo={setTextEmailTo}
            textEmailTo={textEmailTo}
            setTextAddressTo={setTextAddressTo}
            textAddressTo={textAddressTo}
            setTextCityTo={setTextCityTo}
            textCityTo={textCityTo}
            setTextPostcodeTo={setTextPostcodeTo}
            textPostcodeTo={textPostcodeTo}
            setTextCountryTo={setTextCountryTo}
            textCountryTo={textCountryTo}
          />

          <ModalEditInvoiceDate
            setInvoiceDate={setInvoiceDate}
            invoiceDate={invoiceDate}
            setPaymentTerm={setPaymentTerm}
            paymentTerm={paymentTerm}
            setTextProjectDescription={setTextProjectDescription}
            textProjectDescription={textProjectDescription}
          />

          <div>
            <p className={`item__list--p ${lightMode && 'reverse'}`}>
              Item List
            </p>
          </div>

          <ModalEditInvoiceItems
            setItemsName={setItemsName}
            itemsName={itemsName}
            setItemsQty={setItemsQty}
            itemsQty={itemsQty}
            setItemsPrice={setItemsPrice}
            itemsPrice={itemsPrice}
            lightMode={lightMode}
          />

          <ModalEditInvoiceBtns
            setViewEditInvoice={setViewEditInvoice}
            setMessage={setMessage}
            setIsLoading={setIsLoading}
          />
        </form>
      </div>
      {message && <ModalMessage setMessage={setMessage} />}
      {isLoading && <Spinner />}
    </>
  );
};

export default ModalNewInvoice;
