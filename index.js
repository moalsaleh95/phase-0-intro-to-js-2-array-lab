// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return cats.push("Ralph");
}
// destructivelyAppendCat();

function destructivelyPrependCat() {
    return cats.unshift("Bob");
}
// destructivelyPrependCat();

function destructivelyRemoveLastCat() {
    return cats.pop();
}
// destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    return cats.shift();
}
// destructivelyRemoveFirstCat();

function appendCat() {
    let copyCats = [...cats, 'Broom'];
    return copyCats;
}
// appendCat();

function prependCat() {
    const copyCats = ['Arnold', ...cats];
    return copyCats;
}
// prependCat();

function removeLastCat() {
    const copyCats = [...cats];
    copyCats.pop();
    return copyCats;
}
// removeLastCat();

function removeFirstCat() {
    console.log(cats)
    const copyCat = [...cats];
    copyCat.shift();
    return copyCat;
}
// removeFirstCat();