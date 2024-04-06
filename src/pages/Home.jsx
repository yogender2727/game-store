import React from 'react'
import './home.css'
import GameSwipper from '../components/GameSwipper'
import GameCard from '../components/GameCard'

function Home({ games, reference }) {
  return (
    <section id="home" className='home active' ref={reference}>
      <div className="container-fluid">
        <div className="row">
          <GameSwipper games={games} />
        </div>
        <div className="row mb-4 mt-4">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on Promotion</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#" className='viewMore'>
              View More Games <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row">
          {games.slice(0, 4).map(game => (
            <GameCard key={game._id} game={game} />
          ))}
          {/* Added parentheses and return statement */}
        </div>
      </div>
    </section>
  )
}

export default Home