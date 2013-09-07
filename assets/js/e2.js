(function(window, $, _) {
  
  var engineers = [{
        name: 'Alex Bihary',
        gh: 'alexbihary',
        tw: 'alexbihary'
      }, {
        name: 'Matt Bromley',
        gh: '',
        tw: ''
      }, {
        name: 'Ben Gdovicak',
        gh: 'gdovicak',
        tw: 'gdovicak'
      }, {
        name: 'Dan Houseman',
        gh: '',
        tw: ''
      }, {
        name: 'Ryan Kachik',
        gh: 'ryankachik',
        tw: 'ryankachik'
      }, {
        name: 'Patrick Sullivan',
        gh: 'pragmaticpat',
        tw: 'pragmaticpat'
      }, {
        name: 'Chirag Patel',
        gh: '',
        tw: ''
      }, {
        name: 'Mike Roznik',
        gh: '',
        tw: ''
      }, {
        name: 'David Stoehr',
        gh: '',
        tw: ''
      }];
  
  _.forEach(engineers, function(engineer) {
    if (engineer.tw) {
      
    }
    
    if (engineer.gh) {
      var ghUser = new Gh3.User(engineer.gh);
      ghUser.fetch(function(err, user) {
        engineer.avatar = user.avatar_url;
      });
    }
  });
  
})(this, $, _);