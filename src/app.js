const axis1 = document.querySelector("#axis1")
const axis2 = document.querySelector("#axis2")
const axis3 = document.querySelector("#axis3")
const volume = document.querySelector("#volume")
const calcbutton = document.querySelector("#calcbutton")

calcbutton.addEventListener('click', () => {
    startCalc();
})

function startCalc() {
    const a1 = Number(axis1.value)
    const a2 = Number(axis2.value)
    const a3 = Number(axis3.value)
    const vol = calcvolume(a1,a2,a3)
    console.log("Térfogat: ", vol)
    volume.value = vol
}

function calcvolume(a1,a2,a3) {
    return (4/3)*Math.PI*a1*a2*a3
}