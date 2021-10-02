const numbers = document.querySelectorAll('.number')

numbers.forEach(number => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value)
    updateScreen(event.target.value)
  })
})

const decimalNum=document.querySelector(".decimal")
decimalNum.addEventListener('click',(event)=>{
   currentNum(event.target.value);  
   updateScreen(event.target.value)
})

const currentNum=(decimal)=>{
  currentInput+=decimal
}

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
  calculatorScreen.value = number
}


let prevInput = '0'
let currentInput = '0'
let calculationOperator = ''
let flag='0'

const inputNumber = (number) =>{
  if(flag==='0'){
    if (currentInput === '0') {
    currentInput = number
    } else {
    currentInput += number
    }  
  }
  else{
    if(currentInput==='0'){
      currentInput=number
    }else{
      currentInput+=number
    }
    prevInput='0'
    flag='0'
  }
}

const operators = document.querySelectorAll('.operator')

operators.forEach(operator => {
  operator.addEventListener('click', event => {
    console.log(event.target.value)
    inputOperator(event.target.value)
  })
})

const inputOperator = (operator) => {
  if(flag==='0'){
  prevInput = currentInput
  calculationOperator = operator
  currentInput = '0'
  }else{
    calculationOperator=operator;
    flag='0'
  }
}

const inputReset= ()=>{
  prevInput=currentInput;
  currentInput='0'
  flag='1'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentInput)
  inputReset()
})

const calculate = () => {
  let result = 0
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevInput) + parseFloat(currentInput)
      break
    case '-':
      result = parseFloat(prevInput) - parseFloat(currentInput)
      break
    case '/':
      result = parseFloat(prevInput) / parseFloat(currentInput)
      break
    case '*':
      result = parseFloat(prevInput) * parseFloat(currentInput)
      break
    default:
      return
  }
  currentInput = result.toString()
  calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentInput)
})

const clearAll = () => {
  prevInput = '0'
  calculationOperator = '0'
  currentInput = '0'
  flag='0'
}
