import React, { useState, useEffect } from 'react';

import './Modal.css';

import { useDispatch } from 'react-redux';

import { getUserFetch } from '../store/fetchActions';

function Modal({ closeModal, id, fistName, lastName, thumbnail, email, gender, date, address, phone  }) {
  const [isFetching] = useState(false)


  const dispatch = useDispatch()

  useEffect(() => {
    (getUserFetch(id))
  }, [id, dispatch])


  if (isFetching) {
    return (
      <div className="absolute w-full top-0"
        style={{
          backgroundColor: 'rgba(109, 124, 136, 0.9)', position: 'fixed', top: 0, bottom: 0
        }}>
        <div className="flex justify-center modal p-16">
          <div className="w-1/3 mb-16, h-full bg-white rounded card">
            <h2>Loading more</h2>
            <p>wait...</p>
          </div>
        </div>
      </div>
    )
  }
  if (!id) return null

  return (
    <div className="modal-bg">
      <div className="flex justify-center modal p-16 h-full">
        <div className="w-1/3 mb-16, h-full bg-white rounded card">
          <div>
            <div className="flex justify-center relative">
              <div className="bg-gray-200 w-20 h-20 rounded-full mt-4 absolute picture" style={{ top: -50 }}>
                <img src={thumbnail} alt="" height={80} width={80} className="rounded-full" />
              </div>
              <i onClick={closeModal} className="fas fa-times absolute right-1 top-1 cursor-pointer p-2 text-gray-600" width="30px" height="30px" />
            </div>
            <div className="p-8 mt-8">
              <div className="flex p-2">
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Name</strong>
                <p>{fistName} {lastName}</p>
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Email</strong>
                <p>{email}</p>
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Gender</strong>
                <p>{gender}</p>
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Birth date</strong>
                <p>{(new Date(date)).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
              </div>

              <div className="flex p-2 item">
                <strong className="text-gray-600 pr-4">Address:</strong>
                <p>{address}</p>
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Phone</strong>
                <p>{phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;