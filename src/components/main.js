import React from 'react'

import ContactList from './components/contactlist'
import AddContact from './components/addcontact'

function Main() {

  return (
    <div className="Main">
      <main>
        <AddContact create={create} />
        <ContactList />
      </main>
    </div>
  )
}

export default Main
