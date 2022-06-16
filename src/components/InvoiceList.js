import React, { useContext } from 'react';

import InvoiceItem from './InvoiceItem';
import InvoiceListEmpty from './InvoiceListEmpty';
import FilterTable from './FilterTable';
import Spinner from '../components/Spinner';
import InvoiceContext from '../context/InvoiceContext';

const InvoiceList = () => {
  const { viewFilterTable, filteredData, invoiceData, isLoading } = useContext(
    InvoiceContext
  );

  // for showing filtered data when filter table is active or all data when filter table is off
  const filterTableMode = viewFilterTable === true ? filteredData : invoiceData;

  if (!filterTableMode || filterTableMode.length === 0) {
    return <InvoiceListEmpty />;
  }

  return (
    <div>
      {filterTableMode.map((item) => (
        <InvoiceItem key={item.id} item={item} />
      ))}
      {viewFilterTable && <FilterTable />}
      {isLoading && <Spinner />}
    </div>
  );
};

export default InvoiceList;
