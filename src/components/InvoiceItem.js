import React from 'react';

import ClickToInvoiceViewIcon from './ClickToInvoiceViewIcon';
import InvoiceStatusOrange from './status/InvoiceStatusOrange';
import InvoiceStatusGreen from './status/InvoiceStatusGreen';
import InvoiceStatusGrey from './status/InvoiceStatusGrey';
import Card from '../shared/Card';

const InvoiceItem = ({ item, textSize }) => {
  const greyColor = {
    color: '#888eb0',
  };

  const fontSize = {
    fontSize: textSize,
  };

  const paidStatus = item.status === 'paid';
  const pendingStatus = item.status === 'pending';
  const draftStatus = item.status === 'draft';

  // format amount of money into EUR and into european/slovak style of format number
  const formatter = new Intl.NumberFormat('sk-SK', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <Card>
      <div className='card__left'>
        <span>#{item.id} </span>
        <span style={greyColor}>Due {item.paymentDue} </span>
        <span style={greyColor}>{item.clientName} </span>
      </div>
      <div className='card__right'>
        <span style={fontSize}>
          {/* total amount of money */}
          {formatter.format(item.itemsQty * item.itemsPrice)}
        </span>
        <div className='card__right--status'>
          {/* determination of invoice status */}
          {paidStatus && <InvoiceStatusGreen />}
          {pendingStatus && <InvoiceStatusOrange />}
          {draftStatus && <InvoiceStatusGrey />}
        </div>
        <div>
          <ClickToInvoiceViewIcon item={item} />
        </div>
      </div>
    </Card>
  );
};

InvoiceItem.defaultProps = {
  textSize: '20px',
};

export default InvoiceItem;
