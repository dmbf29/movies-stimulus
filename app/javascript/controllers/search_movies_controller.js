import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['input', 'form', 'list'];

  connect() {
    console.log(this.listTarget)
  }

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, { headers: { 'Accept': 'text/plain' } })
      .then(response => response.text())
      .then((data) => {
        // console.log(data)
        this.listTarget.outerHTML = data;
      })
  }
}
