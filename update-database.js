keyValStore.set('foo', {hello: 'world'});

// logs: {hello: 'world'}
keyValStore.get('foo').then(val => console.log(val));
