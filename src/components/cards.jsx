import React from 'react'
import HardCard from './hardCard.jsx';

const cards = () => {
  return (
<div className="d-flex m-4 row row-cols-1 row-cols-md-1 g-2 p-4 m-8">
        <HardCard />
        <HardCard />
        <HardCard />
        <HardCard />
</div>
  )
}

export default cards