dbPromise.then(db => {
  return db.transaction('objs')
    .objectStore('objs').get(123456);
}).then(obj => console.log(obj));
