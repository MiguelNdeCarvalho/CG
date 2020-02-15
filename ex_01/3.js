function linspace(a, b, n) {
    let arr = []
    let step = (b - a) / (n - 1)
    for (var i = 0; i < n; i++) {
      arr.push(a + (step * i))
    }
    console.log(arr)
  }

linspace(0,2,5)