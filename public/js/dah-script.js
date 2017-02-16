var profileHtml = document.getElementById('profile-html')
var profileRaw = document.getElementById('profile-raw')

var firstname = document.getElementsByName('firstname')[0]
var lastname = document.getElementsByName('lastname')[0]
var desc = document.getElementsByName('description')[0]
var email = document.getElementsByName('email')[0]
var tele = document.getElementsByName('telephone')[0]

function updateProfile () {
  var content =
    '<h1>Hi, my name is ' + firstname.value + ' ' + lastname.value + '!</h1>' +
    '<p>' + desc.value + '</p>' +
    '<p>' +
      'If you\'re interested in a date, you can email me at ' +
      '<a href="mailto:' + email.value + '" target="_blank">' + email.value + '</a>' +
      'or give me a call at ' +
      '<a href="tel:' + tele.value + '" target="_blank">' + tele.value + '</a>.' +
    '</p>'
  profileHtml.innerHTML = content
  profileRaw.textContent = content
}

updateProfile()
