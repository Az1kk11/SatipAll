import React from "react";
import useGetData from "../custom-hooks/useGetData";
import { deleteDoc, doc } from "firebase/firestore";
import { Col, Container, Row } from "reactstrap";
import { db } from "../firebase.config";

import { toast } from "react-toastify";

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success('Deleted!')
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h3 className="text-center mt-3">Juklenbekte....</h3>
                ) : (
                  productsData.map(item => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt="as" />
                      </td>
                      <td>{item.title}</td>
                      <td className="text-capitalize">{item.category}</td>
                      <td>$ {item.price}</td>
                      <td>
                        <button
                          onClick={() => deleteProduct(item.id)}
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
};

export default AllProducts;
