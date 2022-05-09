for (var grade of document.getElementsByClassName("gradebar")) {
  if (grade.nextElementSibling === null) {
    grade.getElementsByTagName("span")[0].textContent = '0%~'
  } else {
    relativePosition = grade.nextElementSibling.getAttribute("width")
    grade.getElementsByTagName("span")[0].textContent = parseInt(relativePosition) + '%~'
  }
}
