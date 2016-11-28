ymaps.ready(function () {
    var myMap = new ymaps.Map('map-id', {
        center: [59.939281, 30.329197],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
        hintContent: ''
    }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-mark.png',
            // Размеры метки.
            iconImageSize: [218, 142],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-41, -142]
        });

    myMap.geoObjects.add(myPlacemark);
});