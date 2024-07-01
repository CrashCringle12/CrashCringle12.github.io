import React from 'react';
import styled from 'styled-components';
import { Modal, Button } from 'react-bootstrap';

const WarningModal = styled(Modal)`
  .modal-content {
    background-color: ${({ theme }) => (theme.name === 'light' ? '#f8d7da' : '#721c24')};
    color: ${({ theme }) => (theme.name === 'light' ? '#721c24' : '#f8d7da')};
  }
`;

const MobileWarning = ({ show, handleClose }) => {
  return (
    <WarningModal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Mobile Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Oi, Mobile support isn't quite there yet. Please switch to a desktop or use Desktop View for the best experience.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </WarningModal>
  );
};

export default MobileWarning;
