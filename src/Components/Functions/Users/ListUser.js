import React, { Component, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


// const [products, setProducts] = useState(store);
// const [show, setShow] = useState(false);
// const [isEdit, setIsEdit] = useState(null);
// const [search, setSearch] = useState("");

// const store = localStorage.getItem("products")?.length
//     ? JSON.parse(localStorage.getItem("products"))
//     : [];

// const handleClose = () => {
//     setIsEdit(null);
//     setShow(false);
// };
// const handleShow = () => setShow(true);

// const handleDelete = (id) => {
//     const result = products.filter((p) => p.id !== id);
//     localStorage.setItem("products", JSON.stringify(result));
//     setProducts(result);
// };

// const handleChangeSearch = (e) => {
//     setSearch(e.target.value);
// };

// const handleSearchResult = () => {
//     console.log(search);
//     if (!search) {
//         setProducts(store);
//         return false;
//     }
//     const searchProduct = search.toLowerCase();
//     const result = products.filter(
//         (p) => p.name.toLowerCase().indexOf(searchProduct) > -1
//     );
//     setProducts(result);
// };
// const handleEditUser = (item) => {
//     setIsEdit(item);
//     handleShow();
// };


class Listuser extends Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://618140038bfae60017adfee2.mockapi.io/users')
        this.setState({
            listUsers: res.data
        })
    }
    render() {

        let { listUsers } = this.state;
        return (
            <div>
                 <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Search product name"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                // onChange={handleChangeSearch}
                                            />
                                            <Button
                                                variant="outline-secondary"
                                                id="button-addon2"
                                                // onClick={handleSearchResult}
                                            >
                                                Tìm kiếm
                                            </Button>
                                        </InputGroup>
                                        <Button  variant="primary">
                                            Add new
                                        </Button>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>password</th>
                            <th>address</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>gender</th>
                            <th>roleid</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                   
                                        <tr>
                                            <td key={item.id}>{index + 1}</td>
                                            <td >{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.password}</td>
                                            <td>{item.address}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.roleid}</td>
                                            <td>
                                                <Button
                                                    variant="primary"
                                                    className="ml-3"
                                                    // onClick={() => handleEditUser(item)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    className="ml-3"
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>                     
                                )
                            })}

                    </tbody>
                </Table>
            </div>
        );
    }

}

export default Listuser;
