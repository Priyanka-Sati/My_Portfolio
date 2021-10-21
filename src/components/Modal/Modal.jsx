import React from 'react';
import ReactDOM  from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
            <div onClick={closeModal} className="modal-overlay">
                <div onClick = {(e) => e.stopPropagation()} className="modal-container">
                    <div className="upper-section">
                        <h1>Huge Announcement</h1>
                        <p onClick={closeModal} className = "close">&times;</p>
                    </div>
                    <div className="middle-section">
                        <h1>React mega tutorial is LIVE!</h1>
                        <p>Do you wish to learn react</p>
                        <p>It's all free</p>
                    </div>
                    <div className="lower-section">
                        <a onClick={closeModal} className = "modal-btn btn-red" >close</a>
                        <a className = "modal-btn btn-green" href="" target = "_blank">Start tutorial</a>
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        );
}

export default Modal;