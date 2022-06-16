import React from 'react';

const ModalEditInvoiceBtns = ({
  setViewEditInvoice,
  setMessage,
  setIsLoading,
}) => {
  return (
    <>
      <div className='modal__invoice--btns'>
        <div>
          <button
            type='button'
            className='modal__btn--discard'
            // closing modal window
            onClick={() => setViewEditInvoice(false)}
          >
            Discard
          </button>
        </div>
        <div>
          <button
            type='submit'
            className='modal__btn--save'
            // saving changes in globalState
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setMessage(true);
              }, 2000);
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalEditInvoiceBtns;
