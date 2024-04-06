import React,{ useState, useEffect, useRef, useContext } from 'react'
import { AppContext } from '../App'
import './main.css'
import SideMenu from '../components/SideMenu'
import Header from './Header'
import Home from './Home';
import Categories from './Categories';
import MyLibrary from './MyLibrary';
import Bag from './Bag'


function Main() {
  const { library, bag} = useContext(AppContext)

  const [active,setActive] = useState(false);
  const [games,setGames] = useState([])

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const section = [
    {
      name: 'home',
      ref: homeRef,
      active: true,
    },
    {
      name: 'categories',
      ref: categoriesRef,
      active: false,
    },
    {
      name: 'library',
      ref: libraryRef,
      active: false,
    },
    {
      name: 'bag',
      ref: bagRef,
      active: false,
    },
  ]

  const handleToggleActive = () =>{
    setActive(!active);
  }

  const handleSectionActive = target =>{
    section.map(section => {
      section.ref.current.classList.remove('active');
      if(section.ref.current.id === target){
        section.ref.current.classList.add('active');
      }
      return section;
    });
  };

  const fetchData = () => {
    fetch('/api/gamesData.json')
    .then(res=>res.json())
    .then(data=>{
      setGames(data);
    })
    .catch(e => console.log(e.message))
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <main> 
       <SideMenu active={active} sectionActive={handleSectionActive}/>  
       <div className={`banner ${active ? 'active' : undefined}`}>
         <Header toggleActive={handleToggleActive}/>
         <div className="container-fluid">
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef}/>
              <Categories games={games} reference={categoriesRef}/>
              <MyLibrary games={library} reference={libraryRef}/>
              <Bag games={bag} reference={bagRef}/>
            </>
          )}
  
         </div>
       </div> 
    </main>
  )
}

export default Main