import React from 'react'
import HardCard from './hardCard.jsx';
const formacion= [
  "Estudiante de Licenciatura en Sistemas UNLa",
  "Desarrollador Full Stack Web Digital House",
  "Tecnico electronico"]
const LugaresEstudio = [
  "Universidad Nacional De Lanus",
  "Digital House",
  "Escuela Tecnica N°9 Lanus"
]
const cards = () => {
  return (
<div className="d-flex justify-content-center align-items-center m-1 row row-cols-1 row-cols-md-4 g-2 p-4 m-8">


<HardCard key={1} items={formacion[0]} item={LugaresEstudio[0]} />
<HardCard key={2} items={formacion[1]} item={LugaresEstudio[1]}/>
<HardCard key={3} items={formacion[2]} item={LugaresEstudio[2]}/>
</div>
  )
}

export default cards