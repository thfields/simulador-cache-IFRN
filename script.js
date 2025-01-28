const database = [
    { key: 1, value: "gato" }, { key: 2, value: "lobo" }, { key: 3, value: "sapo" },
    { key: 4, value: "rato" }, { key: 5, value: "pato" }, { key: 6, value: "lince" },
    { key: 7, value: "leão" }, { key: 8, value: "urso" }, { key: 9, value: "anta" },
    { key: 10, value: "tatu" }, { key: 11, value: "cavalo" }, { key: 12, value: "elefante" },
    { key: 13, value: "girafa" }, { key: 14, value: "hipopótamo" }, { key: 15, value: "jacaré" },
    { key: 16, value: "macaco" }, { key: 17, value: "onça" }, { key: 18, value: "porco" },
    { key: 19, value: "raposa" }, { key: 20, value: "tigre" }
];

let cache = [];
const cacheSize = 5;
let hits = 0;
let misses = 0;

function renderDatabase() {
    const dbList = document.getElementById("database");
    dbList.innerHTML = "";
    database.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.key} - ${item.value}`;
        li.onclick = () => requestData(item.key, item.value);
        dbList.appendChild(li);
    });
}

function renderCache() {
    const cacheList = document.getElementById("cache");
    cacheList.innerHTML = "";
    cache.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.key} - ${item.value}`;
        cacheList.appendChild(li);
    });
}

function requestData(key, value) {
    const policy = document.querySelector('input[name="policy"]:checked').value;

    const found = cache.find(item => item.key === key);
    if (found) {
        hits++;
    } else {
        misses++;
        if (cache.length >= cacheSize) {
            if (policy === "FIFO") {
                cache.shift();  // Remove o mais antigo
            } else if (policy === "LRU") {
                cache.sort((a, b) => a.lastUsed - b.lastUsed);
                cache.shift();  // Remove o menos recentemente usado
            } else if (policy === "LFU") {
                cache.sort((a, b) => a.usage - b.usage);
                cache.shift();  // Remove o menos frequentemente usado
            }
        }
        cache.push({ key, value, lastUsed: Date.now(), usage: 1 });
    }

    document.getElementById("hits").textContent = hits;
    document.getElementById("misses").textContent = misses;
    renderCache();
}

document.getElementById("generate").onclick = function () {
    const randomIndex = Math.floor(Math.random() * database.length);
    const item = database[randomIndex];
    requestData(item.key, item.value);
};

renderDatabase();
renderCache();
