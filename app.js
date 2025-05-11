const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const PlusBtn = document.getElementById('plus')
  
const MinusElement = document.getElementById('minus')
const MnogElement = document.getElementById('mnog')
const DelElement = document.getElementById('del')
const SpanElement = document.getElementById('result');

PlusBtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value)
    SpanElement.textContent = sum

}
MinusElement.onclick = function () {
    const  minus = Number(input1.value) - Number(input2.value)
    SpanElement.textContent = minus
}
MnogElement.onclick = function () {
    const  mnog = Number(input1.value) * Number(input2.value)
    SpanElement.textContent = mnog
}
DelElement.onclick = function () {
    const  del = Number(input1.value) / Number(input2.value)
    SpanElement.textContent = del
}

