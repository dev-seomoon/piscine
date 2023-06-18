const exid = {
  count: 0,
  up() {
    this.count++
  },
  down() {
    this.count--
  },
  showCount() {
    console.log(this.count)
  },
}

exid.up() // 1
exid.down() // 0
exid.up() // 1
exid.up() // 2
exid.down() // 1
exid.up() // 2
exid.down() // 1
exid.up() // 2
exid.up() // 3
exid.down() // 2
exid.showCount() // 2
