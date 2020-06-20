ymaps.ready(function () {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [59.936509, 30.317455],
      zoom: 11,
      controls: [""],
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
});
