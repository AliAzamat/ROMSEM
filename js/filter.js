const filterItems = document.querySelectorAll('.products-filter__item');

filterItems.forEach((li,index) => {
  li.addEventListener('click', function () {
    filterItems.forEach(list => {
      list.classList.remove('products-filter__item_active')
    })
    li.classList.add('products-filter__item_active')
  })
})