const router = require('express').Router();

const users = [];
let id = 0;

router.get('/users', (req, res) => {
  console.log('GET');
  res.send(users);
});

router.get('/users/:user_id', (req, res) => {
  console.log('GET');

  const user = users.find((u) => u.id === Number(req.params.user_id));

  if (!user) {
    res.status(404).send({ message: 'User not found' });
    return;
  }

  res.send(user);
});

router.post('/users', (req, res) => {
  console.log('POST');
  id += 1;

  const newUser = {
    ...req.body,
    id,
  };
  users.push(newUser);

  console.log(users);

  res.send(newUser);
});

module.exports = router;
