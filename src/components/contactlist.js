import React from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles( {
  table: {
    minWidth: 650,
  },
} )

const ContactList = () => {
  const classes = useStyles()
  const contacts = useSelector( ( store ) => store.contactreducer.contacts )

  return (
      <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Last Name</TableCell>
                      <TableCell align="center">Phone</TableCell>
                      <TableCell align="center">E-mail</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {contacts.map( ( it ) => (
                      <TableRow key={it.name}>
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
                      </TableRow>
          ) )}
              </TableBody>
          </Table>
      </TableContainer>
  )
}

export default ContactList
