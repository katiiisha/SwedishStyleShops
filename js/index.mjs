import Swiper from '../node_modules/swiper/swiper-bundle.mjs';
import { catalogCard } from './cardInfo.mjs';

const swiper = new Swiper('.swiper', {
  // loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  enabled: true,

  pageUpDown: true,
  slidesPerView: 3,
  centerSlide: true,
  fade: true,
  spaceBetween: 25,
});
const catalogSwiper = new Swiper('.my-swiper', {
  // loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  enabled: true,
  pageUpDown: true,
  slidesPerView: 1,
  centerSlide: true,
  fade: true,
  spaceBetween: 25,
  // grabCursor: true,
});

class Cart {
  constructor(openCart, modalCart, closeCart, cards) {
    this.open = openCart;
    this.modalCart = modalCart;
    this.close = closeCart;
    this.cardsInfo = cards;
  }

  closeCart() {
    this.close.addEventListener('click', () => {
      modalCart.classList.remove('modal-shopping-cart__active');

      bodyScrollLock.enableBodyScroll(modalCart);
    });
  }
  createCard(card) {
    let data = this.cardsInfo.find((item) => item.title === card);

    let li = document.createElement('li');
    li.className = 'list-buy_item';
    li.setAttribute('data-name', data.name);

    let wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'wpapper-item';

    let closeBtn = document.createElement('button');
    closeBtn.className = 'item_delete';

    let item = document.createElement('div');
    item.className = 'item';
    let img = document.createElement('div');
    img.className = 'item_img';
    img.style.backgroundImage = `url(${data.img})`;
    let header = document.createElement('div');
    header.className = 'item_header';
    let title = document.createElement('p');
    title.className = 'item_title';
    title.textContent = data.title;
    let desc = document.createElement('p');
    desc.className = 'item_desc';
    let descColor = document.createElement('span');
    descColor.className = 'item_desc__color';

    let descP = document.createElement('p');
    descP.className = 'item_desc';
    let descSize = document.createElement('span');
    descSize.className = 'item_desc_size';
    descSize.textContent = `${parseInt(data.dimensions.widthFull)} х ${parseInt(
      data.dimensions.heightFull
    )} х ${parseInt(data.dimensions.depthFull)}`;

    let controls = document.createElement('div');
    controls.className = 'control-buttons';
    let btnMihus = document.createElement('button');
    btnMihus.className = 'сontrol-button control-buttons__minus';
    btnMihus.innerHTML = '&#150;';
    let quantity = document.createElement('span');
    quantity.className = 'сontrol-button control-button__quantity';
    quantity.textContent = '1';
    let btnPlus = document.createElement('button');
    btnPlus.className = 'сontrol-button control-buttons__plus';
    btnPlus.textContent = '+';
    let price = document.createElement('span');
    price.className = 'сontrol-button control-buttons__price';
    price.textContent = data.price;
    controls.append(btnMihus, quantity, btnPlus, price);
    descP.append(descSize);
    desc.append(descColor);
    header.append(title, desc, descP);
    item.append(img, header);
    wrapperDiv.append(closeBtn, item, controls);
    li.appendChild(wrapperDiv);
    return li;
  }
  addProduct(data) {
    let list = document.querySelector('.list-buy');
    let item = [...document.querySelectorAll('.list-buy_item')];
    let newItem = this.createCard(data);
    if (item.length === 0) {
      list.append(newItem);
    } else {
      let repeat = item.find((i) => {
        return i.dataset.name === newItem.dataset.name;
      });
      if (repeat) {
        let quantity = repeat.querySelector('.control-button__quantity');
        quantity.textContent = Number(quantity.textContent) + 1;
      } else {
        list.append(newItem);
      }
    }
  }

  calculationAmout() {
    let summa = [...document.querySelectorAll('.control-buttons__price')];
    let summaText = [...document.querySelectorAll('.summa-cart')];
    let summaA = 0;
    summa.forEach((i) => {
      summaA = summaA + parseInt(i.textContent);
    });
    summaText.forEach((i) => {
      i.textContent = summaA + '' + 'P';
    });
  }
  deleteItem() {
    let deleteBtn = [...document.querySelectorAll('.item_delete')];

    deleteBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let test = e.target.closest('.item_delete');
        test.closest('li').remove();
        this.calculationAmout();
      });
    });

    this.calculationAmout();
  }
  changeQuantity() {
    let controlBtn = [...document.querySelectorAll('.сontrol-button')];

    controlBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let title = e.target
          .closest('.wpapper-item')
          .querySelector('.item_title')
          .textContent.toLowerCase();
        let data = catalogCard.find((item) => {
          return item.title == title;
        });

        let quantity = e.target
          .closest('.control-buttons')
          .querySelector('.control-button__quantity');
        let price = e.target
          .closest('.control-buttons')
          .querySelector('.control-buttons__price');

        if (e.target.classList.contains('control-buttons__minus')) {
          if (quantity.textContent == 1) {
            return;
          } else {
            quantity.textContent = Number(quantity.textContent) - 1;
          }
        }
        if (e.target.classList.contains('control-buttons__plus')) {
          if (quantity.textContent == 100) {
            return;
          } else {
            let quantity = e.target
              .closest('.control-buttons')
              .querySelector('.control-button__quantity');
            quantity.textContent = Number(quantity.textContent) + 1;
            // price.textContent =
            //   parseInt(data.price) * Number(quantity.textContent) + '' + 'Р';
          }
        }
        price.textContent =
          parseInt(data.price) * Number(quantity.textContent) + '' + 'Р';
        this.calculationAmout();
      });
    });
  }
  openCart() {
    this.open.addEventListener('click', () => {
      modalCart.classList.add('modal-shopping-cart__active');
      bodyScrollLock.disableBodyScroll(modalCart);
      this.deleteItem();
      this.changeQuantity();
      this.calculationAmout();
    });
  }
}

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

