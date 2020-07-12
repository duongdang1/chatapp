window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDI1xjFLKKWA9wg4RHouVlE98zAEV3zTiI",
    authDomain: "chatapp-717bc.firebaseapp.com",
    databaseURL: "https://chatapp-717bc.firebaseio.com",
    projectId: "chatapp-717bc",
    storageBucket: "chatapp-717bc.appspot.com",
    messagingSenderId: "174944498391",
    appId: "1:174944498391:web:ddcf495eb9dee2d631f692",
    measurementId: "G-XH92YQ5M3X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  //templateQueryDatabase()
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
    if (user) {
      if (user.emailVerified) {
        model.currentUser = {
          displayName: user.displayName,
          email: user.email
        }
        view.setActiveScreen('chatScreen')
      } else {
        view.setActiveScreen('loginScreen')
        alert('Please verify your email')
      }
    } else {
      view.setActiveScreen('loginScreen')
    }
  })

}

function checkAuth() {
  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user)

    model.currentUser = {

      displayName: user.displayName,
      email: user.email
    }
    if (user) {

      view.setActiveScreen('welcomeScreen')

    } else {
      // No user is signed in
      view.setActiveScreen('loginScreen')
    }
  })
}
