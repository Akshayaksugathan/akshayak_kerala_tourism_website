    const form = document.getElementById("form");
    const uname = document.getElementById("uname");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");

    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      validation();
      
    });

  function validation(){
    
    const unameValue=uname.value.trim();
    const phoneValue=phone.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();

    //name validation

    if(unameValue===''){
      showMessage(uname,'Name can not be blank');
    }
    else{
      success(uname);
    }

    //Phone number validation

     var regexp =/^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if(phoneValue==""){
        showMessage(phone,'Phone Number can not be blank'); 
      }
      else if(!phoneValue.match(regexp)){
        if(isNaN(phoneValue)){
          showMessage(phone,'Only digits are allowed'); 
        }
        else if (phoneValue.length!=10){
          showMessage(phone,'Must include 10 digits'); 
        }
        else{
          showMessage(phone,'No match'); 
        }
    }
    else{
      success(phone);
    }

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

    //Password validation

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


    //Retype password validation

    if(password2Value==''){
      showMessage(password2,'This field  can not be blank');
    }
    else if(passwordValue!=password2Value){
      showMessage(password2,'Password does not match');
    }
    else{
      success(password2);
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

//Checking strength of the password

function checkpasswordstrength(){
  var passwordtextbox=document.getElementById("password");
  var password=passwordtextbox.value;
  var passwordscore=0;
  if(password.trim()!=""){
    passwordscore+=20;
  }
  if(password.length>=8){
    passwordscore+=20;
  }
  if(password.search(/[A-Z]/)>-1){
    passwordscore+=20;
  }
  if(password.search(/[a-z]/)>-1){
    passwordscore+=20;
  }
  if(password.search(/[0-9]/)>-1){
    passwordscore+=20;
  }
  var strength="";
  var background="";
  if(passwordscore<=60){
    strength="Poor";
    label1.style.color="red";
    background="red";
  }
  else if(passwordscore>60&&passwordscore<100){
    strength="Medium";
    label1.style.color="orange";
    background="orange";
  }
  else{
    strength="Strong";
    label1.style.color="green";
    background="green";
  }
  document.getElementById("label1").innerHTML=strength;
  passwordtextbox.style.color="white";
  passwordtextbox.style.backgroundColor=background;
  return passwordscore;
}
    

   

 
  


 






  






