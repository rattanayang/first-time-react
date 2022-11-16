import { Modal, Button } from 'react-bootstrap'
// import React, { useState, useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './modal-node.css'


function ModalNode(props) {
    console.log(props);
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
                aria-labelledby="contained-modal-title-vcenter" centered show={props.showModalNode} onHide={props.cModal}>
                <Modal.Header type-Node={props.typeNode} class='modal-header' closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Edit Node Id: {props.idNode}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Node Id: {props.idNode} </div>
                    <div style={{ color: 'red' }} >Type Node: {props.typeNode} </div>
                    {/* <div style={{ color: 'Blue' }} >Target Node: {props.targetNode} </div> */}
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

export default ModalNode;


