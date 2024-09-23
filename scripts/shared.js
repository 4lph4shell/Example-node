let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.plan button')
let modalClosBtn = document.querySelector('.modal__action--negative')

for (let i = 0; i < selectPlanBtn.length; i++) {
  selectPlanBtn[i].addEventListener('click', () => {
    modal.classList.add('open')
    backdrop.classList.add('open')
  })
}

backdrop.addEventListener('click', closeModal)
modalClosBtn.addEventListener('click', closeModal)

/**
 * Close the modal window
 * @function closeModal
 * @return {void}
 */
function closeModal() {
  // Remove the open class from the modal
  // The open class is the class that makes the modal visible
  // When we remove the open class, the modal will no longer be visible
  modal.classList.remove('open')
  // Remove the open class from the backdrop
  // The open class is the class that makes the backdrop visible
  // When we remove the open class, the backdrop will no longer be visible
  backdrop.classList.remove('open')
}
