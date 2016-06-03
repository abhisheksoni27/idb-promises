dbPromise.then(db => {
  return db.transaction('objs')
    .objectStore('objs').getAll();
}).then(allObjs => console.log(allObjs));
