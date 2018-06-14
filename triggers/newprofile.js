const listRecipes = (z, bundle) => {
  // z.console.log('hello from a console log!');
  // const promise = z.request('http://mytest.com:8000/api/newProfiles');
  const promise = z.request('http://esl-ninja.com/card_game/newProfile.php');
  return promise.then((response) => {
    return response.json;
  });
};

module.exports = {
  key: 'newProfile',
  noun: 'NewProfile',
  display: {
    label: 'New Profile',
    description: 'Trigger when a new profile is added.'
  },
  operation: {
    perform: listRecipes,
    sample: {
      id: 1,
      email: 'wangstar1031@hotmail.com',
      name: 'Wang Xing',
      headline: 'fullstack developer'
    },
    outputFields: [
      {key: 'id', label: 'ID'},
      {key: 'email', label: 'Email'},
      {key: 'name', label: 'Name'},
      {key: 'headline', label: 'Headline'}
    ]
  }
};