import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { toast } from "react-toastify";

function AddProducts() {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCatergory, setEnterCatergory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  console.log(enterCatergory);

  const addProducts = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const docRef = await collection(db, "products");

      const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`
      );

      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(() => {
          toast.error("Súwretler júklenbegen!");
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              title: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCatergory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
        }
        );
        setLoading(false)
        toast.success("Ónim qosıldı!");
        navigate('/dashboard/all-products')
    } catch (err) {
      setLoading(false)
      toast.error("Ónim qosılmadı!");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          {loading ? (
            <Col lg="12" className="text-center">
              <h5 className="fw-bold">Juklenbekte....</h5>
            </Col>
          ) : (
            <Col lg="12">
              <h4 className="mb-5">Add products</h4>
              <Form onSubmit={addProducts}>
                <FormGroup className="form__group">
                  <span>Product title</span>
                  <input
                    type="text"
                    placeholder="Double sofa"
                    value={enterTitle}
                    onChange={(e) => setEnterTitle(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Short Description</span>
                  <input
                    type="text"
                    placeholder="Text ...."
                    value={enterShortDesc}
                    onChange={(e) => setEnterShortDesc(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <span>Description</span>
                  <input
                    type="text"
                    placeholder="Description"
                    value={enterDescription}
                    onChange={(e) => setEnterDescription(e.target.value)}
                    required
                  />
                </FormGroup>
                <div className="d-flex align-items-center justify-content-between gap-5">
                  <FormGroup className="form__group w-50">
                    <span>Price</span>
                    <input
                      type="number"
                      placeholder="$120"
                      value={enterPrice}
                      onChange={(e) => setEnterPrice(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group w-50">
                    <span>Category</span>
                    <select
                      className="w-100 p-2"
                      value={enterCatergory}
                      onChange={(e) => setEnterCatergory(e.target.value)}
                      required
                    >
                      <option>Select category</option>
                      <option value="chair">Chair</option>
                      <option value="sofa">Sofa</option>
                      <option value="mobile">Mobile</option>
                      <option value="watch">Watch</option>
                      <option value="wireless">Wireless</option>
                    </select>
                  </FormGroup>
                </div>

                <div>
                  <FormGroup className="form__group">
                    <span>Product Image</span>
                    <input
                      type="file"
                      onChange={(e) => setEnterProductImg(e.target.files[0])}
                      required
                    />
                  </FormGroup>
                </div>

                <button className="buy__btn" type="submit">
                  Add Product
                </button>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default AddProducts;
