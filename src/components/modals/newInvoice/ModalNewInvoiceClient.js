import React from 'react';

const ModalNewInvoiceClient = ({
  setTextNameTo,
  textNameTo,
  setTextEmailTo,
  textEmailTo,
  setTextAddressTo,
  textAddressTo,
  setTextCityTo,
  textCityTo,
  setTextPostcodeTo,
  textPostcodeTo,
  setTextCountryTo,
  textCountryTo,
}) => {
  return (
    <>
      <div>
        <label htmlFor='to__name' className='modal__long--label'>
          Client's Name
        </label>
        <input
          id='to__name'
          className='modal__long--input'
          value={textNameTo}
          onChange={(e) => setTextNameTo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='to__email' className='modal__long--label'>
          Client's Email
        </label>
        <input
          id='to__email'
          className='modal__long--input'
          placeholder='e.g. email@example.com'
          value={textEmailTo}
          onChange={(e) => setTextEmailTo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='to__street' className='modal__long--label'>
          Street Address
        </label>
        <input
          id='to__street'
          className='modal__long--input'
          value={textAddressTo}
          onChange={(e) => setTextAddressTo(e.target.value)}
        />
      </div>
      <div className='modal__three--inputlabel'>
        <label htmlFor='to__city' className='modal__more--labels'>
          City
        </label>
        <label htmlFor='to__postcode' className='modal__more--labels'>
          Post Code
        </label>
        <label htmlFor='to__country' className='modal__more--labels'>
          Country
        </label>

        <input
          id='to__city'
          className='modal__more--inputs'
          value={textCityTo}
          onChange={(e) => setTextCityTo(e.target.value)}
        />
        <input
          id='to__postcode'
          className='modal__more--inputs'
          value={textPostcodeTo}
          onChange={(e) => setTextPostcodeTo(e.target.value)}
        />
        <input
          id='to__country'
          className='modal__more--inputs'
          value={textCountryTo}
          onChange={(e) => setTextCountryTo(e.target.value)}
        />
      </div>
    </>
  );
};

export default ModalNewInvoiceClient;
