import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import TextField from "@material-ui/core/TextField"
import React, { useState } from "react"

export default function ForgotPassword(props) {
  const [email, setEmail] = useState("")
  const [validEmail, setValidEmail] = useState(false)
  const { open, handleClose, handleResetPassword } = props
  const emailRegex = new RegExp("[a-zA-Z0-9.]+@[a-zA-Z0-9]+[.]{1}[a-zA-Z]+")

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const validateEmail = () => {
    setValidEmail(!email.match(emailRegex))
    return !email.match(emailRegex)
  }

  const handleResetPasswordLocal = () => {
    if (!validateEmail()) {
      handleResetPassword(email)
    }
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Password reset?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please enter your email, we'll send you a link, so you can reset your
          password.
        </DialogContentText>
        <TextField
          error={validEmail}
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          helperText={validEmail ? "Please use a valid email" : ""}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleResetPasswordLocal} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
