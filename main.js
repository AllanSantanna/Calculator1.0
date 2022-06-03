/* inserir números */
function insert(num) {
  var number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number + num
}

/* apagar tudo */
function clean() {
  document.getElementById('result').innerHTML = ''
}

/* apagar um por vez */
function back() {
  var result = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = result.substring(
    0,
    result.length - 1
  )
}

/* calcular */
function calculation() {
  var result = document.getElementById('result').innerHTML
  if (result) document.getElementById('result').innerHTML = eval(result)
}
