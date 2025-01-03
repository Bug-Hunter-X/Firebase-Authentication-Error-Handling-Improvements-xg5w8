function handleError(error) {
  console.error("Error: ", error);
  // Firebase specific error handling
  if (error.code === 'auth/user-not-found') {
    // Handle user not found
  } else if (error.code === 'auth/wrong-password') {
    // Handle wrong password
  } else if (error.code === 'auth/invalid-email') {
    // Handle invalid email
  } else {
    // Handle other errors
    console.error("Unknown Firebase error:", error);
  }
}