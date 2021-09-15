import React from 'react';

import './Modal.css';

function Modal({ show, user }) {
  const date = new Date()
  const formatDate = () => {
    const dateFormat = ((date.getDate())) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear();

    return dateFormat;
  }

  return (
    <div className="absolute h-full w-full top-0" style={{ backgroundColor: 'rgba(109, 124, 136, 0.9)' }}>
      <div className="flex justify-center h-screen modal p-16">
        <div className="w-1/3 mb-16, h-full bg-white rounded card">
          <div>
            <div className="flex justify-center relative">
              <div className="bg-gray-200 w-20 h-20 rounded-full mt-4 absolute" style={{ top: -50 }}>
                <img src={user.picture.thumbnail} alt="" height={80} width={80} className="rounded-full" />
              </div>
              <i onClick={show} className="fas fa-times absolute right-1 top-1 cursor-pointer p-2 text-gray-600" width="30px" height="30px" />
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
                <strong>{formatDate(user.dob.date)}</strong>
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