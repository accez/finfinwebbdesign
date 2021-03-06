// For details: http://diveinto.html5doctor.com/history.html

// Clicks on links
$(document).on('click', 'a', function (e) {
  // assume all links starting with '/' are internal
  let link = $(this).attr('href');
  if (link.indexOf('/') === 0) {
    e.preventDefault(); // no hard reload of page
    history.pushState(null, null, link); // change url (no reload)
    frontendRouter(link); // tell the router
  }
});

// Listen to back/forward
window.addEventListener("popstate", () => {
  frontendRouter(location.pathname);
});

// On page load
frontendRouter(location.pathname);

// The router (do whatever you want here)
function frontendRouter(path) {
  let routes = {
    '/': () => { $('body main > *').hide(); $('.start-page').show(); },
    '/game': () => { $('body main > *').hide(); $('.game').show(); loadGame(); },
    '/highscore': () => { $('body main > *').hide(); $('.highscore').show(); },
    '/history': () => { $('body main > *').hide(); $('.history').show(); },
  };
  // no path found then change path to '/404';
  // path = routes[path] ? path : '/404';
  // run the function associated with the path
  routes[path]();
}