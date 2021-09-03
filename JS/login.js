const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

 form.addEventListener('submit',(e)=>{
     e.preventDefault();
     validation();
  });

  function validation(){
    
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    //Email validation

    if(emailValue===''){
        showMessage(email,'Email can not be blank');
      }
      else if(!isEmail(emailValue)){
        showMessage(email,'Email not valid');
      }
      else{
        success(email);
      }

      if(passwordValue==''){
        showMessage(password,'Password can not be blank');
      }
      else if(passwordValue.length<8){
        showMessage(password,'Password must contain atleast 8 charactes');
      }
      else if(passwordValue.search(/[A-Z]/)<=-1){
        showMessage(password,'Password must contain atleast 1 uppercase letter');
      }
       else if(passwordValue.search(/[a-z]/)<=-1){
       showMessage(password,'Password must contain atleast 1 lowercase letter');
      }
      else if(passwordValue.search(/[0-9]/)<=-1){
        showMessage(password,'Password must contain atleast 1 digit');
      }
      else{
        success(password);
      }
    }

  function showMessage(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form_control error';
  }

  function success(input){
    const formControl=input.parentElement;
    formControl.className='form_control success';
  }
  
  function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  