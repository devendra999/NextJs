"use client"
// store/reducers/counterReducer.js
const initialState = {
    count: 0,
    users: [
        {
            "id": 1,
            "email": "john@mail.com",
            "password": "changeme",
            "name": "change",
            "role": "customer",
            "avatar": "https://i.imgur.com/LDOO4Qs.jpg",
            "creationAt": "2024-06-10T12:07:44.000Z",
            "updatedAt": "2024-06-10T22:04:22.000Z"
          },
          {
            "id": 2,
            "email": "maria@mail.com",
            "password": "12345",
            "name": "Maria",
            "role": "customer",
            "avatar": "https://i.imgur.com/DTfowdu.jpg",
            "creationAt": "2024-06-10T12:07:44.000Z",
            "updatedAt": "2024-06-10T12:07:44.000Z"
          },
          {
            "id": 3,
            "email": "admin@mail.com",
            "password": "admin123",
            "name": "Admin",
            "role": "admin",
            "avatar": "https://i.imgur.com/yhW6Yw1.jpg",
            "creationAt": "2024-06-10T12:07:44.000Z",
            "updatedAt": "2024-06-10T12:07:44.000Z"
          },
          {
            "id": 4,
            "email": "dirk-kane@trend.com",
            "password": "747378483",
            "name": "Dirk Kane",
            "role": "admin",
            "avatar": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-06-10T12:28:08.000Z",
            "updatedAt": "2024-06-10T12:28:08.000Z"
          },
          {
            "id": 5,
            "email": "joaquinpjs@gmail.com",
            "password": "1234",
            "name": "joaquin",
            "role": "customer",
            "avatar": "https://picsum.photos/800",
            "creationAt": "2024-06-10T13:02:02.000Z",
            "updatedAt": "2024-06-10T13:02:02.000Z"
          }
    ],
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  