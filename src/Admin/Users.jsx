import React from "react";
import { Col, Container, Row } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
function Users() {
    const { data: usersData, loading } = useGetData("users");

    const userDelete = async (id) => {
        await deleteDoc(doc(db, "users", id));
        toast.success("User deleted!");
    };
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h4 className="fw-bold">Users</h4>
                    </Col>
                    <Col lg="12" className="pt-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <h5 className="fw-bold pt-5">Loading....</h5>
                                ) : (
                                    usersData.map((item) => (
                                        <tr key={item.uid}>
                                            <td>
                                                <img className="w-50 h-50" src={item.photoURL} alt="" />
                                            </td>
                                            <td>{item.displayName}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <button
                                                    onClick={() => userDelete(item.uid)}
                                                    className="btn btn-danger">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Users;
