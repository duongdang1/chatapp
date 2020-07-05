
const view = {}
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case 'registerScreen':
      document.getElementById('app').innerHTML = components.registerScreen
      const registerForm = document.getElementById('form-register')
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const registerInfo = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        }
        controller.register(registerInfo)
      })
      const switchScreen = document.getElementById('redirect-to-login')
      switchScreen.addEventListener('click', (e) => {
        e.preventDefault()
        view.setActiveScreen('loginScreen')
      })


      break

    case 'loginScreen':
      document.getElementById('app').innerHTML = components.loginScreen
      const switchScreen1 = document.getElementById('redirect-to-register')
      switchScreen1.addEventListener('click', (e) => {
        e.preventDefault()
        view.setActiveScreen('registerScreen')
      })

      const loginForm = document.getElementById('form-login')
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        }
        controller.login(loginInfo)
      })

      break
    case 'chatScreen':
      document.getElementById('app').innerHTML = components.chatScreen
      const sendMessageForm = document.querySelector('#sendMessageForm')
      sendMessageForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        const message = {
          owner: model.currentUser.email,
          content: sendMessageForm.message.value,
          createdAt: new Date().toISOString()
        }
        //const messageFromBot = {
          //owner: 'Bot',
          //content: sendMessageForm.message.value
        //}
        if(sendMessageForm.message.value.trim() !== ''){
          view.addMessage(message)
          
          
        }
        model.updateConversation(message)
        sendMessageForm.message.value=''
      })
      model.loadConversations()
      break
  }
}

view.getErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message
}

view.addMessage = (message) =>{
  const messageWrapper = document.createElement('div')
  messageWrapper.classList.add('message')
  //<div class='message'></div>
  if(model.currentUser.email === message.owner){
    messageWrapper.classList.add('mine')
    messageWrapper.innerHTML=`
    <div class="content">${message.content}</div>
    `
  }else{
    messageWrapper.classList.add('their')
    messageWrapper.innerHTML=`
      <div class="owner">${message.owner}</div>
      <div class="content">${message.content}</div>
    `
  }
  const listMessage = document.querySelector('.list-message')
  document.querySelector('.list-message').appendChild(messageWrapper)
  listMessage.scrollTop = listMessage.scrollHeight
  
  
}
view.showCurrentConversation = () => {
  for (let oneMessage of model.currentConversation.messages){
    view.addMessage(oneMessage)
  }
}