import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { DecodeBodyObject, BuildSubmitBtn } from '../modals'

const DisplayAlert = ({show, onHide, title,  body, onSubmit, setShow}) => {
    return (
        <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DecodeBodyObject
                    body={body}
                />
            </Modal.Body>
            <Modal.Footer>
                <BuildSubmitBtn
                    length={1}
                    setExpand={setShow}
                    onSubmit={onSubmit}
                />
            </Modal.Footer>
        </Modal>
    )
}

export default DisplayAlert