console.log('hello world')
let countEl = document.getElementById("count-el")
let saveel = document.getElementById("elent-count")
let count = 0

function increment() {
    count  += 1
   
    countEl.textContent = count
}

function save(){
    saveel.textContent += count + " - "
    countEl.textContent = 0
    count=0
}