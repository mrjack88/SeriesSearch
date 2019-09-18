import baseApp from "../base"

export const userService = {
  signup,
  signout,
  signin
}

async function signup(email, password) {
  await baseApp
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
    })
}
async function signout() {
  await baseApp
    .auth()
    .signOut()
    .catch(function(error) {
      console.log(error)
    })
}
async function signin(email, password) {
  console.log(email, password)
  await baseApp
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response=> response)
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
    })   
}
