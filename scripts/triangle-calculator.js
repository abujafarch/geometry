function calculateTriangle(){
    const base = document.getElementById('base-value')
    const height = document.getElementById('height-value')
    const baseValue = parseFloat(base.value)
    const heightValue = parseFloat(height.value)
    const area = 0.5*baseValue*heightValue
    document.getElementById('area-value').innerText = area;
    base.value = ''
    height.value = ''
}



