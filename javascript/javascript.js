// These functions are for the names at the bottom of the page.
function noDuplicates(value, index, self) {
    return self.indexOf(value) == index;
}

function myFunction() {

    if (document.getElementById("alreadyList")) {
        alert('Link has already been activated.');
        return;
    }

    // Not too familiar with Java so had to look some of this stuff up unfortunately.
    // Tried learning a bit about hashtables and stuff, but I was short on time.

    const names1 = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
    const names2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];
    let both = names1.concat(names2);

    both = both.filter(noDuplicates);

    var ul = document.createElement('ul');
    ul.setAttribute("id", "alreadyList");

    both.forEach(function(name) {

        var li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);

    });

    var list = document.getElementById("list");
    list.appendChild(ul);

}