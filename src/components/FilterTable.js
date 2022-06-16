import React, { useContext } from 'react';

import InvoiceContext from '../context/InvoiceContext';

const FilterTable = () => {
  const {
    invoiceData,
    lightMode,
    statusItems,
    filterInvoices,
    setFilteredData,
  } = useContext(InvoiceContext);

  return (
    <>
      <div className={`filter__table ${lightMode && 'reverse'}`}>
        {/* chosing all invoices that are pushed into globalState */}
        <button onClick={() => setFilteredData(invoiceData)}>All</button>

        {statusItems.map((item, id) => {
          // chosing invoices that have status of our choice
          return (
            <button key={id} onClick={() => filterInvoices(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FilterTable;
