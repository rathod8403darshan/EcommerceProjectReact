import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteorderAction, GetorderAction } from '../../Redux/Action/OrderAction';
import { useCookies } from 'react-cookie';
import HocMainCompo from './HocMainCompo';
import Swal from 'sweetalert2';

function Order() {

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const token = { headers: { Authorization: `Bearer ${cookies?.token}`} }
  const dispatch = useDispatch();
  const state = useSelector(state=> state);
  
  useEffect(()=> {
    dispatch(GetorderAction(token));
  },[])
    console.log(state.order.order);

    const DeleteData1 = (id)=> {
        
        // console.log(id)

        Swal.fire({
          title: "Are you sure !!!",
          showCancelButton: true,
          confirmButtonText: "Delete",
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire("Delete!", "Delete");
              dispatch(DeleteorderAction(token,id))
          }
      });
    }
  return (
    <>  
           <div className='w-100 text-center ms-2 mb-3'>
             <h5 className='text-light fw-bold' style={{letterSpacing:"1px"}}>Your Order  </h5>
          </div>
        { state.order.order?.map((x,i)=>(
           <div className="app-card mb-2" key={i}>

           <div className='position-absolute z-3 ' style={{ left: "97%", top: "9px", cursor: "pointer" }}>
                                   <span onClick={() => DeleteData1(x._id)}> <i className="fa-solid fa-trash text-warning "></i></span>
            </div>

         <div className='w-100 d-flex justify-content-between'>
           <div className='mb-3'><h6 style={{ color: "#f2d53c", display: "inline" }}>Name  : </h6> {x.shopName} </div>
         </div>

         <div   className='row g-4'>
           <div className="col-2">
             <div className='border'>
               <img src={x.productImage} style={{ height: "95px", objectFit: "cover", width: "100%" }} alt="" /> <br />
             </div>
               <h6 className='ms-5 mt-2 '>{x.category}</h6>
           </div>
           <div className="col-10">
           <div className='d-flex  justify-content-between mb-2'>
               <span className=''><span style={{ color: "#f2d53c" }}>Product Name</span> : {x.productName}$ </span>
              
             </div> <hr />
             <div className='d-flex  justify-content-between mb-2'>
               <span className=''><span style={{ color: "#f2d53c" }}>Price</span> : {x.price} $ </span>
               <div><span className='d-inline' style={{ color: "#f2d53c" }}>Discount </span> : {x.discount}%</div>
               <div><span className='d-inline' style={{ color: "#f2d53c" }}>Quntity</span> :  {x.quantity} pc</div>
               <div><span className='d-inline' style={{ color: "#f2d53c" }}>Total Prise </span> : {x.totalPrice}$</div>
             </div> <hr />
           
             <div className='mt-3 d-flex justify-content-between'><div className='d-flex'><span className='m-0 p-0' style={{ color: "#f2d53c" }}>Mobile : </span> {x.mobile}</div><span><span className='m-0 p-0' style={{ color: "#f2d53c" }}>Status :</span> Panding</span> </div><hr />
            
           </div>
         
         </div>

       </div>
        ))  }

        {/* {state?.order?.order?.map((x)=>{
          return (
            console.log(x)
          )
        })} */}

    </>
  )
}

export default HocMainCompo(Order)
