import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createContact } from '../redux/reducers/contactreducer'

import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import uuid from 'uuid'

const useStyles = makeStyles( ( theme ) => ( {
  margin: {
    margin: theme.spacing( 1 ),
  },
  root: {
    '& > *': {
      margin: theme.spacing( 1 ),
    },
  },
} ) )

const AddContact = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const [ name, setName ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ email, setEmail ] = useState('')
  const uid = uuid.v4()
  const [ id, setId ] = useState(uid)

  return (
      <div className={classes.root}>
          <main>
              <h2>Add New Contact</h2>
          </main>
          <FormControl className={classes.margin}>
              <Input id="inputname" placeholder="Name" value={name} onChange={( e ) => {
              setName( e.target.value )
              }} />
          </FormControl>
          <FormControl className={classes.margin}>
              <Input id="inputlastname" placeholder="LastName" value={lastname} onChange={( e ) => {
              setLastname( e.target.value )}} />
          </FormControl>
          <FormControl className={classes.margin}>
              <Input id="inputphone" placeholder="Phone" value={phone} onChange={( e ) => {
              setPhone( e.target.value )}} />
          </FormControl>
          <FormControl className={classes.margin}>
              <Input id="inputemail" placeholder="E-mail" value={email} onChange={( e ) => {
              setEmail( e.target.value )}} />
          </FormControl>

          <Button variant="contained" color="primary" onClick={() => {
                  dispatch(
                    createContact(id, name, lastname, phone, email))
                  setId('')
                  setName('')
                  setEmail('')
                  setLastname('')
                  setPhone('')
                }}>
              SAVE
          </Button>
      </div>
  )
}

export default AddContact