class CardModal {
  constructor(card, modal, cards) {
    this.card = [...document.querySelectorAll(`.${card}`)];
    this.modal = document.querySelector(`.${modal}`);
    this.slide = document.querySelector('.my-swiper');
    this.catalog = document.querySelector('.all-catalog');
    this.cardsInfo = cards;

    // this.cartArr = [];
  }
  changeInfo(name) {
    let data = this.cardsInfo.find((item) => item.name === name);

    this.modal.querySelector('.desc-item__title').textContent = data.title;
    this.modal.querySelector('.desc-item_price').textContent = data.price;

    this.modal.querySelector('.quantity').textContent = data.base.quantity;
    this.modal.querySelector('.load').textContent = data.base.load;

    this.modal.querySelector('.heightSeat').textContent = data.size.heightSeat;
    this.modal.querySelector('.widthSeat').textContent = data.size.widthSeat;
    this.modal.querySelector('.depthSeat').textContent = data.size.depthSeat;
    this.modal.querySelector('.heightBack').textContent = data.size.heightBack;
    this.modal.querySelector('.widthBack').textContent = data.size.widthBack;

    this.modal.querySelector('.widthFull').textContent =
      data.dimensions.widthFull;
    this.modal.querySelector('.heightFull').textContent =
      data.dimensions.heightFull;
    this.modal.querySelector('.depthFull').textContent =
      data.dimensions.depthFull;
    this.modal.querySelector('.weight').textContent = data.dimensions.weight;

    this.modal.querySelector('.frame').textContent = data.material.frame;
    this.modal.querySelector('.coating').textContent = data.material.coating;

    this.modal.querySelector(
      '.product-img-one'
    ).src = `img/catalogPage/cardProduct/${name}/chair2.png`;
    this.modal.querySelector(
      '.product-img-two'
    ).src = `img/catalogPage/cardProduct/${name}/chair3.png`;
    this.modal.querySelector(
      '.chair-size-img'
    ).src = `img/catalogPage/cardProduct/${name}/size.png`;

    this.modal.querySelector(
      '.inner-slide-prev'
    ).style.backgroundImage = `url(../img/catalogPage/cardProduct/${name}/chair1.png)`;
  }

  closeModal(a, withinBoundaries) {
    if (!withinBoundaries && a === false) {
      this.modal.classList.remove('modal-card-product__active');
      bodyScrollLock.enableBodyScroll(this.modal);
    }
  }
  openModal() {
    this.card.forEach((c) => {
      c.addEventListener('click', (e) => {
        let name = e.target.closest('div').dataset.name;
        this.changeInfo(name);
        this.modal.classList.add('modal-card-product__active');
        this.modal.scrollIntoView({ block: 'start', behavior: 'smooth' });
        bodyScrollLock.disableBodyScroll(this.modal);

        document.addEventListener('click', (e) => {
          const withinBoundaries = e.composedPath().includes(this.slide);
          const a = e.composedPath().includes(this.catalog);
          this.closeModal(a, withinBoundaries);
        });
      });
    });
  }
}

const card = new CardModal(
  'wrapper-card-product',
  'modal-card-product ',
  catalogCard
);
card.openModal();

const catalogs = document.querySelector('.catalog-menu ');
const catalog = new Catalog(catalogs);
catalog.changeActiveLink();

const cartLink = document.querySelector('.menu_item__cart');
const modalCart = document.querySelector('.modal-shopping-cart');
const closeModalCart = modalCart.querySelector('.shopping-cart_close');
const cartTexst = new Cart(cartLink, modalCart, closeModalCart, catalogCard);
cartTexst.openCart();
cartTexst.closeCart();

document.querySelector('.desc-item-cart').addEventListener('click', (e) => {
  let product = e.target
    .closest('.desc-list')
    .querySelector('.desc-item__title')
    .textContent.toLowerCase();

  cartTexst.addProduct(product);
});
