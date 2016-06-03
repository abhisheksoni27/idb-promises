const keyValStore = {
  get(key) {
    return dbPromise.then(db => {
      return db.transaction('key-val')
        .objectStore('key-val').get(key);
    });
  },
  set(key, val) {
    return dbPromise.then(db => {
      const tx = db.transaction('key-val', 'readwrite');
      tx.objectStore('key-val').put(val, key);
      return tx.complete;
    });
  },
  delete(key) {
    return dbPromise.then(db => {
      const tx = db.transaction('key-val', 'readwrite');
      tx.objectStore('key-val').delete(key);
      return tx.complete;
    });
  }
};
