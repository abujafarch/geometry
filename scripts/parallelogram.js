function calculateParallelogram(){
    const base = document.getElementById('para-base-value')
    const height = document.getElementById('para-height-value')
    const baseValue = parseFloat(base.value)
    const heightValue = parseFloat(height.value)
    const area = baseValue*heightValue
    document.getElementById('para-area-value').innerText = area;
    base.value = ''
    height.value = ''
}