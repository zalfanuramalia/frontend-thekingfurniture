import { Modal, Button } from "react-bootstrap";

const ModalDelete = (props) => {

  // const deleteHandler = (token, id) => {
  //   dispatch(deleteProduct(token, id))
  // }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>This product has been deleted</h4>
          {/* <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button >Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalDelete