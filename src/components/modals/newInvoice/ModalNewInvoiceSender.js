import React from 'react';

const ModalNewInvoiceSender = ({
  setTextAddressFrom,
  textAddressFrom,
  setTextCityFrom,
  textCityFrom,
  setTextPostcodeFrom,
  textPostcodeFrom,
  setTextCountryFrom,
  textCountryFrom,
}) => {
  return (
    <>
      <div>
        <label htmlFor='from__street' className='modal__long--label'>
          Street Address
        </label>
        <input
          id='from__street'
          className='modal__long--input'
          value={textAddressFrom}
          onChange={(e) => setTextAddressFrom(e.target.value)}
        />
      </div>
      <div className='modal__three--inputlabel'>
        <label htmlFor='from__city' className='modal__more--labels'>
          City
        </label>
        <label htmlFor='from__postcode' className='modal__more--labels'>
          Post Code
        </label>
        <label htmlFor='from__country' className='modal__more--labels'>
          Country
        </label>

        <input
          id='from__city'
          className='modal__more--inputs'
          value={textCityFrom}
          onChange={(e) => setTextCityFrom(e.target.value)}
        />
        <input
          id='from__postcode'
          className='modal__more--inputs'
          value={textPostcodeFrom}
          onChange={(e) => setTextPostcodeFrom(e.target.value)}
        />
        <input
          id='from__country'
          className='modal__more--inputs'
          value={textCountryFrom}
          onChange={(e) => setTextCountryFrom(e.target.value)}
        />
      </div>
    </>
  );
};

export default ModalNewInvoiceSender;
