import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'

import { editContact } from '../redux/reducers/contactreducer'

function rand() {
  return Math.round( Math.random() * 20 ) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles( ( theme ) => ( {
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[ 5 ],
    padding: theme.spacing( 2, 4, 3 ),
  },
} ) )

const EditContactsModal = ( props ) => {
  const id = props.id
  const classes = useStyles()
  const [ modalStyle ] = React.useState( getModalStyle )
  const [ open, setOpen ] = React.useState( false )

  const contacts = useSelector( ( store ) => store.contactreducer.contacts )
  const editedContact = contacts.filter( ( it ) => ( it.id === id ? it : null ) )

  const dispatch = useDispatch()
  const [ name, setName ] = useState( '' )
  const [ lastname, setLastname ] = useState( '' )
  const [ phone, setPhone ] = useState( '' )
  const [ email, setEmail ] = useState( '' )

  const handleOpen = () => {
    setOpen( true )
  }

  const handleClose = () => {
    setOpen( false )
  }
  const handleSubmit = () => {
    dispatch( editContact( id, name, lastname, phone, email ) )
  }

  const body = (
      <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Edit Contact</h2>
          <FormControl className={classes.margin}>
              <Input
          placeholder={editedContact[ 0 ].name}
          value={name || editedContact[ 0 ].name}
          onChange={( e ) => {
            setName( e.target.value )
          }}
        />
          </FormControl>
          <FormControl className={classes.margin}>
              <Input
          placeholder={editedContact[ 0 ].lastname}
          value={lastname || editedContact[ 0 ].lastname}
          onChange={( e ) => {
            setLastname( e.target.value )
          }}
        />
          </FormControl>
          <FormControl className={classes.margin}>
              <Input
          placeholder={editedContact[ 0 ].phone}
          value={phone || editedContact[ 0 ].phone}
          onChange={( e ) => {
            setPhone( e.target.value )
          }}
        />
          </FormControl>
          <FormControl className={classes.margin}>
              <Input
          placeholder={editedContact[ 0 ].email}
          value={email || editedContact[ 0 ].email}
          onChange={( e ) => {
            setEmail( e.target.value )
          }}
        />
          </FormControl>
          <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleSubmit()
          handleClose()
        }}
      >
              SAVE
          </Button>
      </div>
  )

          return (
              <div>
                  <Button variant="contained" color="primary" onClick={handleOpen}>
                      Edit
                  </Button>
                  <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  >
                      {body}
                  </Modal>
              </div>
          )
}

export default EditContactsModal