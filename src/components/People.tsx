import React from 'react';

const People: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <PeopleCard name="Anderson Carlos" position="BSc Student"/>
            <PeopleCard name="André Anjos" position="Coordenador"/>
            <PeopleCard name="Bruno Pires" position="BSc Student"/>
            <PeopleCard name="Dilermando Queiroz Neto" position="PhD Student"/>
            <PeopleCard name="Gabriel Dias Dadalto" position=""/>
            <PeopleCard name="Giuliana Prado Peixoto" position=""/>
            <PeopleCard name="Gökhan Özbulak" position="PhD Student"/>
            <PeopleCard name="Isabela Amaro" position="MSc Student"/>
            <PeopleCard name="Jadson" position=""/>
            <PeopleCard name="Lilian Berton" position="Coordenador"/>
            <PeopleCard name="Maíra Fatoretto" position="Postdoc Student"/>
            <PeopleCard name="Savio Mendes" position=""/>
        </div>
    );
};

interface PeopleProps {
    name: string;
    position: string;
}

const PeopleCard: React.FC<PeopleProps> = ({ name, position}) => {
    return (
        <div className="self-stretch mb-4 grow shrink basis-0 flex-col justify-start items-start flex">
            <div className=" text-2xl font-normal font-['Inter']">{name}</div>
            <div className=" text-xs font-normal font-['Inter']">{position}</div>
        </div>
    );
}

export default People;