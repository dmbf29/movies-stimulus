import { Controller } from "stimulus"

export default class extends Controller {
  // this is declaring where we put data-search-movies-target='akaname' in our HTML
  static targets = ['input', 'form', 'list', 'header']

  connect() {
    // when the HTML loads, this method gets run when it sees data-controller="search-movies"
    console.log(this.headerTarget)
  }

  update() {
    // on key up, this method gets triggered

    // building the url to where we send the search keyword
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`

    // using fetch to send this to our Rails controller
    fetch(url, { headers: { "Accept": "text/plain" } })
      .then(response => response.text())
      .then((data) => {
        // the Rails controller gives us back that partial but as a string
        // data == movie lists partial

        // old list of movies is replaced by the new filtered partial
        this.listTarget.outerHTML = data
      })
  }
}
