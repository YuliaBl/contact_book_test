import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../redux/reducers/contactreducer'
import EditContactsModal from './editcontact'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'

const useStyles = makeStyles( {
  table: {
    minWidth: 650,
    background: '#ebebe0',
  },
} )

const ContactList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const contacts = useSelector( ( store ) => store.contactreducer.contacts )

  return (
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
                  {contacts.map( ( it ) => (
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
                              <EditContactsModal id={it.id}/>
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
  )
}

export default ContactList

// ;<svg style="width:24px;height:24px" viewBox="0 0 24 24">
//   <path
//     fill="currentColor"
//     d="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z"
//   />
// </svg>
