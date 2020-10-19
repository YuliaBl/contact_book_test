import React from 'react'

import ContactList from './contactlist'
import AddContact from './addcontact'

function Main() {

  return (
      <div className="Main">
          <main>
              <AddContact />
              <ContactList />
          </main>
      </div>
  )
}

export default Main
