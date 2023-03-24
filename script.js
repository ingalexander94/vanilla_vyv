mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleGFuZGVyLWJlbmdhbGkiLCJhIjoiY2xmaWg4czliMmNudzNxbjEyN2ZiNmdueSJ9.akD_X9IcmFEdJqF5iH5reg";
new mapboxgl.Map({
  container: map,
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-72.50782, 7.89391],
  zoom: 12,
});

const showFormPay = () => {
  payProject.classList.toggle("hide");
  formPay.classList.toggle("hide");
  options.classList.toggle("hide");
  buttonPay.classList.toggle("hide");
};
