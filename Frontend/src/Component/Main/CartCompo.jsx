import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HocMainCompo from './HocMainCompo';
import { useCookies } from 'react-cookie';
import { GetCart, removecart } from '../../Redux/Action/CartAction';
import Swal from 'sweetalert2';

function CartCompo() {
  const state = useSelector(state => state);
  const dispatch = useDispatch()
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const token = { headers: { Authorization: `Bearer ${cookies?.token}` } }




  useEffect(() => {
    dispatch(GetCart(cookies.token));
  }, [])
  // console.log(state.cart.cart)

  const removeCart = (id) => {
    Swal.fire({
      title: "Are you sure !!!",
      showCancelButton: true,
      confirmButtonText: "Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed!", "", "success");
        dispatch(removecart(id, token))
      }
    });

  }
  return (
    <>
<div className='w-100 text-center ms-2 mb-3'>
             <h5 className='text-light fw-bold' style={{letterSpacing:"1px"}}>Cart</h5>
          </div>

      {state.cart.cart?.map((x, i) => (
        <div className="app-card mb-2" key={i}>
          <div className='w-100 d-flex justify-content-between'>
            <div className='mb-3'><h6 style={{ color: "#f2d53c", display: "inline" }}>Name </h6> : {x.productName}</div>
            <h6 className='mt-2'> <p style={{ color: "#f2d53c", display: "inline" }}>Category </p>:{x.category}</h6>
          </div>

          <div className='row g-4'>
            <div className="col-4">
              <div className='border'>
                <img src={x.productImage} style={{ height: "180px", objectFit: "cover", width: "100%" }} alt="" />

              </div>

            </div>
            <div className="col-5">
              <div className='d-flex'> <h6 style={{ color: "#f2d53c", marginRight: "5px" }}>Shop : </h6> {x.shopName} </div><hr />
              <div className="app-card__subtext  p-0 mb-2">
                <span style={{ color: "#f2d53c" }}>Discription</span> {x.discription}
              </div> <hr />
              <div className='d-flex  justify-content-between mb-2'>
                <span className=''><span style={{ color: "#f2d53c" }}>Price</span> : {x.price} $ </span>
                <div><span className='d-inline' style={{ color: "#f2d53c" }}>Discount </span> : {x.discount} %</div>
              </div> <hr />
              <div className='mt-3 d-flex'><span className='m-0 p-0' style={{ color: "#f2d53c" }}>Mobile</span> : {x.mobile}</div><hr />
              <div className="app-card-buttons">

              </div>
            </div>
            <div className="col-3 position-relative">
              <button className="btn btn-warning position-absolute " onClick={() => removeCart(x._id)} style={{ top: "80%", left: "30%" }}>
                Remove Cart
              </button>
            </div>
          </div>

        </div>

      ))}
    </>
  )
}

export default HocMainCompo(CartCompo)
