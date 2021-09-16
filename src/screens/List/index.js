import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

import Modal from '../../components/Modal';

import SearchInput from '../../components/SearchInput';

import Pagination from '../../components/Pagination';

import { getAllUsers } from '../../store/fetchActions';
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';

//import api from '../../services/api';

const LIMIT = 12;

function List() {
  const [isFetching, setFetching] = useState(false)
  const [openUserId, setOpenUser] = useState();
  const response = useSelector((state) => state.users);

  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);
  const [patients, setPatients] = useState([])
  
  const dispatch = useDispatch();

  /*
  
  async function fetchAPI(query) {
    setFetching(true)
    const response = await api.get('', { params: query })
    setFetching(false)

    if (response.data && response.data.results) {
      setPatients(response.data.results)
    }
  }

  useEffect(() => {
    const query = { nat: 'br', inc: 'id,name,gender,dob', results: LIMIT, offset }
    fetchAPI(query)
  }, [offset])
  */

  async function fetchAPI() {
    setFetching(true)
    await dispatch(getAllUsers())
    setFetching(false);

    if(response.data && response.data.results) {
      setPatients(response.data.results)
    }
  }

  useEffect(() => {
    const query = { nat: 'br', inc: 'id,name,gender,dob', results: LIMIT, offset }
    fetchAPI(query)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])



  return (
    <>
      <Header />
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
                    response
                      .filter(item => !text || `${item.name.first} ${item.name.last}`
                        .includes(text)).map((item, i) => {
                          return (
                            <ul className="flex list-row" key={i}>
                              <li
                                className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
                              >
                                <div>
                                  <strong className="text-gray-600">{item.name?.first}</strong>
                                  <strong className="text-gray-600 pl-2">{item.name?.last}</strong>
                                </div>
                              </li>
                              <li
                                className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
                              >
                                <p className="text-gray-600">{item.gender === 'male' ? 'Male' : 'Female'}</p>
                              </li>
                              <li
                                className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
                              >
                                <p className="text-gray-600">{(new Date(item.dob?.date)).toLocaleString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
                              </li>
                              <li
                                className="border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
                              >
                                <span
                                  className="bg-gray-600 cursor-pointer text-center rounded p-2 w-1/2"
                                  onClick={() => setOpenUser(item.id)}
                                >
                                  <strong className="text-white">View</strong>
                                </span>

                              </li>

                            </ul>
                          )
                        })
                  }
                </>
            }
          </div>
        </div>
      </div>

      {
        patients && (
          <Pagination
            limit={LIMIT}
            total={patients.length}
            offset={offset}
            setOffset={setOffset}
          />
        )
      }
        <Modal closeModal={() => setOpenUser(undefined)} userId={openUserId} />
    </>
  )
}

export default List