import React, {useEffect, useState} from 'react';

type Plane ={
    id: number
    nume: string
    year: number
    color: string
}
const Plane = (props: any) =>{
    const [plane,setPlaneInfo]=useState({id:props.id,nume:props.nume,year:props.year,color:props.color});
    useEffect(()=>{
        setPlaneInfo({id: props.id,
        nume:"Turkish",
        year:Math.floor(Math.random()*2000),
        color:"Red"})
    },[props.id]);

    return <p>This is a {plane.color} {plane.nume} plane from {plane.year}</p>
}

export default Plane;