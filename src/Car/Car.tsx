import React, {useEffect} from 'react';

type Car ={
    id: number
    nume: string
    year: number

}
const Car = (props: Car) => {
    const data=new Date();
    return <p>This is a {props.nume} from {props.year}</p>
}


export default Car;