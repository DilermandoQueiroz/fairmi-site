import React from 'react';

const People: React.FC = () => {
    const people = [
        { name: "Anderson Carlos", position: "BSc Student" },
        { name: "André Anjos", position: "Coordenador" },
        { name: "Bruno Pires", position: "BSc Student" },
        { name: "Dilermando Queiroz Neto", position: "PhD Student" },
        { name: "Gabriel Dias Dadalto", position: "" },
        { name: "Giuliana Prado Peixoto", position: "" },
        { name: "Gökhan Özbulak", position: "PhD Student" },
        { name: "Isabela Amaro", position: "MSc Student" },
        { name: "Jadson", position: "" },
        { name: "Lilian Berton", position: "Coordenador" },
        { name: "Maíra Fatoretto", position: "Postdoc Student" },
        { name: "Savio Mendes", position: "" },
        { name: "Oscar Jimenez", position: "Postdoc Student" }
    ];

    const positionPriority: { [key: string]: number } = {
        "Coordenador": 1,
        "Postdoc Student": 2,
        "PhD Student": 3,
        "MSc Student": 4,
        "BSc Student": 5,
        "": 6 // For positions that are empty
    };

    const sortedPeople = people.sort((a, b) => {
        const priorityA = positionPriority[a.position] || 100;
        const priorityB = positionPriority[b.position] || 100;
        
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }
        return a.name.localeCompare(b.name);
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pb-[50px]">
            {sortedPeople.map((person) => (
                <PeopleCard key={person.name} name={person.name} position={person.position} />
            ))}
        </div>
    );
};

interface PeopleProps {
    name: string;
    position: string;
}

const PeopleCard: React.FC<PeopleProps> = ({ name, position }) => {
    return (
        <div className="self-stretch mb-4 grow shrink basis-0 flex-col justify-start items-start flex">
            <div className="text-2xl">{name}</div>
            <div className="text-xs">{position}</div>
        </div>
    );
}

export default People;