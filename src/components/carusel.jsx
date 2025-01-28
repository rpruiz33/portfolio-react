import React from 'react'

const carusel = () => {
  return (
    <div id="carouselExampleCaptions" className="container carousel slide d-flex">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active text-center">
      <img src="https://media.licdn.com/dms/image/v2/C4E03AQHNOXD-nEKmgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639681377888?e=1743638400&v=beta&t=Yu3lzzG3ukvuxT3noL1EONtyGczTsa-kT9v-jkx09vM" className="w-80 text-center " alt="..." />
      <div className="carousel-caption d-none d-md-flex ms-flex text-center">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.licdn.com/dms/image/v2/C4E03AQHNOXD-nEKmgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639681377888?e=1743638400&v=beta&t=Yu3lzzG3ukvuxT3noL1EONtyGczTsa-kT9v-jkx09vM" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.licdn.com/dms/image/v2/C4E03AQHNOXD-nEKmgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639681377888?e=1743638400&v=beta&t=Yu3lzzG3ukvuxT3noL1EONtyGczTsa-kT9v-jkx09vM" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default carusel