function calculateRectangle(){
    const width = document.getElementById('width-value')
    const length = document.getElementById('length-value')
    const widthValue = parseFloat(width.value)
    const lengthValue = parseFloat(length.value)
    const area = widthValue*lengthValue
    document.getElementById('rect-area-value').innerText = area;
    width.value = ''
    length.value = ''
}