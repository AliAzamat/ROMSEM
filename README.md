# Food Delivery Site — Front-End Build

**A multi-page front-end for a pizza and sushi delivery service, hand-built in HTML, SCSS, and vanilla JavaScript: a home page with a promo carousel and product slider, a sushi-sets catalog with sorting, a reviews page, and an order form.** The content is in Russian.

This is a layout and interaction exercise based on an existing delivery site's design; it isn't affiliated with that business.

## Pages

| File | Contents |
|---|---|
| `index.html` | Header with city, phone, and hours; sidebar category menu (pizza, sets, WOK, rolls, sushi, corn dogs, drinks, promotions); hero carousel; category tiles; product slider with "Popular / Hits / Current" filter tabs; expandable "about" text; footer; cart sidebar |
| `sety.html` | Catalog of sushi sets with a sort dropdown |
| `reviews.html` | Customer reviews |
| `order.html` | Delivery order form |

## Interactions

| Script | Behavior |
|---|---|
| `js/slider.js` | Two [Swiper](https://swiperjs.com/) instances: an autoplaying hero carousel with pagination and a three-up product slider with arrows |
| `js/filter.js` | Highlights the selected product filter tab |
| `js/sort.js` | Opens the sort menu and shows the selected option as the current sort |
| `js/accordion.js` | Expands and collapses the "about" section |

Styles follow a component/section split: `scss/index.scss` imports helpers (variables, mixins), components (header, sidebars, footer, goods, reviews), sections (slider, menu, products, about), and the order page partial. Fonts are Oswald and Roboto; Swiper 7 loads from a CDN.

## Working on it

```bash
git clone https://github.com/AliAzamat/ROMSEM.git
cd ROMSEM
npx sass --watch scss/index.scss css/index.css   # compiles cleanly
```

The compiled `css/index.css` is committed, so the HTML pages open directly in a browser.

## Limitations

- Filter tabs and sorting change only the active state; they don't reorder or filter products.
- The cart and order form are static — nothing is stored or submitted.
- No media queries, so the layout is desktop-only.
