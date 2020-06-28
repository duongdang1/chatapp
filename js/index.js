function checkAuth(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      view.setActiveScreen('welcomeScreen')
    } else {
      // No user is signed in
      view.setActiveScreen('loginScreen')
    }
  });
}
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
  
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name)
  view.setActiveScreen('registerScreen')
  
  checkAuth();
  
  
}

