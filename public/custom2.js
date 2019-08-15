
$(document).ready(function(){ userFeed = new Instafeed({
    get: 'user',
    userId: '6059179875',
    limit: 12,
    resolution: 'standard_resolution',
    accessToken: '6059179875.1677ed0.dac65dca2f1c4ca797b70eeb7a32a560',
    sortBy: 'most-recent',
    template: '<div><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" align="left"/></a></div>',
})
userFeed.run();
});