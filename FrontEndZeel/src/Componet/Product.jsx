import React from "react";
import "./CSS/Register.css";
import Dashboard from "./Dashboard ";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa6";
import '../Componet/CSS/Register.css';
import { addProudutapi, deleteProudutapi, getProudutapi } from "../Redux/actions/Prouduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Product() {
  const [obj, setobj] = useState({})
  const [blankobj, setBlankobj] = useState({})
  let state = useSelector(state => state)
  let dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(state);

  useEffect(() => {
    dispatch(getProudutapi())
  }, [])


  let getdata = (e) => {
    if (e.target.name === "productImage") {
      obj[e.target.name] = e.target.files[0];
      blankobj.userImage = "";
    } else {

      obj[e.target.name] = e.target.value;
      blankobj[e.target.name] = "";
    }
    // console.log(obj);
    setobj({ ...obj })
    console.log(obj);
  }

  let submitdata = () => {
    console.log(obj);
    setShow(false)
    let formdata = new FormData();
    formdata.append("productName", obj.productName)
    formdata.append("price", obj.price)
    formdata.append("category", obj.category)
    formdata.append("shopName", obj.shopName)
    formdata.append("mobile", obj.mobile)
    formdata.append("discount", obj.discount)
    formdata.append("discription", obj.discription)
    formdata.append("colors", obj.colors)
    formdata.append("productImage", obj.productImage)

   

    dispatch(addProudutapi(formdata));
  }


  let deletepro = (id) => {
    console.log(id);
    dispatch(deleteProudutapi(id));
  };
  let addtocart=()=>{

  }

  return (
    <>
      <div class=".content-header-product">
        <h1>Product</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <Button variant="danger" className="ms-3" onClick={handleShow}>
        <FaPlus />
        Add To Product
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="proudct">
            <form action="">
              <div className="form first">
                <div className="details personal">
                  <div className="fields">
                    <div className="input-field">
                      <label>productName</label>
                      <input
                        type="text"
                        name="productName"
                        placeholder="Enter your product Name"
                        onChange={getdata}
                        value={obj.productName}
                      />
                    </div>

                    <div className="input-field">
                      <label>price</label>
                      <input
                        type="number"
                        name="price"
                        placeholder="Enter price"
                        onChange={getdata}
                        value={obj.price}
                      />
                    </div>

                    <div className="input-field">
                      <label>category</label>
                      <input
                        type="text"
                        name="category"
                        placeholder="category"
                        onChange={getdata}
                        value={obj.category}
                      />
                    </div>

                    <div className="input-field">
                      <label>shopName</label>
                      <input
                        type="text"
                        name="shopName"
                        placeholder="Enter shopName"
                        onChange={getdata}
                        value={obj.shopName}
                      />
                    </div>

                    <div className="input-field">
                      <label>Mobile Number</label>
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Enter Mobile number"
                        onChange={getdata}
                        value={obj.mobile}
                      />
                    </div>

                    <div className="input-field">
                      <label>Discount</label>
                      <input
                        type="Number"
                        name="discount"
                        placeholder="Enter discount %"
                        onChange={getdata}
                        value={obj.discount}

                      />
                    </div>

                    <div className="input-field">
                      <label>discription</label>
                      <input
                        type="text"
                        name="discription"
                        placeholder="Enter your discription"
                        onChange={getdata}
                        value={obj.discription}
                      />
                    </div>
                    <div className="input-field">
                      <label>colors</label>
                      <input
                        type="color"
                        name="colors"
                        placeholder="seleact your color"
                        onChange={getdata}
                        value={obj.colors}
                      />
                    </div>

                    {/* <div className="input-field">
                      <label>office Contact </label>
                      <input
                        type="number"
                        name="officeContact"
                        placeholder="Enter your office Contact "
                        onChange={getdata}
                        value={obj.officeContact}
                      />
                    </div>

                    <div className="input-field">
                      <label>qualification</label>
                      <input
                        type="text"
                        name="qualification"
                        placeholder="Enter your office Contact "
                        onChange={getdata}
                        value={obj.qualification}
                      />
                    </div>

                    <div className="input-field">
                      <label>address</label>
                      <textarea
                        name="address"
                        rows="2"
                        cols="50"
                        onChange={getdata}
                        value={obj.address}
                      ></textarea>
                    </div>

                    <div className="input-field">
                      <label>password </label>
                      <input
                        type="number"
                        name="password"
                        placeholder="Enter your password"
                        onChange={getdata}
                        value={obj.password}
                      />
                    </div>
                    <div className="input-field">
                      <label>confirmPassword </label>
                      <input
                        type="number"
                        name="confirmPassword"
                        placeholder="Enter your confirmPassword "
                        onChange={getdata}
                        value={obj.confirmPassword}
                      />
                    </div> */}

                    <div className="input-field-useimge">
                      <label>productImage </label>
                      <input
                        type="file"
                        name="productImage"
                        onChange={getdata}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitdata}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <div class="shell">
        <div class="container">
          <div class="row">
            {
              state.REGISTErapi.array?.map((x, i) => {
                return (
                  <>
                    <div class="col-md-4">
                      <div class="wsk-cp-product">
                        <div class="wsk-cp-img">
                          <img
                            src={x.productImage}
                            alt="Product"
                            class="img-responsive"
                          />
                        </div>
                        <div class="wsk-cp-text">
                          <div class="category">
                            <span>{x.category}</span>
                          </div>
                          <div class="title-product">
                            <h3>{x.productName}</h3>
                          </div>
                          <div class="description-prod">
                            <p>Discription: {x.discription}</p>
                          </div>
                          <div class="description-prod">
                            <p>
                              shopName:
                              <span>{x.shopName}</span>
                            </p>
                          </div>
                          <div class="wcf-left">
                            <span class="price">Contact:+91 {x.mobile}</span>
                          </div>
                          <div class="wcf-left">
                            <span class="price">Discount:{x.discount}%</span>
                          </div>
                          <div class="card-footer">
                            <div class="wcf-left">
                              <span class="price">Rp{x.price}</span>
                            </div>

                            <div class="wcf-right">
                              {/* <a href="" class="buy-btn">
                                <i class="zmdi zmdi-shopping-basket"></i>
                                <MdShoppingBasket onClick={addtocart} />
                              </a> */}
                              <button class="buy-btn">
                                <MdDelete onClick={() => deletepro(x._id)} />
                              </button>
                            </div>
                            <div class="wcf-right">
                              {/* <a href="" class="buy-btn">
                                <MdShoppingBasket onClick={addtocart} />
                              </a> */}
                              <button class="buy-btn">
                                <MdShoppingBasket onClick={addtocart} />
                              </button>
                            </div>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            }

          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard(Product);
