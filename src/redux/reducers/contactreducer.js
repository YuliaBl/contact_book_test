const CREATE_CONTACT = 'CREATE_CONTACT'

const initialState = {
  contacts: [
    { name: 'Yulia',
    lastname: 'Blazhenko',
    phone: '+380638453057',
    email: 'blazhenko.yulia@gmail.com' },
    { name: 'Vasilisa',
    lastname: 'Prekrasnaya',
    phone: '+380994445577',
    email: 'vasilisa@gmail.com' }
  ]
};

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case CREATE_CONTACT: {
      return {
         ...state,
         contacts: [ ...state.contacts, {
           name: action.name,
           lastname: action.lastname,
           phone: action.phone,
           email: action.email
          } ] }
    }

    default:
      return state
  }
}

export function createContact( name, lastname, phone, email ) {
  return ({
    type: CREATE_CONTACT,
    name,
    lastname,
    phone,
    email
  })
}