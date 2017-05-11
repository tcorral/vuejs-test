function initApp(item) {
  new Vue({
    el: item,
    data: {
      message: 'Hello',
      myHTML: '<div>Hei</div>',
      age: 25,
      x: 0,
      y: 0
    },
    methods: {
      logAge: function () {
        console.log(typeof this.age);
      },
      greet: function () {
        return 'Good morning!';
      },
      add: function (years) {
        // if years are not supplied years is the Mouse Event
        years = typeof years === 'number' ? years : 1;
        this.age += years;
      },
      substract: function (years) {
        // if years are not supplied years is the Mouse Event
        years = typeof years === 'number' ? years : 1;
        this.age -= years;
      },
      trackMouse: function (event) {
        this.x = event.offsetX;
        this.y = event.offsetY;
      },
      click: function (message) {
        alert("You clicked me. " + message);
      },
      enterPressed: function () {
        alert('Enter has been pressed');
      },
      submit: function () {
        alert('Form is submitted');
      }
    }
  });
}

var apps = document.querySelectorAll('.app');

for(var i = 0, len = apps.length; i < len; i++) {
  initApp(apps[i]);
}
