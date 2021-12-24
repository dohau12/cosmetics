import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormModal = ({ show, close, isEdit, products, setProducts }) => {
  const [userName, setuserName] = useState('');
  const [quantity, setQuantity] = useState(0);
  
  const handleClose = () => {
    setuserName("");
    setQuantity(0);
    close();
  };

  const handleuserName = (e) => {
    const nameProduct = e.target.value;
    setuserName(nameProduct);
  };

  const handleChangeFirstName = (e) => {
    const productQuantity = e.target.value;
    setQuantity(productQuantity);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (isEdit) {
      const result = products.map((p) =>
        p.id === isEdit.id ? { ...p, name: userName, quantity } : p
      );
      localStorage.setItem("products", JSON.stringify(result));
      setProducts(result);
      handleClose();
      return false;
    }
    const result = [
      ...products,
      {
        id: products.length + 1,
        name: userName,
        quantity,
      },
    ];
    localStorage.setItem("products", JSON.stringify(result));
    setProducts(result);
    handleClose();
  };

  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>{isEdit ? "Edit form" : "Add new form"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>firstName</Form.Label>
            <Form.Control
              value={isEdit?.firstName ? isEdit?.firstName : userName}
              type="text"
              placeholder="Name"
              name="firstName"
              onChange={handleuserName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>lastName</Form.Label>
            <Form.Control
              value={isEdit?.firstName ? isEdit?.lastName : lastName}
              type="text"
              placeholder="lastName"
              name="lastName"
              onChange={handleChangeFirstName}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isEdit ? "Update" : "Save"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
