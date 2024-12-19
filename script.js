ymaps.ready(init);

function init() {
  // Создание карты
  const map = new ymaps.Map("map", {
    center: [44.977109, 34.095727], // Координаты центра (Москва)
    zoom: 14,
  });

  // Добавление маркера
  const placemark = new ymaps.Placemark(
    [44.977109, 34.095727],
    {
      hintContent: "Приют для животных",
      balloonContent: "Здесь можно найти приют для животных",
    },
    {
      preset: "islands#redIcon",
    }
  );

  map.geoObjects.add(placemark);
}