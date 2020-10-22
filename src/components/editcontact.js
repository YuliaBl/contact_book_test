import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

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

const EditContactsModal = () => {
  const classes = useStyles()
  const [ modalStyle ] = React.useState( getModalStyle )
  const [ open, setOpen ] = React.useState( false )

  const handleOpen = () => {
    setOpen( true )
  }

  const handleClose = () => {
    setOpen( false )
  }

  const body = (
      <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Edit Contact</h2>

          <Button
        variant="contained"
        color="primary"
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