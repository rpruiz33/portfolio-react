import React from 'react'
import './hardCard.scss';

const hardCard = (props) => {
  return (
    <div className="cards-container">
    <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>

  <div className="card-body text-success">
    <h5 className="card-title">
        <div className="mr-333"key={props.index}>{props.items}</div>
        
    </h5>
 
  </div>
  <div className="card-footer bg-transparent border-success m-7">     <div key={props.index}>{props.item}</div>
  </div>
</div>

</div>
  )
}

export default hardCard