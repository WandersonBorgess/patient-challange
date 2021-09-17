import React, { useState, useEffect } from 'react';

import './Modal.css';

import { useSelector, useDispatch } from 'react-redux';

import { getUserFetch } from '../store/fetchActions';

function Modal({ closeModal, id }) {
  const user = useSelector((state) => state.users)
  const [isFetching, setFetching] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setFetching(true)
    dispatch(getUserFetch(id))
    setFetching(false)
  }, [id, dispatch, user.data?.results])

  const userSimpleDetail = user.map((user) => user)
  const userDetail = userSimpleDetail.find((user) => user.id === id)

  if (!userDetail) return null

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
  if (!user) return null

  return (
    <div className="modal-bg">
      <div className="flex justify-center modal p-16 h-full">
        <div className="w-1/3 mb-16, h-full bg-white rounded card">
          <div>
            <div className="flex justify-center relative">
              <div className="bg-gray-200 w-20 h-20 rounded-full mt-4 absolute picture" style={{ top: -50 }}>
                <img src={userDetail.picture.thumbnail} alt="" height={80} width={80} className="rounded-full" />
              </div>
              <i onClick={closeModal} className="fas fa-times absolute right-1 top-1 cursor-pointer p-2 text-gray-600" width="30px" height="30px" />
            </div>
            <div className="p-8 mt-8">
              <div className="flex p-2">
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Name</strong>
                <p>{userDetail.name.first} {userDetail.name.last}</p>
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Email</strong>
                <p>{userDetail.email}</p>
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Gender</strong>
                <p>{userDetail.gender}</p>
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Date</strong>
                <p>{(new Date(userDetail.dob.date)).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
              </div>

              <div className="flex p-2 item">
                <strong className="text-gray-600 pr-4">Address:</strong>
                <p className="pr-4">{userDetail.location.city},</p>
                <p className="pr-4">{userDetail.location.country},</p>
                <p  className="pr-4">{userDetail.location.state},</p>
                <p  className="pr-4">{userDetail.location.street.name},</p>
                <p  className="pr-4">{userDetail.location.street.number},</p>
                <p  className="pr-4">{userDetail.location.postcode},</p>
                <p  className="pr-4">{userDetail.location.timezone.description},</p>
              </div>
              <div className="flex-column p-2 item">
                <strong className="text-gray-600">Phone</strong>
                <p>{userDetail.cell}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Modal;