import React from "react";

interface Prices {
    corte: string;
    precio: string;
}

const Prices: React.FC<Prices> = ({ corte, precio }) => {
    return (
        <div className='flex justify-between w-[90vw] max-w-[400px]'>
            <p className='font-semibold text-[24px] ts-sm'>{corte}</p>
            <p className='font-semibold text-blue-500 text-[24px] ts-sm'>{precio}</p>
        </div>
    );
}

export default Prices;