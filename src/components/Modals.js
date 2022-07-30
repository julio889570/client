import React from 'react'

export default function Modals({show, item, onClose}) {
    if(!show){
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
  return (
    <div>
      <div className='overlay'>
        <div className='overlay-inner'>
            <button className='close' onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
            <div className='inner-box'>
                <img src={thumbnail} alt=''/>
                <div className='info'>
                    <h1>{item.volumeInfo.title}</h1>
                    <h3>{item.volumeInfo.author}</h3>
                    <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publisherDate}</span></h4><br/>
                    <a href={item.volumeInfo.previewLink}><button>More</button></a>
                </div>

            </div>
            <h4 className='description'>{item.volumeInfo.description}</h4>
        </div>
      </div>
    </div>
  )
}
