(async () => {
  const express = require('express');
  const app = express();
  const fileupload = require('express-fileupload');

  app.use(fileupload());

  const { init } = require('./integrations/db');
  await init();

  const { controllers } = require('./controllers');

  app.use('/api', controllers);

  const port = 3001;
  app.listen(port, () => {
    console.log(`listening ${port}`);
  });
})();
