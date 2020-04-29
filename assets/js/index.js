function operation(value) {
    let number1 = document.querySelector('#number1').value
    let number2 = document.querySelector('#number2').value
    let result = document.querySelector('#result')
    
    if(number1 == '' || number1 == null || number2 == '' || number2 == null) {
        alert('Preencha todos os campos!')
    } else {
        number1 = parseFloat(number1)
        number2 = parseFloat(number2)

        switch(value) {
            case 'Addition':
                return result.value = number1 + number2
            case 'Subtraction':
                return result.value = number1 - number2
            case 'Multiplication':
                return result.value = number1 * number2
            case 'Division':
                return result.value = number1 / number2
        }
    }

}