const PHOTOS = [
  "BUONAVISTA_APARTAMENTO_VIVIENDA_CUCUTA_PRADOSNORTE_INVERSION_HOGAR-7.jpeg",
  "BUONAVISTA_APARTAMENTO_VIVIENDA_CUCUTA_PRADOSNORTE_INVERSION_HOGAR-1.jpeg",
  "BUONAVISTA_APARTAMENTO_VIVIENDA_CUCUTA_PRADOSNORTE_INVERSION_HOGAR-8.jpeg",
  "BUONAVISTA_APARTAMENTO_VIVIENDA_CUCUTA_PRADOSNORTE_INVERSION_HOGAR-3.jpeg",
];
badge[0].innerText = `1 / ${PHOTOS.length}`;
badge[1].innerText = `1 / ${PHOTOS.length}`;
let index = 0;

const isMobile = window.matchMedia("(min-width: 420px)").matches;

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

const openSimulator = () => {
  window.open(
    "https://www.bancolombia.com/personas/creditos/vivienda/simulador-credito-vivienda"
  );
};

const toRight = () => {
  index = index < PHOTOS.length - 1 ? index + 1 : 0;
  photoActive[isMobile ? 0 : 1].src = `./assets/${PHOTOS[index]}`;
  badge[isMobile ? 0 : 1].innerText = `${index + 1} / ${PHOTOS.length}`;
};

const toLeft = () => {
  index = index > 0 ? index - 1 : PHOTOS.length - 1;
  photoActive[isMobile ? 0 : 1].src = `./assets/${PHOTOS[index]}`;
  badge[isMobile ? 0 : 1].innerText = `${index + 1} / ${PHOTOS.length}`;
};

const openGallery = () => {
  dashboard.classList.add("no-scroll");
  modalGallery.style.display = "grid";
};

const closeGallery = () => {
  dashboard.classList.remove("no-scroll");
  modalGallery.style.display = "none";
};
