Package.describe({
  summary: "roomManager lets you manage rooms and users"
});

Package.on_use(function(api){
  api.use('accounts-ui', ['client', 'server']);
  api.use('accounts-password', ['client', 'server']);
  api.use('templating', 'client');
  api.use('jquery', 'client');
  api.use('underscore', ['client', 'server']);

  api.add_files('main.html', 'client');
  api.add_files('main.css', 'client');
  api.add_files('rooms.js', 'client');
  api.add_files('room-logic.js', 'client');
  api.add_files('shared.js', ['client', 'server']);
  api.add_files('server.js', 'server');
});