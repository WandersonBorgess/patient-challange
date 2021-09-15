import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../store/fetchActions';

import './Modal.css';

function Modal({ modalShow }) {
    const date = new Date()
    const formatDate = () => {
        const dateFormat = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

        return dateFormat;
    }
    const userInfo = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])
    
    return (
        <div className="absolute top-0 left-0 right-0" style={{ backgroundColor: 'rgba(109, 124, 136, 0.9)', zIndex: 5 }}>
            <div className="flex align-center justify-center h-screen modal">
                <div className="w-1/3 mt-16 mb-16 bg-white rounded overflow-y-auto card">

                    {userInfo?.map((item) => {
                        return (
                            <div key={item.id.value}>
                                <div className="flex justify-center relative">
                                    <div className="bg-gray-200 w-20 h-20 rounded-full mt-4">
                                        <img src={item.picture.thumbnail} alt="" height={80} width={80} className="rounded-full" />
                                    </div>
                                    <i onClick={modalShow} className="fas fa-times absolute right-1 top-1 cursor-pointer p-2 text-gray-600" width="30px" height="30px" />
                                </div>
                                <div className="p-8">
                                    <div className="flex p-2">

                                        <strong className>ID: {item.id.name}</strong>
                                    </div>
                                    <div className="flex-column p-2">
                                        <p className="text-gray-600">Name</p>
                                        <strong>{item.name.first} {item.name.last}</strong>
                                    </div>
                                    <div className="flex-column p-2">
                                        <p className="text-gray-600">Email</p>
                                        <strong>{item.email}</strong>
                                    </div>
                                    <div className="flex-column p-2">
                                        <p className="text-gray-600">Gender</p>
                                        <strong>{item.gender}</strong>
                                    </div>
                                    <div className="flex-column p-2">
                                        <p className="text-gray-600">Date</p>
                                        <strong>{formatDate(item.dob.date)}</strong>
                                    </div>
                                    <div className="flex-column p-2">
                                        <p className="text-gray-600">Address</p>
                                        <strong>
                                            City: {item.location.city} <br />
                                            Country: {item.location.country} <br />
                                            State: {item.location.state} <br />
                                            Street: {item.location.street.name} <br />
                                            Number: {item.location.street.number} <br />
                                            Postcode: {item.location.postcode} <br />
                                            Description: {item.location.timezone.description} <br />
                                        </strong>
                                    </div>
                                    <div className="flex-column p-2">
                                        <p className="text-gray-600">Phone</p>
                                        <strong>{item.cell}</strong>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Modal;