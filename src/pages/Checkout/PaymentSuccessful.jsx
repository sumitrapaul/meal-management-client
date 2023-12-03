/* eslint-disable react/prop-types */
import Modal from 'react-modal';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#9ca3af'
    },

  };
 
//   Modal.setAppElement('#e1');
const PaymentSuccessful = ({isOpen, onClose, transactionId}) => {
    return (
        <div>
            <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel='Payment success modal' style={customStyles}>
            <h2 className='font-bold mb-2'>Payment successful</h2>
            <p className='mb-2'>Transaction id: {transactionId}</p>
            <button className='btn bg-red-200' onClick={onClose}>Close</button>
        </Modal>
        </div>
    );
};

export default PaymentSuccessful;