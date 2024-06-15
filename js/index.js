// import Swiper from '../node_modules/swiper/swiper-bundle.mjs';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
// import { catalogCard } from './cardInfo.mjs';

const catalogCard = [
  {
    name: 'nordvik',
    title: 'стул нордвик',
    img: 'img/catalogPage/catalog-menu/chair3.png',
    base: {
      quantity: '1 шт',
      load: '100 кг',
    },
    size: {
      heightSeat: '44 см',
      widthSeat: '43 см',
      depthSeat: '36 см',
      heightBack: '48 см',
      widthBack: '43 см',
    },
    dimensions: {
      widthFull: '41 см',
      heightFull: '90 см',
      depthFull: '47 см',
      weight: '3,7 кг',
    },
    material: {
      frame: 'Дерево, сосна',
      coating: 'Влагостойкое, матовое, лакированное',
    },
    price: '3200 P',
  },
  {
    name: 'herald',
    title: 'стул вестник',
    price: '3900 P',
    img: 'img/catalogPage/catalog-menu/chair2.png',
    base: {
      quantity: '1 шт',
      load: '100 кг',
    },
    size: {
      heightSeat: '44 см',
      widthSeat: '41 см',
      depthSeat: '41 см',
      heightBack: '46 см',
      widthBack: '33 см',
    },
    dimensions: {
      widthFull: '41 см',
      heightFull: '90 см',
      depthFull: '47 см',
      weight: '3,7 кг',
    },
    material: {
      frame: 'Дерево, сосна',
      coating: 'Влагостойкое, матовое, лакированное',
    },
    contry: 'Беларусь',
  },
  {
    name: 'lisabo',
    title: 'стул лисабо',
    price: '4100 P',
    img: 'img/catalogPage/catalog-menu/chair4.png',
    base: {
      quantity: '2 шт',
      load: '120 кг',
    },
    size: {
      heightSeat: '44 см',
      widthSeat: '41 см',
      depthSeat: '41 см',
      heightBack: '46 см',
      widthBack: '33 см',
    },
    dimensions: {
      widthFull: '50 см',
      heightFull: '90 см',
      depthFull: '43 см',
      weight: '11 кг',
    },
    material: {
      frame: 'Дерево, сосна',
      coating: 'Влагостойкое, матовое, лакированное',
    },
  },
  {
    name: 'country',
    title: 'cтул кантри',
    price: '4200 P',
    img: 'img/catalogPage/catalog-menu/chair5.png',
    base: {
      quantity: '1 шт',
      load: '140 кг',
    },
    size: {
      heightSeat: '46 см',
      widthSeat: '44 см',
      depthSeat: '41 см',
      heightBack: '57 см',
      widthBack: '34 см',
    },
    dimensions: {
      widthFull: '44 см',
      heightFull: '103 см',
      depthFull: '48 см',
      weight: '5 кг',
    },
    material: {
      frame: 'Дерево,  массив сосна',
      coating: 'Влагостойкое, матовое, лакированное',
    },
  },
  {
    name: 'ingolt',
    title: 'стул ингольт',
    price: '4200 P',
    img: 'img/catalogPage/catalog-menu/chair1.png',
    base: {
      quantity: '1 шт',
      load: '140 кг',
    },
    size: {
      heightSeat: '45 см',
      widthSeat: '42 см',
      depthSeat: '38 см',
      heightBack: '47 см',
      widthBack: '42 см',
    },
    dimensions: {
      widthFull: '40 см',
      heightFull: '91 см',
      depthFull: '53 см',
      weight: '5 кг',
    },
    material: {
      frame: 'Сосна',
      coating: 'Влагостойкое, матовое, лакированное',
    },
  },
];

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
  breakpoints: {
    220: {
      slidesPerView: 1,
    },
    420: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
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
    this.open = [...openCart];
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
    this.open.forEach((cart) => {
      cart.addEventListener('click', () => {
        modalCart.classList.add('modal-shopping-cart__active');
        // bodyScrollLock.disableBodyScroll(modalCart);
        this.deleteItem();
        this.changeQuantity();
        this.calculationAmout();
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
class burgerMenu {
  constructor(menu, activeClass) {
    this.menu = menu;
    this.activeClass = activeClass;
  }
  close() {
    this.menu.classList.remove(`${this.activeClass}`);
    bodyScrollLock.enableBodyScroll(this.menu);
  }
  open() {
    this.menu.classList.add(`${this.activeClass}`);
    bodyScrollLock.disableBodyScroll(this.menu);
  }
}
const modalBurgerMenu = new burgerMenu(
  document.querySelector('.wrapper-menu-burger'),
  'wrapper-menu-burger__active'
);
document.querySelector('.menu_item__menu').addEventListener('click', () => {
  modalBurgerMenu.open();
});
document.querySelector('.menu-burger-btn').addEventListener('click', () => {
  modalBurgerMenu.close();
});
const card = new CardModal(
  'wrapper-card-product',
  'modal-card-product ',
  catalogCard
);
card.openModal();

const cartLink = document.querySelectorAll('.menu_item__cart');
const modalCart = document.querySelector('.modal-shopping-cart');
const closeModalCart = modalCart.querySelector('.shopping-cart_close');
const cartTexst = new Cart(cartLink, modalCart, closeModalCart, catalogCard);
cartTexst.openCart();
cartTexst.closeCart();

if (document.querySelector('.desc-item-cart')) {
  document.querySelector('.desc-item-cart').addEventListener('click', (e) => {
    let product = e.target
      .closest('.desc-list')
      .querySelector('.desc-item__title')
      .textContent.toLowerCase();

    cartTexst.addProduct(product);
  });
}
