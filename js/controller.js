const controller = {}
controller.register = (registerInfo) => {
  if (registerInfo.firstName === '') {
    view.getErrorMessage('error-first-name', 'Please input first name')

  }
  else {
    view.getErrorMessage('error-first-name', '')

  }
  if (registerInfo.lastName === '') {
    view.getErrorMessage('error-last-name', 'Please input last name')

  }
  else {
    view.getErrorMessage('error-last-name', '')
  }
  if (registerInfo.email === '') {
    view.getErrorMessage('error-email-name', 'Please input first name')

  }
  else {
    view.getErrorMessage('error-email-name', '')
  }
  if (registerInfo.password === '') {
    view.getErrorMessage('error-password-name', 'Please input your password')

  }
  else {
    view.getErrorMessage('error-password-name', '')
  }
  if (registerInfo.confirmPassword === '') {
    view.getErrorMessage('error-confirm-password', 'Please confirm your password')
    return
  }
  else if(registerInfo.confirmPassword !== registerInfo.password){
    view.getErrorMessage('error-confirm-password', '')
    return
  }
  else {
    view.getErrorMessage('error-confirm-password','')
    
  }
  if(registerInfo.firstName !== '' && registerInfo.lastName !== '' && registerInfo.email !== '' &&registerInfo.password !== ''){
    model.register(registerInfo.firstName, registerInfo.lastName,registerInfo.email, registerInfo.password)
  }
  
}
controller.login = ({email,password}) => {
  if (email === '') {
    view.getErrorMessage('error-email-name', 'Please input your email')

  }
  else {
    view.getErrorMessage('error-email-name', '')
  }
  if (password === '') {
    view.getErrorMessage('error-password-name', 'please input your password')
  }
  else {
    view.getErrorMessage('error-password-name', '')
  }
  if(email !== '' && password !== ''){
    model.login(email,password)
  }
}
controller.createConversation = ({title,friendEmail}) => {
  view.getErrorMessage('conversation-name-error',title ==='' ? 'Please input title':'')
  view.getErrorMessage('conversation-email-error',friendEmail === ''? 'please input friend email':'')
  if(title !== '' && friendEmail !== ''){
    model.createConversation({
      title,
      users: [friendEmail, model.currentUser.email],
      createdAt: new Date().toISOString(),
      messages: []
    })
    
  }
}

controller.addUser = (email) =>{
  if(email === ''){
    view.getErrorMessage('add-user-email-error','Please input email!')

  }else{
    view.getErrorMessage('add-user-email-error','')
    model.addUser(email)
  }
}
