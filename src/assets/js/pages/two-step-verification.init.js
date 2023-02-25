// move next
function moveToNext(elem, count) {
  if (elem.value.length > 0) {
    document.getElementById('digit' + count + '-input').focus()
  }
}
