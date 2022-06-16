import React, { createContext, useState, useEffect } from 'react';

import InvoiceData from '../data/InvoiceData';

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  // global state for initial data and for manipulating with data, data are from localStorage (initial data from InvoiceData)
  const [invoiceData, setInvoiceData] = useState(
    JSON.parse(localStorage.getItem('data')) || InvoiceData
  );

  // empty object as a place for pushing data from single invoice for reading in invoice detail
  const [viewSingleInvoice, setViewSingleInvoice] = useState({});

  // state for filtering data
  const [filteredData, setFilteredData] = useState(invoiceData);

  // state for displaying a filter table
  const [viewFilterTable, setViewFilterTable] = useState(false);

  // state for switching light and dark mode for a whole app
  const [lightMode, setLightMode] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // after changes in globalState a new data is set into localStorage
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(invoiceData));
  }, [invoiceData]);

  // displaying details of single invoice
  const viewInvoice = (viewInvoiceData) => {
    setViewSingleInvoice(viewInvoiceData);
    window.scrollTo(0, 0);
  };

  // adding invoice to invoiceData
  const addInvoice = (newInvoice) => {
    newInvoice.id = Math.random().toString(36).substring(2, 7).toUpperCase();
    setInvoiceData([newInvoice, ...invoiceData]);
  };

  // updating data in single invoice in invoiceData
  const updateInvoice = (newInvoice) => {
    const newInvoices = invoiceData.map((invoice) => {
      if (newInvoice.id === invoice.id) {
        return newInvoice;
      }
      return invoice;
    });

    setInvoiceData(newInvoices);
  };

  // chnging status in single invoice from 'pending' or 'draft' to 'paid'
  const markInvoicePaid = (id) => {
    const newInvoices = invoiceData.map((invoice) => {
      if (id === invoice.id) {
        return { ...invoice, status: 'paid' };
      }
      return invoice;
    });

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setInvoiceData(newInvoices);
    }, 2000);
  };

  // deleting invoice from invoiceData
  const deleteInvoice = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setInvoiceData(invoiceData.filter((invoice) => invoice.id !== id));
    }, 2000);
  };

  // selecting all possible invoice statuses from invoice list
  const statusItems = [...new Set(invoiceData.map((item) => item.status))];

  // filtering invoice list according to invoice status(paid, pending, draft, all)
  const filterInvoices = (curstat) => {
    const newInvoices = invoiceData.filter((item) => item.status === curstat);
    setFilteredData(newInvoices);
  };

  // toggling between light and dark mode
  const toggleMode = () => {
    setLightMode(!lightMode);
  };

  lightMode
    ? (document.body.style.backgroundColor = '#141625')
    : (document.body.style.backgroundColor = '#fff');

  return (
    <InvoiceContext.Provider
      value={{
        invoiceData,
        lightMode,
        viewInvoice,
        viewSingleInvoice,
        filteredData,
        setFilteredData,
        viewFilterTable,
        setViewFilterTable,
        isLoading,
        addInvoice,
        updateInvoice,
        markInvoicePaid,
        deleteInvoice,
        filterInvoices,
        statusItems,
        toggleMode,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceContext;
