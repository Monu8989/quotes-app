let h1=document.querySelector('h1')
let para=document.querySelector('p')
let button=document.querySelector('button')

const quote=async()=>{
 const Response= await fetch( 'https://quotable.io/random')
 const data= await Response.json()
 h1.innerText=data.content
 para.innerText=data.author

}
button.addEventListener("click",quote)