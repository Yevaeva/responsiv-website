
let splide = new Splide('.splide', {
    type: 'loop',
    perPage: 4,
    breakpoints: {

        630: {
            perPage: 1,
        },
        1750: {
            perPage: 3,
        },
        1330: {
            perPage: 2,
        },
        1200: {
            perPage: 3
        },
        890: {
            perPage: 2
        }

    },

    perMove: 1,
    // autoWidth:true,
    gap: 20,
    pagination: false,
}).mount();



const menu = document.querySelector('.menu')
const menucontent = document.querySelector('.menuContent')
const nav = document.querySelector('nav')
const header = document.querySelector('header')
const iconspan = document.querySelector('.iconspan')
const span = document.querySelectorAll('.iconspan span')
const aTags = document.querySelectorAll('.menuContent a')


menu.addEventListener('click', foo)
let bool = false
window.onresize = () => {
    nav.style.height = header.offsetHeight + 'px'
    let menuDisplay = getComputedStyle(menucontent).display
    if(!bool){
        if (menuDisplay === 'flex' && window.innerWidth<769){
            down768()
            bool=true;
         }
    }else if(menuDisplay === 'flex' && window.innerWidth>768){
        up768()
        bool=false
    }
}

document.body.onclick = (e) => {

    let menuDisplay = getComputedStyle(menucontent).display
    let toggle = e.target.closest('nav')

    if (menuDisplay === 'flex' && toggle === null) close()

}


aTags.forEach(a=> {a.addEventListener('click', close)})


function foo(e) {

    let menuDisplay = getComputedStyle(menucontent).display

    if (menuDisplay === 'none') {
        if (window.innerWidth > 768) {
           
            up768()

        } else {
            down768()
        }

    } else {
        close()
    }
}

function close() {
    nav.style = `   
    height: ${header.offsetHeight}px; 
    width:0;`
    menu.style = `
    right: 35px;`
    menucontent.style = `display: none`

    menu.children[1].innerHTML = 'Menu'
    menu.children[0].style = `background:#70D9FF;`
    iconspan.style = `
    transform:rotate(-270deg)`
    span[0].style = `border: 3px solid #141E30;`
    span[1].style = `border: 3px solid #141E30;`
    span[2].style = `border: 3px solid #141E30;`
    span[3].style = `border: 3px solid #141E30;`

}

function up768(){
    nav.style = `
            height: ${header.offsetHeight}px;
            width:35%;`
    menucontent.style = `display: flex`
    menu.style = `right:80%;`
    menu.children[1].innerHTML = 'Close'
    menu.children[0].style = `background:#FFDE17;`
    iconspan.style = `transform:rotate(405deg)`
    span[1].style = `border:none`
    span[0].style = `border:3px solid rgba(62, 112, 168, 1)`
    span[3].style = `border:3px solid rgba(62, 112, 168, 1)`
    span[2].style = `border:3px solid rgba(62, 112, 168, 1)`
}

function down768(){
    nav.style = `
    height: ${header.offsetHeight}px;
    width:100%;`
    menucontent.style = `display: flex;padding-top: 5%;`
    menu.style = `right:83%;`
    menu.children[1].innerHTML = 'Close'
    menu.children[0].style = `background:#FFDE17;`
    iconspan.style = `transform:rotate(405deg)`
    span[1].style = `border:none`
    span[0].style = `border:3px solid rgba(62, 112, 168, 1)`
    span[3].style = `border:3px solid rgba(62, 112, 168, 1)`
    span[2].style = `border:3px solid rgba(62, 112, 168, 1)`
}

window.onhashchange = ()=>{
    aTags.forEach(a=>a.style.color='#fff')
    let hash = window.location.hash;
    let aTag = document.querySelector(`a[href='${hash}']`);
    aTag.style.color='rgba(112, 217, 255, 1)'
}