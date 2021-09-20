import React from 'react';


const PatientData = ({ firstName, lastName, gender, date, onClick }) => {
    return (
        <ul className="flex list-row">
            <li
                className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
            >
                <div>
                    <strong className="text-gray-600">{firstName}</strong>
                    <strong className="text-gray-600 pl-2">{lastName}</strong>
                </div>
            </li>
            <li
                className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
            >
                <p className="text-gray-600">{gender === 'male' ? 'Male' : 'Female'}</p>
            </li>
            <li
                className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
            >
                <p className="text-gray-600">{(new Date(date)).toLocaleString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
            </li>
            <li
                className="border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
            >
                <span
                    className="bg-gray-600 cursor-pointer text-center rounded p-2 w-1/2"
                    onClick={onClick}
                >
                    <strong className="text-white">View</strong>
                </span>

            </li>
        </ul>

    )
}

export default PatientData;