import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCompleteorderAction } from '../../Redux/Action/CompleteOrder'
import HocMainCompo from './HocMainCompo';
import { useCookies } from 'react-cookie';

function ComplateOrder() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const token = { headers: { Authorization: `Bearer ${cookies?.token}`} }
    const state = useSelector(state=> state)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(GetCompleteorderAction(token));
    },[])


    console.log(state.completeorder.CompleteData);
  return (
    <>    <>
    <div className='w-100 text-center ms-2 mb-3'>
         <h5 className='text-light fw-bold' style={{letterSpacing:"1px"}}>Completed Order  </h5>
      </div>
    <div className='app-card w-100 '>
            <table className='w-100 table table-dark'>
                <thead>
                    <tr>
                        <th className='text-warning'>image</th>
                        <th className='text-warning'>product name</th>
                        <th className='text-warning'>price</th>
                        <th className='text-warning'>quentity</th>
                        <th className='text-warning'>totalprise</th>
                        <th className='text-warning'>discount</th>
                        <th className='text-warning'>Status</th>
                    </tr>
                </thead>
                <tbody >
                  {state.completeorder.CompleteData.map((x,i)=> (
                      <tr key={i} className='align-baseline'>
                      <td className=''>
                          <img src={x.productImage}  style={{width:"50px",height:"50px",objectFit:"cover"}} alt="" />
                      </td>
                      <td className=''>{x.productName}</td>
                      <td className=''>{x.price} %</td>
                      <td className=''>{x.quantity}</td>
                      <td className=''>{x.totalPrice}</td>
                      <td className=''>{x.discount} %</td>
                      <td className='text-success'>Success</td>
                  </tr>
                  ))}
                </tbody>
                 </table>
    </div>
</>
    <>
        <div className='w-100 text-center ms-2 mb-3'>
             <h5 className='text-light fw-bold' style={{letterSpacing:"1px"}}>Completed Order  </h5>
          </div>
        <div className='app-card w-100 '>
                <table className='w-100 table table-dark'>
                    <thead>
                        <tr>
                            <th className='text-warning'>image</th>
                            <th className='text-warning'>product name</th>
                            <th className='text-warning'>price</th>
                            <th className='text-warning'>quentity</th>
                            <th className='text-warning'>totalprise</th>
                            <th className='text-warning'>discount</th>
                            <th className='text-warning'>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                      {state.completeorder.CompleteData.map((x,i)=> (
                          <tr key={i} className='align-baseline'>
                          <td className=''>
                              <img src={x.productImage}  style={{width:"50px",height:"50px",objectFit:"cover"}} alt="" />
                          </td>
                          <td className=''>{x.productName}</td>
                          <td className=''>{x.price} %</td>
                          <td className=''>{x.quantity}</td>
                          <td className=''>{x.totalPrice}</td>
                          <td className=''>{x.discount} %</td>
                          <td className='text-success'>Success</td>
                      </tr>
                      ))}
                    </tbody>
                     </table>
        </div>
    </>
    </>

  )
}

export default HocMainCompo(ComplateOrder)