let colorSelector = document.getElementById('logoColors');
let containerSelector = document.getElementById('logoContainer');
let logoArr = document.getElementsByClassName('customer-logo');

colorSelector.addEventListener('change', (e) => {
  let selectedColor = e.target.value;
  [...logoArr].forEach((ele, idx) => {
    ele.classList.remove('is-brand', 'is-grayscale', 'is-white');
    ele.classList.add(`is-${selectedColor}`);
  });
});

logoContainer.addEventListener('change', (e) => {
  let containerChoice = e.target.value;
  console.log(e.target.checked);
  [...logoArr].forEach((ele, idx) => {
    if (e.target.checked) {
      ele.classList.add('is-contained');
    } else {
      ele.classList.remove('is-contained');
    }
  });
});
