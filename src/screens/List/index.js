import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import Modal from '../../components/Modal';

import Pagination from '../../components/Pagination';

import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../store/fetchActions';

import './styles.css';

function List() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [loading,] = useState(false);

    const userInfo = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    const [searchField, setSearchField] = useState(userInfo);

    const date = new Date()
    const formatDate = () => {
        const dateFormat = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

        return dateFormat;
    }

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    const filtered = e => {
        const info = e.target.value;

        if (info !== '') {
            const results = userInfo.filter((user) => {
                return user.name.first.toLowerCase().startsWith(info.toLowerCase());
            });
            setSearchField(results);
        } else {
            setSearchField(userInfo);
        }

        setName(info);
    };


    return (
        <div>
            <Header />
            <div className="flex justify-center align-center">
                <div className="justify-center align-center w-3/6 p-16 data-container">
                    <strong className="text-gray-600 flex align-center justify-center">
                        Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Porro quisquam cupiditate dolore sunt,
                        minus nobis temporibus totam, <br /> libero incidunt neque nemo ipsam maxime odio,
                        sed omnis amet? Eveniet, ratione ipsa.
                    </strong>

                    <div className="justify-center align-center flex mt-8 mb-8 relative">
                        <input className="border-2 p-2 rounded w-full pr-8 border-gray-400" type="text" value={name} onChange={filtered} />
                        <i className="fas fa-search absolute right-0 top-1 cursor-pointer p-2 text-gray-600" width="30px" height="30px" />
                    </div>

                    {
                        loading
                            ?
                            <div className="flex align-center justify-center p-8">
                               <div className="loading"></div>
                                <strong className="text-gray-600 pl-2">Loading more...</strong>
                            </div>
                            :

                            <div className="border-2 border-gray-600 rounded list">
                                <ul className="flex list-header">
                                    <li
                                        className="border-b-2 border-r-2 border-gray-600 p-2 w-1/4 bg-gray-400 flex align-center justify-center"
                                    >
                                        <strong className="text-gray-600">Name</strong>
                                    </li>
                                    <li
                                        className="border-b-2 border-r-2 border-gray-600 p-2 w-1/4 bg-gray-400 flex align-center justify-center"
                                    >
                                        <strong className="text-gray-600">Gender</strong>
                                    </li>
                                    <li
                                        className="border-b-2 border-r-2 border-gray-600 p-2 w-1/4 bg-gray-400 flex align-center justify-center"
                                    >
                                        <strong className="text-gray-600">Birth</strong>
                                    </li>
                                    <li
                                        className="border-b-2 border-gray-600 p-2 w-1/4 bg-gray-400 flex align-center justify-center"
                                    >
                                        <strong className="text-gray-600">Actions</strong>
                                    </li>
                                </ul>

                                {searchField && searchField.length > -1 ?
                                    (
                                        <>
                                            {userInfo?.map((item, i) => {
                                                return (
                                                    <ul className="flex list-row" key={i}>
                                                        <li
                                                            className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
                                                        >
                                                            <p className="text-gray-600">{item.name.first}</p>
                                                        </li>
                                                        <li
                                                            className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
                                                        >
                                                            <p className="text-gray-600">{item.gender}</p>
                                                        </li>
                                                        <li
                                                            className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
                                                        >
                                                            <p className="text-gray-600">{formatDate(item.dob.date)}</p>
                                                        </li>
                                                        <li
                                                            className="border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
                                                        >
                                                            <span className="bg-gray-600 cursor-pointer text-center rounded p-2 w-1/2" onClick={() => setShowModal(true)}>
                                                                <strong className="text-white">View</strong>
                                                            </span>
                                                        </li>
                                                    </ul>

                                                )
                                            })}
                                        </>
                                    )
                                    : (
                                        <div className="flex justify-center p-2">
                                            <h2>No results found!</h2>
                                        </div>
                                    )
                                }

                            </div>

                    }
                </div>
            </div>

            {showModal && (
                <Modal modalShow={() => setShowModal(false)} />
            )}

                <Pagination />
        </div>
    )
}

export default List