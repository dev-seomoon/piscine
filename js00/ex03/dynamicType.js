const dynamicType = {
  put(num) {
    this.value = num
  },
  change(typeToChange) {
    let newValue = this.value
    if (typeof newValue === 'object') {
      newValue = this.value[0] ?? this.value.value
    }
    switch (typeToChange) {
      case 'String':
        this.value = String(newValue)
        return
      case 'Number':
        this.value = Number(newValue)
        return
      case 'Object':
        this.value = { value: Number(newValue) }
        return
      case 'Array':
        this.value = [Number(newValue)]
        return
    }
  },
  printType() {
    console.log(this.value)
  },
}

dynamicType.put(42)
dynamicType.printType()

dynamicType.change('String')
dynamicType.printType()

dynamicType.change('Array')
dynamicType.printType()

dynamicType.change('Object')
dynamicType.printType()

dynamicType.change('Number')
dynamicType.printType()

dynamicType.change('Array')
dynamicType.printType()

dynamicType.change('Number')
dynamicType.printType()

export default dynamicType
