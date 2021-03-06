import baseApp from "../base"

export const userService = {
  signup,
  signout,
  signin,
  resetPassword,
  confirmResetPassword
}

async function signup(email, password) {
  return await baseApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.")
      } else {
        alert(errorMessage)
      }
      console.log(error)
      throw(error)
    })
}
async function signout() {
  return await baseApp
    .auth()
    .signOut()
    .catch(function(error) {
      console.log(error)
    })
}
async function signin(email, password) {
  return await baseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => response)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.")
      } else {
        alert(errorMessage)
      }
      console.log(error)
      throw(error)
    })
}
async function resetPassword(email) {
  return await baseApp
    .auth()
    .sendPasswordResetEmail(email)
    .then(response => response)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      alert(errorMessage)
      console.log(error)
      throw(error)
    })
}

async function confirmResetPassword(code, newPassword) {
  return await baseApp
    .auth()
    .confirmPasswordReset(code, newPassword)
    .then((response) => response)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      alert(errorMessage)
      console.log(error)
      throw(error)
    })
}
