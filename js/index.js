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
    if(user) {
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

function checkAuth(){
  firebase.auth().onAuthStateChanged(function(user) {
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

//templateQueryDatabase = () => {
  /*const docId = 'KmYBAeKOHPFt3dom46Ks'
  firebase.firestore().collection('chatapp').doc(docId).get().then(res =>{
    console.log(getDataFromDoc(res))
  }).catch(err =>{
    console.log(err)
  })
  */
  /* firebase.firestore().collection('users').where('age','==',20).get().then(res =>{
    console.log(res)
    //console.log(getDataFromDoc(res.docs[0]))
    console.log(getDataFromDocs(res.docs))
  })
  //create
  /*const dataToCreate = {
    name: 'Create',
    age: 18,
    email: 'duongminhvietdang@gmail.com',
    phoneNumber: ['0563038179']
  }
  //firebase.firestore().collection('chatapp').add(dataToCreate).then(res =>{
    
  //  })
  */
    //update
    
    
    /*
    const docIdUpdate = 'UYLVRHkAlOgX8vtgJZ2a'
    const dataToUpdate = {
      age: 20,
      address:'hn',
      phone: firebase.firestore.FieldValue.arrayUnion('123456789')
    }
    firebase.firestore().collection('chatapp').doc(docIdUpdate).update(dataToUpdate).then(res => {

    })
    //delete
    const docIdDelete = 'w82yt7sGPLcIimxl8KlX'
    firebase.firestore().collection('chatapp').doc(docIdDelete).delete().then(res => {

    })
    */
//}

getDataFromDoc = (doc) =>{
  const data = doc.data()
  data.id = doc.id
  return data
}

getDataFromDocs = (docs) => {
  return docs.map(getDataFromDoc)
}
