import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
  const[cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const getAll=()=>{
    let url = "https://free-food-menus-api-production.up.railway.app/burgers"
    fetch(url)
    .then(res=>res.json())
    .then(res=>setCards(res))
    };
    const openFixedSection = (card) => {
      setSelectedCard(card);
    };
  
    getAll()
  return (
      <main>
        <div className='header'> 
           <div className='first'>  
             <h1>Foodies</h1>
             <img className='food' src="./src/assets/foodies.png" alt="image" srcset=""></img>
           </div>
           <div className='second'>
               <ul>
                <li className='thehome'>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Contact</li>
                <li>Reservation</li>
               </ul>
           </div>
        </div>

        <div className='mainbody'>
           {
            cards.map((props)=>(
              <div className='card'>
              <div className='cardimg'>
                <img className='apiimg' src={props.img} alt="" srcset="" />
              </div>
              <div className='secondstuffs'>
                 <div className='names'>
                 <h2>{props.name}</h2>
                 </div>
                <div className='price'>&#8358;{props.price}</div>

                <div className='btndiv'>
                <button className='btn1' onClick={() => openFixedSection(props)}>View</button>
                  <button className='btn2'>Add to cart</button>
                </div>
                  
                 
              </div>
            </div>
            ))
           }

        </div>

        <div className='Fixed'>
           <div className='fixedimg'>
              <img className='imagefixed' src="./src/assets/bur.png" alt="image" srcset=""/>
            </div>

          <div className='otherfixed'>
          <div className='headerX'>
            <img className='theX' src="./src/assets/imageX.png" alt="image" srcset=""/>
            </div>

            <div className='headname'>
            <h1>Gramercy Tavern</h1>
            </div>

            <div className='description'>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ipsum libero harum praesentium iusto aliquam atque quasi molestiae possimus,
                 ex odio reprehenderit deleniti quis, aut optio assumenda sint blanditiis unde.</h2>
            </div>

            <div className='buttonholder'>
             <button className='btnshop'>Shop Now!</button>
             <button className='backshop'>Back</button>
            </div>

          </div>
        </div>

      </main>
  )
}

export default App;
