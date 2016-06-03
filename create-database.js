const dbPromise = idb.open('my-db', 1, upgradeDB => {
  upgradeDB.createObjectStore('key-val');
});
