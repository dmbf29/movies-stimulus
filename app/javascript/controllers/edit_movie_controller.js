import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['form', "infos"];

  connect() {
    // console.log(this.formTarget)
    // console.log(this.infosTarget)
  }

  displayForm() {
    this.formTarget.classList.remove('d-none')
  }

  update(event) {
    event.preventDefault()
    const url = this.formTarget.action
    console.log(url)
    fetch(url, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        this.infosTarget.outerHTML = data
      })
  }
}


// form is the submission
// input is the search value ?query=black
// list is the list of movie cards
