//business Logic
function Pizza(name, size, toppings, crust, number) {
  this.customerName = name;
  this.pizzaSize = size;
  this.orderToppings = toppings;
  this.orderCrust = crust;
  this.orderNumber = number;
}
Pizza.prototype.calculatePrice = function() {
  var totalPrice = 0;
  if (this.pizzaSize === "large") {
    this.totalPrice = 800;
  } else if (this.pizzaSize === "medium") {
    this.totalPrice = 600;
  } else if (this.pizzaSize === "small") {
    this.totalPrice = 400;
  }
  if (this.orderCrust === "crispy") {
    this.totalPrice += 150;
  } else if (this.orderCrust === "stuffed") {
    this.totalPrice += 250;
  } else if (this.orderCrust === "glutten-free") {
    this.totalPrice += 300;
  }
  if (this.orderToppings === 4) {
    this.totalPrice += 400;
  } else if (this.orderToppings === 3) {
    this.totalPrice += 300;
  } else if (this.orderToppings === 2) {
    this.totalPrice += 200;
  } else if (this.orderToppings === 1) {
    this.totalPrice += 100;
  } else {}

  return this.totalPrice

}

//user logic
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var orderName = $(".customer-name").val();
    var orderSize = $(".pizza-size").val();
    var orderCrust = $(".pizza-crust").val();
    var pizzaNumber = parseInt($("input#pizza-number").val(), 10);

    var orderToppings = 0;
    for (i = 0; i < document.pizzaorder.topping.length; i++) {
      if (document.pizzaorder.topping[i].checked == true) {
        orderToppings += 1;
      }
    }
    var newOrder = new Pizza(orderName, orderSize, orderToppings, orderCrust);

    $("#total").text("Ksh." + newOrder.calculatePrice().toFixed(2));
    $("#name").text(orderName);
    $("#show-price").show();
  });
  $("#delivery").submit(function() {

    var name = $("input#name").val();
    var number = $("input#number").val();
    var location = $("input#location").val();

    alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " + location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing mama's pizzeria.");
  });
});
