import React, {useContext, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Car from "./Car/Car";
import Plane from "./Plane/Plane";
import Bus from "./Bus/Bus";
import ColorContext from "./Context/ColorContext";

const App = () => {
    const colorContext = useContext(ColorContext);
    const [idNew,setId]=useState(0);
  const [cars,setCars]=useState([
      {id:1,nume:'Mercedes',year:2020},
    {id:2,nume:'BMW',year:2019},
    {id:3,nume:'Mustang',year:2017}]);

  const [planes, setPlane]=useState([
      {id:1,nume:"Tarom",year:2019,color:"blue"},
      {id:2,nume:"Wizz Air",year:2020,color:"pink"}
  ]);

    const [buses, setBus]=useState([
        {id:1,color:colorContext},
        {id:2,color:colorContext}
    ]);

  const [shouldHide, setVisibility]=useState("hidden");
  const [date,setDate]=useState(new Date().toString());
  const [homeLink,setHomeLink]=useState("Home");

  const updateIdPlane= ()=>{
      setId(idNew+1);
      console.log(idNew);
      showPlane();
    }
  const showPlane= () => {
      setVisibility("");
  }
  const addMyCar=() => {
    setCars([...cars,{id:4, nume: 'Porsche', year:2020}]);
  };

  const addCar=(car: Car) =>{
      setCars([...cars,car]);
    };

  const changeHomeLink=(link:React.ChangeEvent<HTMLInputElement>)=>{
      console.log("here");
        setColor(link.target.value);
        setBus([{id:1,color:link.target.value},{id:2,color:link.target.value}]);
  };


    useEffect(() => {
        setDate(new Date().toString());
    }, [cars]);

    const [color, setColor] = useState(colorContext);



  return (
    <div className="App">
      <header className="App-header">
          <div>{date}</div>
          <input type="text" value={color} onChange={(event)=>changeHomeLink(event)}></input>
          <div>
              {buses.map((bus)=>{return <Bus id={bus.id} color={bus.color}/>;})}
          </div>
          <div>
              {<Plane id={planes[0].id} nume={planes[0].nume} year={planes[0].year} color={planes[0].color} />}
              <button onClick={()=> updateIdPlane()}>Click me for more info</button>
          </div>
          <div>
              {<Plane id={planes[1].id} nume={planes[1].nume} year={planes[1].year} color={planes[1].color}/>}
              <button onClick={()=> updateIdPlane()}>Click me for more info</button>
          </div>


          <h3>Info</h3>
          <div className={shouldHide ? 'hidden' : ''}>{<Plane id={idNew}/>}</div>



          <div>
             {cars.map((car) => {return <Car id={car.id} nume={car.nume}  year={car.year} key={car.id}/>;})}
          </div>
          <div>
              <button onClick={addMyCar}>Buy a Porsche</button></div>
          <div>
              <button onClick={() => addCar({id:8,nume:'Audi',year:2016}) }>Buy an Audi</button>
          </div>
          <div>{homeLink}</div>
      </header>

    </div>
  );
}

export default App;
