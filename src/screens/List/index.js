import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

import Modal from '../../components/Modal';

import SearchInput from '../../components/SearchInput';

import { useSelector } from 'react-redux';

import Pagination from '../../components/Pagination';

import './styles.css';

const api = 'https://randomuser.me/api/';

const LIMIT = 12;

function List() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0);

  const userInfo = useSelector(state => state.users);
  const [info, setInfo] = useState(userInfo);

  const date = new Date()
  const formatDate = () => {
    const dateFormat = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

    return dateFormat;
  }

  useEffect(() => {
    const query = {
      page: {
        limit: LIMIT,
        offset
      }
    };

    if (text) {
      query.filter = {
        text
      }
    }
    fetch(`${api}/?results=${8}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      })
  }, [text, offset])
  const userDetailSimple = info.results?.map((u) => u)
  const userDetail = userDetailSimple?.find(u => u.id)
  console.log(userDetail)
  if(!userDetail) return null
  //const userDetail = info.results?.find(data => data.id)
 
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


            {text && !info.data ? (
              <div className="flex align-center justify-center p-8">
                <div className="loading"></div>
                <strong className="text-gray-600 pl-2">Loading more...</strong>
              </div>
            )
              :
              <>
                {info.results?.map((item) => {
                  return (
                    <ul className="flex list-row" key={item.id}>
                      <li
                        className="border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center"
                      >
                        <p className="text-gray-600">{item.name.first}{item.name.last}</p>
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
                        
                        <span
                          className="bg-gray-600 cursor-pointer text-center rounded p-2 w-1/2"
                          onClick={() => setShowModal(true)}
                        >
                          <strong className="text-white">View</strong>
                        </span>
                    
                      </li>

                    </ul>

                  )
                })}
              </>
            }


          </div>


        </div>
      </div>

      {showModal && <Modal show={() => setShowModal(false)} user={userDetail} />}


      {info?.results && (
        <Pagination
          limit={LIMIT}
          total={info}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </div>
  )
}

export default List