// const [invoiceNewItem, setInvoiceNewItem] = useState([
//   {
//     id: Math.random() * 1000000,
//     itemsName: '',
//     itemsQty: '',
//     itemsPrice: '',
//     itemsTotal: '',
//   },
// ]);

// const addNewItem = () => {
//   setInvoiceNewItem([
//     ...invoiceNewItem,
//     {
//       id: Math.random() * 1000000,
//       itemsName: '',
//       itemsQty: '',
//       itemsPrice: '',
//       itemsTotal: '',
//     },
//   ]);
// };

// const deleteNewItem = (index) => {
//   const rows = [...invoiceNewItem];

//   rows.splice(index, 1);
//   // rows.filter((item) => item.index !== index);
//   setInvoiceNewItem(rows);
// };

// const handleChange = (index, evnt) => {
//   const { name, value } = evnt.target;
//   const list = [...invoiceNewItem];
//   list[index][name] = value;
//   setInvoiceNewItem(list);
// };

{
  /* <div>
  {invoiceNewItem.map((data, index) => {
    const { itemName, qty, price } = data;
    return (
      <div
        className={`modal__items--data ${lightMode && 'reverse'}`}
        key={index}
      >
        <div className='modal__items--1'>
          <input
            type='text'
            onChange={(evnt) => handleChange(index, evnt)}
            value={invoiceNewItem.itemName}
            name='itemName'
            className='input item-name__input'
          />
        </div>

        <input
          onChange={(evnt) => handleChange(index, evnt)}
          value={setInvoiceNewItem.qty}
          name='qty'
          className='input qty__input'
        />

        <input
          onChange={(evnt) => handleChange(index, evnt)}
          value={invoiceNewItem.price}
          name='price'
          className='input price__input'
        />

        <div className='input total__input'>{qty * price}</div>

        <div className='col'>
          {invoiceNewItem.length !== 0 ? (
            <button
              type='button'
              className='btn__delete--icon'
              onClick={deleteNewItem}
            >
              <IconDelete />
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  })}

  <div>
    <button
      type='button'
      className={`btn__add--item ${lightMode && 'reverse'}`}
      onClick={addNewItem}
    >
      + Add New Item
    </button>
  </div>
</div>; */
}
