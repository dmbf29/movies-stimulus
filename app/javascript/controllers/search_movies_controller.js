import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['form', 'input', 'list'];

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, { headers: { 'Accept': 'text/plain' } })
      .then(response => response.text())
      .then((data) => {
        this.listTarget.outerHTML = data
      })
  }
}


// form is the submission
// input is the search value ?query=black
// list is the list of movie cards
