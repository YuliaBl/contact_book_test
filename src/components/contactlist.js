import React, { useState } from 'react'
import Fuse from 'fuse.js'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../redux/reducers/contactreducer'
import EditContactsModal from './editcontact'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles( ( theme ) => ( {
  margin: {
    margin: theme.spacing( 1 ),
  },
  root: {
    '& > *': {
      margin: theme.spacing( 1 ),
    },
  },
  table: {
    minWidth: 650,
    background: '#ebebe0',
  },
} ) )

const ContactList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const contacts = useSelector( ( store ) => store.contactreducer.contacts )
  const [ query, setQuery ] = useState( '' )

  const fuse = new Fuse( contacts, {
    minMatchCharLength: 3,
    keys: [
      'name',
      'lastname'
    ]
  } )
  const results = fuse.search( query )
  const contactsResult = query ? results.map( res => res.item ) : contacts

  // const handleOnSearch = () => {
  //   ( e ) => {setQuery( e.target.value )}
  // }

  return (
      <div>
          <FormControl className={classes.margin}>
              <Input
          placeholder="SEARCH"
          value={query}
          onChange={( e ) => {setQuery( e.target.value )
          }}
        />
          </FormControl>
          <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                      <TableRow variant="h4">
                          <TableCell align="center">Name</TableCell>
                          <TableCell align="center">Last Name</TableCell>
                          <TableCell align="center">Phone</TableCell>
                          <TableCell align="center">E-mail</TableCell>
                          <TableCell align="center">Edit</TableCell>
                          <TableCell align="center">Delete</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {contactsResult.map( ( it ) => (
                          <TableRow key={it.id}>
                              <TableCell component="th" scope="row" align="center">
                                  {it.name}
                              </TableCell>
                              <TableCell component="th" scope="row" align="center">
                                  {it.lastname}
                              </TableCell>
                              <TableCell component="th" scope="row" align="center">
                                  {it.phone}
                              </TableCell>
                              <TableCell component="th" scope="row" align="center">
                                  {it.email}
                              </TableCell>
                              <TableCell component="th" scope="row" align="center">
                                  <EditContactsModal id={it.id} />
                              </TableCell>
                              <TableCell component="th" scope="row" align="center">
                                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch( deleteContact( it.id ) )
                    }}
                  >
                                      Delete
                                  </Button>
                              </TableCell>
                          </TableRow>
            ) )}
                  </TableBody>
              </Table>
          </TableContainer>
      </div>
  )
}

export default ContactList