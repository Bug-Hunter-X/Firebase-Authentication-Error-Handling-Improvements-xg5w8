function handleError(error) {
  console.error('Error:', error);
  switch (error.code) {
    case 'auth/user-not-found':
      alert('User not found. Please check your credentials.');
      break;
    case 'auth/wrong-password':
      alert('Incorrect password.');
      break;
    case 'auth/invalid-email':
      alert('Invalid email address.');
      break;
    case 'auth/too-many-requests':
      alert('Too many requests. Please try again later.');
      break;
    case 'auth/network-request-failed':
      alert('Network request failed. Please check your connection.');
      break;
    default:
      console.error('Unknown Firebase error:', error);
      alert('An unexpected error occurred. Please try again later.');
  }
} 