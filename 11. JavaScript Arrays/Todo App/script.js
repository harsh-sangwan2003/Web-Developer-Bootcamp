var list = [];

var msg = prompt("What would you like you to do?");

while (msg != "quit") {

    if (msg == "list")
        console.log(list);

    else if (msg == "new") {

        var newTodo = prompt("Enter a new todo");
        list.push(newTodo);
        console.log(newTodo + " added to the list.");
    }

    else if (msg == "delete") {

        var idx = prompt("Which index would you like to delete?");
        list.splice(idx, 1);
        console.log("Todo removed");
    }

    msg = prompt("What would you like to do?");
}