const CREATE_CONTACT = 'CREATE_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const EDIT_CONTACT = 'EDIT_CONTACT'

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Yulia',
      lastname: 'Blazhenko',
      phone: '+380638453057',
      email: 'blazhenko.yulia@gmail.com',
    },
    {
      id: 2,
      name: 'Vasilisa',
      lastname: 'Prekrasnaya',
      phone: '+380994445577',
      email: 'vasilisa@gmail.com',
    },
  ],
}

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case CREATE_CONTACT: {
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: action.id,
            name: action.name,
            lastname: action.lastname,
            phone: action.phone,
            email: action.email,
          },
        ],
      }
    }
    case DELETE_CONTACT: {
      return {
        ...state,
                contacts: [
          ...state.contacts.filter( ( it ) => {
            return it.id !== action.id
          } ) ]
      }}

    case EDIT_CONTACT: {
      return {
        ...state,
        contacts: [ ...state.contacts.map( ( it ) => {
          return ( it.id === action.id ) ? {
            ...it,
            name: action.name,
            lastname: action.lastname,
            phone: action.phone,
            email: action.email,
          } : it
             } )
      ]
      }
    }
    default:
      return state
}}

export function createContact( id, name, lastname, phone, email ) {
  return ( {
    type: CREATE_CONTACT,
    id,
    name,
    lastname,
    phone,
    email
  } )
}

export function deleteContact( id ) {
  return {
    type: DELETE_CONTACT,
    id
  }
}

export function editContact( id, name, lastname, phone, email ) {
  return {
    type: EDIT_CONTACT,
    id,
    name,
    lastname,
    phone,
    email,
  }
}