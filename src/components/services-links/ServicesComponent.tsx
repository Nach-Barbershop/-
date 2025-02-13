import React from "react";

interface Corte {
    id: number;
    src: string;
    alt: string;
}

interface ServicesComponentProps {
    cortes: Corte[];
}

const ServicesComponent: React.FC<ServicesComponentProps> = ({ cortes }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
            {cortes.map((corte) => (
                <div key={corte.id} className="rounded-lg shadow-lg hover:shadow-xl transition">
                    <img
                        src={corte.src}
                        alt={corte.alt}
                        className="w-full h-auto rounded-t-lg aspect-square sm:w-[47vw] md:w-[31vw] lg:w-[23vw] lg:max-w-[350px]"
                    />
                    <div className="flex justify-between">
                        <p className="min-w-[40px] h-[40px] font-bold text-[20px] text-gray-900 bg-blue-500 flex items-center justify-center rounded-bl-[7px]">{corte.id}</p>
                        <p className="w-full p-2 text-gray-700 font-semibold bg-blue-200 rounded-br-[7px]">{corte.alt}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesComponent;