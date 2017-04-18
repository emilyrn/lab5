var tax = 0;
var total = 0;
var groceries = [

  {
    item: "Dog Food",
    price: 43.00
  },
  {
    item: "Treats",
    price: 3.00
  },
  {
    item: "Rawhide Bone",
    price: 2.00
  },
  {
    item: "Dog Bed",
    price: 32.00
  },
  {
    item: "Dog Toy",
    price: 9.00
  },
  {
    item: "Collar",
    price: 12.00
  },
  {
    item: "Leash",
    price: 19.00
  },
  {
    item: "Food Bowls",
    price: 15.00
  },
  {
    item: "FURminator",
    price: 34.00
  },
  {
    item: "Doggy Taco Costume",
    price: 28.00
  }
];

groceries.forEach(function(i){
    console.log(i.item + " $" + i.price + ".00");
    (total+=i.price);

});

(tax=total*0.06);
(total=total+tax);



console.log("Tax: $" + tax);
console.log("Total: $" + total);
