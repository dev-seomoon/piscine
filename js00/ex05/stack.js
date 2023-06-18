export const stackCreate = () => ({
  arr: [],
})

export const stackEmpty = (stack) => {
  if (!stack || !stack.arr || stack.arr.length === undefined)
    throw Error('Stack is not exist or not initialized properly.')

  return stack.arr.length === 0
}

export const stackPush = (stack, data) => {
  if (!stack || !stack.arr || stack.arr.length === undefined)
    throw Error('Stack is not exist or not initialized properly.')

  stack.arr[stack.arr.length] = data
}

export const stackPeek = (stack) => {
  if (stackEmpty(stack)) {
    throw Error('Cannot peek from empty stack.')
  }

  return stack.arr[stack.arr.length - 1]
}

export const stackPop = (stack) => {
  if (stackEmpty(stack)) {
    throw Error('Cannot pop from empty stack.')
  }

  stack.arr.length--
}

export const stackPrint = (stack) => {
  if (!stack || !stack.arr || stack.arr.length === undefined)
    throw Error('Stack is not exist or not initialized properly.')

  console.log(stack.arr)
}

const stack = stackCreate()

stackPush(stack, 1)
console.log(stackPeek(stack))
stackPrint(stack)

stackPush(stack, 2)
console.log(stackPeek(stack))
stackPrint(stack)

stackPop(stack)
console.log(stackPeek(stack))
stackPrint(stack)
