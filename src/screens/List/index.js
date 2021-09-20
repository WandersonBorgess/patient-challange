import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

import Modal from '../../components/Modal';

import SearchInput from '../../components/SearchInput';

import Pagination from '../../components/Pagination';

import { useSelector, useDispatch } from 'react-redux';

import { getAllUsers } from '../../store/fetchActions';

import './styles.css';

import PatientData from './components/PatientData';

const LIMIT = 12;

function List() {
  const [isFetching, setFetching] = useState(false)
  const [openUserId, setOpenUser] = useState();
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.users.find((user) => user.id === openUserId))

  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const query = { nat: 'us', inc: 'id,name,gender,dob', results: LIMIT, offset }

    setFetching(true)
    dispatch(getAllUsers(), { params: query })
    setFetching(false)

  }, [dispatch, offset])
  return (
    <>
      <Header
        title="Company"
      />
      <div className="flex justify-center align-center">
        <div className="justify-center align-center w-3/6 p-16 data-container">
          <strong className="text-gray-600 flex align-center justify-center">
            Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Porro quisquam cupiditate dolore sunt,
            minus nobis temporibus totam, <br /> libero incidunt neque nemo ipsam maxime odio,
            sed omnis amet? Eveniet, ratione ipsa.
          </strong>


          <SearchInput
            value={text}
            onChange={(search) => setText(search)}
          />


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


            {
              isFetching
                ? (
                  <div className="flex align-center justify-center p-8">
                    <div className="loading"></div>
                    <strong className="text-gray-600 pl-2">Loading more...</strong>
                  </div>
                )
                :
                <>
                  {
                    users
                      .filter(item => !text || `${item.name?.first} ${item.name?.last}`
                        .includes(text)).map((item, i) => {
                          return (
                            <PatientData
                            key={i}
                              firstName={item.name.first}
                              lastName={item.name.last}
                              gender={item.gender}
                              date={item.dob.date}
                              onClick={() => setOpenUser(item.id)}
                            />
                          )
                        })
                  }
                </>
            }
          </div>

        </div>
      </div>

      {
        users && (
          <Pagination
            limit={LIMIT}
            total={users}
            offset={offset}
            setOffset={setOffset}
          />
        )
      }
      <Modal
        closeModal={() => setOpenUser(undefined)}
        id={openUserId}
        thumbnail={user?.picture.thumbnail}
        gender={user?.gender}
        address={user?.location.street.name}
        date={user?.dob.date}
        fistName={user?.name.first}
        lastName={user?.name.last}
        phone={user?.phone}
        email={user?.email}
      />
    </>
  )
}

export default List