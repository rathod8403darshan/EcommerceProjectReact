import React, { useEffect, useState } from 'react'
import HocMainCompo from './HocMainCompo'
import { useDispatch, useSelector } from 'react-redux'
import { AddProduct, DeleteProduct, EditProduct, GetProduct } from '../../Redux/Action/ProductAction'
import { useCookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddCart } from '../../Redux/Action/CartAction';
import Swal from 'sweetalert2';

import Alert from 'react-bootstrap/Alert';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AddorderAction } from '../../Redux/Action/OrderAction';




function Product() {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = { headers: { Authorization: `Bearer ${cookies?.token}` } }
    const [obj, setobj] = useState({})
    const [blank, setblank] = useState({ ProductName: "", price: "", category: "", shopName: "", mobile: "", discount: "", discription: "", colors: "" })
    const [objquantity, setobjquantity] = useState({})
    const [blankquantity, setblankquantity] = useState({ quantity: "" })
    const [getQueNumber, setGetQueNumber] = useState(0);
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(GetProduct(token));
    }, [])

    // modal


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Modal 2
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = (id) => {
        setGetQueNumber(id);
        setShow3(true)
    };




    const GetProductval = (e) => {
        if (e.target.name === "productImage") {
            obj[e.target.name] = e.target.files[0];
            e.target.value = "";
        } else {
            obj[e.target.name] = e.target.value
            blank[e.target.name] = ""
        }
        setobj({ ...obj });
        setblank({ ...blank })
    }

    const addCardFun = () => {
        console.log(obj);
        const formData = new FormData();
        formData.append("productName", obj.productName)
        formData.append("price", obj.price)
        formData.append("category", obj.category)
        formData.append("shopName", obj.shopName)
        formData.append("mobile", obj.mobile)
        formData.append("discount", obj.discount)
        formData.append("discription", obj.discription)
        formData.append("colors", obj.colors)
        formData.append("productImage", obj.productImage);

        if (obj._id) {
            formData.append("id", obj._id);

            dispatch(EditProduct(obj._id, formData, token));
        } else {
            dispatch(AddProduct(formData, token));
        }



        setobj({ ...blank })
    }



    // Delete Card

    const DeleteData = (id) => {
        Swal.fire({
            title: "Are you sure !!!",
            showCancelButton: true,
            confirmButtonText: "Remove",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Remove!", "", "success");
                dispatch(DeleteProduct(id, token))
            }
        });
    }

    const EditData = (id) => {
        const obj = state.Product.Product.find((x) => x._id === id)
        Swal.fire({
            title: "Are you sure !!!",
            showCancelButton: true,
            confirmButtonText: "Edit",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Edit!", "", "Panding");
                setobj({ ...obj })
                setShow(true)
            }
        });

    }



    // Add To cart
    const AddToCart = (obj) => {


        Swal.fire({

            showCancelButton: true,
            confirmButtonText: "AddCart",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("AddCart!", "", "success");
                const objid = { "productId": obj._id }
                dispatch(AddCart(objid, token))
            }
        });

    }

    // Buy Now



    const Getquantity = (e) => {

        objquantity[e.target.name] = e.target.value;
        setobjquantity({ ...objquantity })
        setblankquantity({ ...blankquantity })
    }
    const GetquantityData = () => {



        // console.log(objNumber)

        Swal.fire({

            showCancelButton: true,
            confirmButtonText: "Buy",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Buying successfull!", "", "success");
                const objNumber = { productId: getQueNumber, quantity: objquantity.quantity }
                dispatch(AddorderAction(token, objNumber))
            }
        });

        setobjquantity({ ...blankquantity })
        setShow3(false)

    }



    return (
        <div>
            <div className='w-100 text-center ms-2'>
                <h5 className='text-light fw-bold' style={{ letterSpacing: "1px" }}>Product  </h5>
            </div>

            <div className="content-section">
                <Button className=' ms-auto btn btn-light text-primary' onClick={handleShow}>
                    Add Cart
                </Button>

                <Modal
                    backdrop="static" className='p-4' keyboard={false} size="lg" show={show} onHide={handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <input className="form__input w-100 mb-3" value={obj.productName} onChange={GetProductval} type="text" placeholder="ProductName" name="productName" />
                        <input className="form__input w-100 mb-3" value={obj.shopName} onChange={GetProductval} type="text" placeholder="ShopName" name="shopName" />

                        <div className='d-flex'>
                            <input className="form__input w-50 me-2 mb-3" value={obj.price} onChange={GetProductval} type="number" placeholder="price" name="price" />
                            <input className="form__input w-50 mb-3" value={obj.discount} onChange={GetProductval} type="number" placeholder="discount" name="discount" />
                        </div>

                        <input className="form__input w-100 mb-3" value={obj.mobile} onChange={GetProductval} type="number" placeholder="Mobile number" name="mobile" />
                        <textarea className="form__input w-100 mb-3  pt-2 " value={obj.discription} onChange={GetProductval} type="text" name='discription' placeholder="discription" />

                        <div className='mb-3 ms-1'>
                            <label htmlFor="" className='me-2 ms-2'>Category : </label>
                            <input type="radio" className='me-2 ms-1' name='category' onChange={GetProductval} checked={obj.category === "Male"} value={"Male"} />Male
                            <input type="radio" className='me-2 ms-1' name='category' onChange={GetProductval} checked={obj.category === "Kids"} value={"Kids"} />Kids
                            <input type="radio" className='me-2 ms-1' name='category' onChange={GetProductval} checked={obj.category === "Female"} value={"Female"} />Female
                        </div>

                        <input className="ms-2" type="color" placeholder="colors " value={obj.colors} onChange={GetProductval} name="colors" /> <br />
                        <input className="ps-2 mt-3 " type="file" onChange={GetProductval} name='productImage' />


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={addCardFun}>Add</Button>
                    </Modal.Footer>
                </Modal>


                <div className="content-section-title">Product in your plan</div>
                <div className="apps-card">


                    <div className="row g-3">
                        {state.Product.Product?.map((x, i) => (
                            <div className='col-lg-4 col-md-6 col-12 position-relative' key={i}>
                                <div className='position-absolute z-3 ' style={{ left: "82%", top: "5px", cursor: "pointer" }}>
                                    <span className='me-2' onClick={() => EditData(x._id)}> <i className="fa-solid fa-pen-to-square"></i></span>
                                    <span onClick={() => DeleteData(x._id)}> <i className="fa-solid fa-trash text-warning "></i></span>
                                </div>
                                <div className="app-card pt-5" key={i}>
                                    <span className='p-0 mb-2' style={{ padding: "0px", margin: "0px" }}> Name : {x.shopName} </span>
                                    <span className='d-flex'>
                                        <img src={x.productImage} width={"90"} height={"70"} style={{ objectFit: "cover", marginRight: "10px" }} alt="" />
                                        <div>
                                            {x.productName} <p>  for : {x.category}</p>
                                        </div>
                                    </span>
                                    <div className='mt-2'>

                                    </div>
                                    <div className="app-card__subtext">
                                        {x.discription}
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <span>price : {x.price} $ </span> <span>Discount : {x.discount}%</span>
                                    </div>
                                    <div className='mt-3'>Mobile : {x.mobile}</div>
                                    <div className="app-card-buttons">
                                        <button className="btn btn-success m-0 p-1 px-3" onClick={() => AddToCart(x)}>
                                            Add To Cart
                                        </button>
                                        <button className="btn btn-success" onClick={() => handleShow3(x._id)}>
                                            Buy now
                                        </button>


                                        <Modal show={show3} onHide={handleClose3}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Buying Items</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <input type="number" name='quantity' className='form__input w-50 w-100' placeholder='Enter quantity' onChange={Getquantity} />
                                            </Modal.Body>
                                            <Modal.Footer>

                                                <Button variant="primary" onClick={GetquantityData}>
                                                    Buy Now
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HocMainCompo(Product);