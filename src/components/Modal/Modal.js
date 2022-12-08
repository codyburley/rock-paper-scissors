import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import rules from '../../assets/images/image-rules.svg';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <h2 className='modal__title'>RULES</h2>
        <img src={rules} alt="Game rules" />
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true" className='modal__close'>&times;</span>
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;