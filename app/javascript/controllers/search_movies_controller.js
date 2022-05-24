import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["form", "input", "list"];

  connect() {}

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;
    fetch(url, { headers: { Accept: "text/plain" } })
      .then((response) => response.text())
      .then((data) => {
        // data === new_partial
        this.listTarget.outerHTML = data;
      });
  }
}
