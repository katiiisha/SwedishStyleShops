class Catalog {
  constructor(catalog) {
    this.catalog = catalog;
  }
  changeAssortment(link) {
    let cardProductAll = [
      ...this.catalog.querySelectorAll('.wrapper-card-product'),
    ];
    let cardProductChair = [...this.catalog.querySelectorAll('.product-chair')];
    let cardProductTable = [...this.catalog.querySelectorAll('.product-table')];
    link.classList.add('tabs-list_link__active');
    if (link.classList.contains('tabs-list_link__chair')) {
      cardProductChair.forEach((i) => {
        i.classList.add('wrapper-card-product__active');
      });
      cardProductTable.forEach((i) =>
        i.classList.remove('wrapper-card-product__active')
      );
    }
    if (link.classList.contains('tabs-list_link__table')) {
      cardProductTable.forEach((i) => {
        i.classList.add('wrapper-card-product__active');
      });
      cardProductChair.forEach((i) => {
        i.classList.remove('wrapper-card-product__active');
      });
    }
    if (link.classList.contains('tabs-list_link__all')) {
      cardProductAll.forEach((i) => {
        i.classList.add('wrapper-card-product__active');
      });
    }
  }
  changeActiveLink() {
    let tabsMenu = [...this.catalog.querySelectorAll('.tabs-list_link')];

    tabsMenu.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        tabsMenu.forEach((i) => {
          if (i.classList.contains('tabs-list_link__active')) {
            i.classList.remove('tabs-list_link__active');
          }
        });
        let link = e.target.closest('a');
        this.changeAssortment(link);
      });
    });
  }
}
const catalogs = document.querySelector('.catalog-menu');
const catalog = new Catalog(catalogs);
catalog.changeActiveLink();
