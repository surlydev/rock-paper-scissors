var hands = ['rock', 'paper', 'scissors'];

var init = function() {

};

var play = function() {
  var hand = hands[Math.floor(Math.random() * 3)];
  return Math.random() < 0.25 ? 'water' : hand;
};

var result = function(result) {

};
