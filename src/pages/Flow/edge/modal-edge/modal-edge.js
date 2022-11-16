import { Modal, Button } from 'react-bootstrap'
// import React, { useState, useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function ModalEdge(props) {
    console.log(props.showModalEdge);
    // const [handleShow, handleClose] = useState(props.showModalEdge);

    // const onCloseModal = () => {
    //    handleClose(!handleShow);
    // }

    // useEffect(() =>{
    //     handleClose(props.showModalEdge);
    // },[props.showModalEdge]);

    return (
        <>
            <Modal size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered show={props.showModalEdge} onHide={props.cModal}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Edit Edge Id: {props.idEdge}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Edge Id: {props.idEdge} </div>
                    <div style={{ color: 'red' }} >Source Node: {props.sourceNode} </div>
                    <div style={{ color: 'Blue' }} >Target Node: {props.targetNode} </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.cModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.cModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdge;


