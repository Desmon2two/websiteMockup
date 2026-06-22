class TfilmCard extends HTMLElement {
  connectedCallback() {
    const filmCover = this.getAttribute("filmCover");
    const filmTitle = this.getAttribute("filmTitle");
    const filmDescrition = this.getAttribute("filmDescrition");
    const filmRating = this.getAttribute("filmRating");
    const filmYear = this.getAttribute("filmYear");
    this.innerHTML = `
      <div class="film-card flex bordered rounded">
        <img src="${filmCover}" alt="film-card__poster" class="film-card__poster">
        <div class="film-card__title"><h2>${filmTitle}</h2></div>
        <div class="film-card__rating-year flex">
          <p>${filmRating}</p>
          <p>${filmYear}</p>
        </div>
      </div>
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

class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="header flex bordered">
      <div class="header__search-bar rounded bordered">
        <div class="search-bar__zoom-icon"><img src="icons/zoom.img" alt="zoom icon"></div>
      </div>
      <div class="header__dropdown-menu"><img src="icons/dropdown.img" alt="dropdown menu icon"></div>
    </section>
    `;
  }
}

class THook extends HTMLElement {
  connectedCallback() {
    const filmCover = this.getAttribute("filmCover");
    const filmTitle = this.getAttribute("filmTitle");
    const filmDescrition = this.getAttribute("filmDescrition");
    const filmRating = this.getAttribute("filmRating");
    const filmYear = this.getAttribute("filmYear");
    this.innerHTML = `
    <section class="hook flex bordered">
        <div class="hook__icon-left"><img src="" alt="hook__icon-left"></div>
        <div class="hook__icon-right"><img src="" alt="hook__icon-right"></div>
        <img src="${filmCover}" alt="hook-vidOrImg" class="hook__img" />
        <div class="hook__info flex rounded bordered">
          <h2 class="info__film-title">${filmTitle}</h2>
          <p class="info__film-rating">${filmYear + ' ' + filmRating}</p>
          <div class="info__film-description">
            <p>
              ${filmDescrition}
            </p>
        </div>
      </section>
    `;
  }
}
customElements.define("t-grid__item", TfilmPage);
customElements.define("t-film-card", TfilmCard);
customElements.define("t-header", THeader);
customElements.define("t-hook", THook);
