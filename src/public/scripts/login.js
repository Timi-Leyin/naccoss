const quotes = [
  "Quote 1 ipsum dolor sit amet consectetur, adipisicing elit. Aperiamconsectetur voluptates ipsam dolores veritatis Animi, cumque, voluptates modi natus quae enim nam veritatis maxime eius vero in officiis quas quia",
  "Quote 2 ipsum dolor sit amet consectetur, adipisicing elit. Aperiamconsectetur voluptates ipsam dolores veritatis Animi, cumque, voluptates modi natus quae enim nam veritatis maxime eius vero in officiis quas quia",
  "Quote 3 ipsum dolor sit amet consectetur, adipisicing elit. Aperiamconsectetur voluptates ipsam dolores veritatis Animi, cumque, voluptates modi natus quae enim nam veritatis maxime eius vero in officiis quas quia"
];
const textContainer = document.querySelector('.txts')
const left_btn = document.querySelector('.left')
const right_btn = document.querySelector('.right')
const nav_one = document.querySelector('.nav-one')
const nav_two = document.querySelector('.nav-two')
const nav_three = document.querySelector('.nav-three')
const show_password = document.querySelector('.passwordToggle')
const password = document.querySelector('.password')
let quotenumber = 0
const template = `<p class="texts">${quotes[quotenumber]}</p>`

textContainer.innerHTML= template
left_btn.addEventListener('click',()=>{
  textContainer.innerHTML= template
  if (quotenumber<=0) {
      quotenumber=0;
      textContainer.innerHTML= template
      console.log(quotenumber)
  }
  else{
    console.log(quotenumber)
    quotenumber = quotenumber-1
  }
})
right_btn.addEventListener('click',()=>{
  const template = `<p class="texts">${quotes[quotenumber]}</p>`
  textContainer.innerHTML= template
  if (quotenumber>quotes.length-2) {
      quotenumber=0;
    textContainer.innerHTML= template
    console.log(quotenumber)
  }
    else{
      console.log(quotenumber)
    quotenumber++
  }
  
})

nav_one.addEventListener('click',()=>{
  quotenumber = 0
  const template = `<p class="texts">${quotes[quotenumber]}</p>`
  textContainer.innerHTML= template
})
nav_two.addEventListener('click',()=>{
  quotenumber = 1
  const template = `<p class="texts">${quotes[quotenumber]}</p>`
  textContainer.innerHTML= template
})
nav_three.addEventListener('click',()=>{
  quotenumber = 2
  const template = `<p class="texts">${quotes[quotenumber]}</p>`
  textContainer.innerHTML= template
})

setInterval(() => {
  const template = `<p class="texts">${quotes[quotenumber]}</p>`
  textContainer.innerHTML= template
  if (quotenumber>quotes.length-2) {
    textContainer.innerHTML= template
    console.log(quotenumber)
    quotenumber=0;
  }
    else{
      console.log(quotenumber)
    quotenumber++
  }
}, 7000);


show_password.addEventListener('click',()=>{
    if (password.getAttribute('type') == 'password') {
      password.setAttribute('type','text')
      show_password.classList.replace("fa-eye", "fa-eye-slash")
    }else{
      show_password.classList.replace("fa-eye-slash", "fa-eye")
      password.setAttribute('type','password')

    }
})