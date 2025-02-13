import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    image: string;
    text: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ image, text, link }) => {
    return (
        <Link to={link} className="group">
            <div className="relative bg-transparent transform transition-transform hover:scale-103">
                <img
                    src={image}
                    alt={text}
                    className="w-max aspect-square object-cover group-hover:opacity-90 shadow-xl"
                />
                <div className="bg-red-700 -bottom-5 -right-5 text-center absolute shadow-xl w-60 h-18 p-0 m-0 items-center justify-center flex sm:-bottom-5 sm:-right-5 sm:w-40 md:w-60 lg:w-40 xl:w-60 xl:h-16">
                    <h3 className="text-white font-bold m-0 xl:text-lg">{text}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Card;