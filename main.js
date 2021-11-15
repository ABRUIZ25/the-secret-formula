const form = document.querySelector('.form')
const input = document.querySelector('.input')
const button = document.querySelector('.button')
const sandwitch = document.querySelector('.sandwitch')
const wrap = document.querySelector('#wrap')
const weatbread = document.querySelector('#weatbread')
const white = document.querySelector('#white')
const italian = document.querySelector('#italian')
const amarican = document.querySelector('#Amarican')
const pepperjack = document.querySelector('#pepperjack')
const swiss = document.querySelector('#swiss')
const chicken = document.querySelector('#chicken')
const steak = document.querySelector('#steak')
const bacon = document.querySelector('#bacon')
const veggiemeat = document.querySelector('#bacon')
const haircutt = document.querySelector('.haircut')
const dateTime= document.querySelector('#dateTime')
const person = document.querySelector('#person')
const short = document.querySelector('#short')
const long = document.querySelector('#long')







console.log(form)
console.log(input)
console.log(button)


function onSubmit (event){
    event.preventDefault()
    console.log(input.value)
    let str = input.value
    alert (str)
}

form.addEventListener('submit',onSubmit)

function sandwitchOrder(event){
    event.preventDefault()
    let str = 'this is the sandwitch you have orderd, '

    if (wrap.checked) {
        str += 'wrap, '
      }
      if (weatbread.checked) {
        str += 'weatbread, '
      }
      if (white.checked) {
        str += 'white, '
      }
      if (italian.checked) {
        str += 'italian, '
      }
      if (amarican.checked){
          str += 'amarican, '
      }
    //   if (pepperjack.checked){
    //       str += 'pepperjack, '
    //   }
      if (swiss.checked) {
        str += 'swiss, '
      }
      if (chicken.checked) {
        str += 'chicken, '
      }
      if (steak.checked) {
        str += 'steak, '
      }
      if (veggiemeat.checked){
          str += 'veggiemeat,'
      }
      if (bacon.checked) {
        str += 'bacon, '
      }
      alert(str)
}

sandwitch.addEventListener('submit', sandwitchOrder)


function getHaircut(event){
    event.preventDefault()
    str = 'you have an hair appointment with, ', person, 'on this, ', dateTime, 'with your hair being,'

    if (short.checked){
        str += 'short'
    }
    if (long.checked){
        str += 'long'
    }
    alert(str)
}
haircutt.addEventListener('submit', getHaircut)
