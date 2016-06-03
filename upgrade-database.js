const dbPromise = idb.open('my-db', 2, upgradeDB => {
  // Note: we don't use 'break' in this switch statement,
  // the fall-through behaviour is what we want.
  switch (upgradeDB.oldVersion) {
    case 0:
      upgradeDB.createObjectStore('key-val');
    case 1:
      upgradeDB.createObjectStore('objs', {keyPath: 'id'});
  }
});
