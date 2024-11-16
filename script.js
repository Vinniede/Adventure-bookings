const loginbtn= document.queryselect('login');
const signupbtn= signup.getElementsById('signupbtn');
const login= document.getElementsById('loginmdal');
const signup= document.getElementsById('signupmodal');
const closelogin= document.getElementsById('closelogin');
const closesignup= document.getElementsById('closesignup');
    loginbtn.addEventListerner('click',()=>{
        login.style.display='flex';
    });
    signupbtn.addEventListerner('click',()=>{
        signupbtn.style.display='flex';
    });
    closelogin.addEventListerner('click',()=>{
        closelogin.style.display='flex';
    });