import React from 'react'

export default function Card() {
  return (
      <div>
           <div className="card m-2 bg-light"  style={{"width": "18rem","padding":"20px"}}>
            <img className="card-img-top" src="https://media.istockphoto.com/id/1327746667/photo/shahi-paneer-or-kadai-paneer.webp?b=1&s=170667a&w=0&k=20&c=8va61-Zs_0vCwegY5rXoWXvIGS-0hovde1AyGAFtMG4=" alt="........" style={{height:"120px",objectFit:"fill"}} />
             <div className="card-body">
              <p className="card-text">Panner Butter Masala </p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg-success rounded text-white'>
                  {Array.from(Array(7),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                 <select className='m-2 h-100 bg-success rounded text-white'>
                    <option value="half">Half</option>
                    <option value="full">Full</option>
                 </select>
                 <div className='d-inline h-100 fs-6'>Total Price</div>
              </div>
             </div>
          </div>
     </div>
  )
}
