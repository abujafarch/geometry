function calculateRhombus(){
    const rhombusD1 = document.getElementById('rhombus-d1')
    const rhombusD2 = document.getElementById('rhombus-d2')
    const rhombusD1Value = parseFloat(rhombusD1.value)
    const rhombusD2Value = parseFloat(rhombusD2.value)
    const area = 0.5*rhombusD1Value*rhombusD2Value
    document.getElementById('rhombus-area-value').innerText = area;
    rhombusD1.value = ''
    rhombusD2.value = ''
}
