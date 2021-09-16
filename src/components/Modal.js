import React, { useState, useEffect } from 'react';

import './Modal.css';

import api from '../services/api';

function Modal({  closeModal, userId }) {
  const [user, setUser] = useState()
  const [isFetching, setFetching] = useState(false)
  
  async function fetchAPI(userId) {
    setFetching(true)
    const response = await api.get(`/?results=1&page=1&id=${userId}`)
    setFetching(false)
    setUser(response.data.results[0])
  }

  function handleClose () {
    setUser(undefined)
    closeModal()
  }

  useEffect(() => {
    if (userId) {
      fetchAPI(userId)
    }
  }, [userId])

  if (isFetching) {
    return (
      <div className="absolute h-full w-full top-0" style={{ backgroundColor: 'rgba(109, 124, 136, 0.9)' }}>
        <div className="flex justify-center h-screen modal p-16">
          <div className="w-1/3 mb-16, h-full bg-white rounded card">
            <h2>Loading more</h2>
            <p>wait...</p>
          </div>
        </div>
      </div>
    )
  }
  if (!userId) return null
  if (!user) return null

  return (
    <div className="absolute h-full w-full top-0" style={{ backgroundColor: 'rgba(109, 124, 136, 0.9)' }}>
      <div className="flex justify-center h-screen modal p-16">
        <div className="w-1/3 mb-16, h-full bg-white rounded card">
          <div>
            <div className="flex justify-center relative">
              <div className="bg-gray-200 w-20 h-20 rounded-full mt-4 absolute" style={{ top: -50 }}>
                <img src={user.picture.thumbnail} alt="" height={80} width={80} className="rounded-full" />
              </div>
              <i onClick={handleClose} className="fas fa-times absolute right-1 top-1 cursor-pointer p-2 text-gray-600" width="30px" height="30px" />
            </div>
            <div className="p-8 mt-8">
              <div className="flex p-2">
              </div>
              <div className="flex-column p-2">
                <p className="text-gray-600">Name</p>
                <strong>{user.name.first} {user.name.last}</strong>
              </div>
              <div className="flex-column p-2">
                <p className="text-gray-600">Email</p>
                <strong>{user.email}</strong>
              </div>
              <div className="flex-column p-2">
                <p className="text-gray-600">Gender</p>
                <strong>{user.gender}</strong>
              </div>
              <div className="flex-column p-2">
                <p className="text-gray-600">Date</p>
                <strong>{(new Date(user.dob.date)).toLocaleString('pt-BR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</strong>
              </div>
              <div className="flex-column p-2">
                <p className="text-gray-600">Address</p>
                <strong>
                  City: {user.location.city} <br />
                  Country: {user.location.country} <br />
                  State: {user.location.state} <br />
                  Street: {user.location.street.name} <br />
                  Number: {user.location.street.number} <br />
                  Postcode: {user.location.postcode} <br />
                  Description: {user.location.timezone.description} <br />
                </strong>
              </div>
              <div className="flex-column p-2">
                <p className="text-gray-600">Phone</p>
                <strong>{user.cell}</strong>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Modal;