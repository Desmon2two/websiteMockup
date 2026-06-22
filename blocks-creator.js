class TfilmCard extends HTMLElement {
  connectedCallback() {
    const filmCover = this.getAttribute("filmCover");
    const filmName = this.getAttribute("filmName");
    const filmDescrition = this.getAttribute("filmDescrition");
    const filmRating = this.getAttribute("filmRating");
    const filmYear = this.getAttribute("filmYear");
    this.innerHTML = `

        `;
  }
}
class TfilmPage extends HTMLElement {
  connectedCallback() {
    const primaryClass = this.getAttribute("primaryClass");
    const initTxt = this.getAttribute("initTxt");
    this.innerHTML = `
        <div class="${primaryClass} grid__item bordered rounded">
          <div class="item__textbox">
            <p>${initTxt}</p>
          </div>
        `;
  }
}
customElements.define('t-grid__item', TfilmPage)
customElements.define("t-film-card", TfilmCard);
