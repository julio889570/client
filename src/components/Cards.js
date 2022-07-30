import React, { useState } from 'react';
import Modals from './Modals';
import "./modals.css";

export default function Cards({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  return (
    <>
      {
        book.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
          let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if(thumbnail !== undefined && amount !== undefined){
            return (
              <>
              <div className='card' onClick={()=>{setShow(true);setBookItem(item)}}>
                <img src={thumbnail} alt='' />
                <div className='bottom'>
                  <h3 className='title'>{item.volumeInfo.title}</h3>
                  <p className='amount'>&#8377; {amount} </p>
                </div>
              </div>
              <Modals show={show} item={bookItem} onClose={()=>setShow(false)}/>
              </>
            )  
          }
        })
      }

    </>
  )
}

