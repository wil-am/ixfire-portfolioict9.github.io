let shoppinglist = [];

function display() {
  console.log(`
Welcome to the Shopping List Manager!

1. Add item
2. Remove item
3. Display list
4. Exit

Enter your choice: `);
}

function additem() {
  const item = prompt("To add the item, please enterm:");
  shoppinglist.push(item);
  console.log(`${item} added to the shopping list.`);
}

function removeitem() {
  const itemNumber = parseInt(prompt("To remove an Item, input the the item number:"));
  if (itemNumber <= 0 || itemNumber > shoppinglist.length) {
    console.log("Invalid item number!");
    return;
  }
  const itemToRemove = shoppinglist[itemNumber - 1];
  shoppinglist.splice(itemNumber - 1, 1);
  console.log(`${itemToRemove} removed from the shopping list.`);
}

function displaylist() {
  if (shoppinglist.length === 0) {
    console.log("Whoops! seems like it's empty!.");
    return;
  }
  console.log("Shopping List:");
  for (let i = 0; i < shoppinglist.length; i++) {
    console.log(`${i + 1}. ${shoppinglist[i]}`);
  }
}

function mainLoop() {
  while (true) {
    display();
    const choice = parseInt(prompt());
    switch (choice) {
      case 1:
        additem();
        break;
      case 2:
        removeitem();
        break;
      case 3:
        displaylist();
        break;
      case 4:
        console.log("Thank You For Choosing");
        return;
      default:
        console.log("Invalid Parameter");
    }
  }
}

mainLoop();