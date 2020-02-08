console.log('on initialize');
export const onInitialize = ({ state, actions, effects }, instance) => {
  if (state.devState.restoreLocal)
    state.localAttributes
      .split(',')
      .forEach(attr => (state[attr] = effects.storage.getLocalAttribute(attr)));

  // effects.router.initialize({
  //   // '/': () => actions.changeFilter('all'),
  //   // '/active': () => actions.changeFilt('active'),
  //   // '/completed': () => actions.changeFilter('completed'),
  // });
};
