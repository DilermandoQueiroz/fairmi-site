import React from 'react';

const People: React.FC = () => {
    const people = [
        { name: "Anderson Carlos", position: "BSc Student", institution: "IFG" },
        { name: "André Anjos", position: "Coordinator", institution: "Idiap" },
        { name: "Bruno Pires", position: "BSc Student", institution: "Unifesp" },
        { name: "Dilermando Queiroz Neto", position: "PhD Student", institution: "Unifesp" },
        { name: "Gabriel Dias Dadalto", position: "Master Student", institution: "Unifesp" },
        { name: "Giuliana Prado Peixoto", position: "BSc Student", institution: "Unifesp" },
        { name: "Gökhan Özbulak", position: "PhD Student", institution: "Idiap" },
        { name: "Isabela Amaro", position: "MSc Student", institution: "Unifesp" },
        { name: "Lilian Berton", position: "Coordinator", institution: "Unifesp" },
        { name: "Maíra Fatoretto", position: "Postdoc Student", institution: "Unifesp" },
        { name: "Savio Mendes", position: "BSc Student", institution: "Unifesp" },
        { name: "Oscar Jimenez", position: "Postdoc Student", institution: "Idiap" },
        { name: "Marcelo Tatit Sapienza", position: "Collaborator", institution: "FM-USP" },
        { name: "Carlos Alberto Buchpiguel", position: "Collaborator", institution: "FM-USP" },
        { name: "Anete Trajman", position: "Collaborator", institution: "FM-UFRJ" }
    ];

    const positionPriority: { [key: string]: number } = {
        "Coordinator": 1,
        "Collaborator": 2,
        "Postdoc Student": 3,
        "PhD Student": 4,
        "MSc Student": 5,
        "Master Student": 6,
        "BSc Student": 7,
        "Undergraduate Student": 8,
        "": 9 // For positions that are empty
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
                <PeopleCard 
                    key={person.name} 
                    name={person.name} 
                    position={`${person.position} from ${person.institution}`} 
                />
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