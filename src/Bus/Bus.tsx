import React from 'react';

type Bus= {
    id: number;
    color: string;
}

const Bus= (props: Bus) => {
    return <p>This is a {props.color} bus</p>;
}

export default Bus;