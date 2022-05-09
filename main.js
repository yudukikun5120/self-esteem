for (const grade of document.getElementsByClassName('gradebar')) {
  const rate = parseInt(grade.getAttribute('width'))
  
  if (grade.nextElementSibling === null) {
    grade.getElementsByTagName('span')[0].textContent = `0% - ${rate}%`
  } else {
    const higherRate = parseInt(grade.nextElementSibling.getAttribute('width'))
    grade.getElementsByTagName('span')[0].textContent = `${higherRate}% - ${rate + higherRate}%`
  }
}
