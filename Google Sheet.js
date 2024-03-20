const scriptURL = 'https://script.google.com/macros/s/AKfycbyxMVw89z1ZLJ2e5XuWQLYscVl_ktpNRNvrbLwPQT93aIc_ZEwpYg7lLmUGj4vRLQmUkg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})