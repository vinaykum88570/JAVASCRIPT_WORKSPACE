const map = new Map();

map.set("id1", "101");
map.set("id2", "102");
map.set("id3", "103");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":", value);
}

