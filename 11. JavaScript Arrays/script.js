var list = [];

var msg = prompt("What would you like you to do?");

while (msg != "quit") {

    if (msg == "list")
        console.log(list);

    else {

        var newTodo = prompt("Enter a new todo");
        list.push(newTodo);
    }

    msg = prompt("What would you like to do?");
}