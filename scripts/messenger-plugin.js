window.fbAsyncInit = function() {
  FB.init({
    appId: '116389946876690',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v11.0'
  });
}


const chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "116389946876690");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v11.0'
  });
};

(function(d, s, id) {
  let js; const fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
