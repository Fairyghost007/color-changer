document.addEventListener("DOMContentLoaded",function(){
    const colorBox=document.getElementById('color-box')
    const btn=document.getElementById('change-color-btn')

    // genere u nobre random entre 0 et n
    function getRandomNumber(n){
        return Math.floor(Math.random() * n);
    }
    // genere une color rgb  random en utilisant getRandomNumber pour generer les troi nombre du rgb ex:255,255,255
    function getRandomColor(){
        const n=256
        const r1=getRandomNumber(n)
        const r2=getRandomNumber(n)
        const r3=getRandomNumber(n)
        return `rgb(${r1},${r2},${r3})`

    }
    // change  la coueur au box quand on clique le boutton
    btn.addEventListener("click",function(){
        colorBox.style.backgroundColor=getRandomColor()

    })
    

})