if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.subscribe("posts");

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<MenuComponent navs={navgation} />, document.getElementById('container'));
		ReactDOM.render(<Logo />, document.getElementById('logo'));
		ReactDOM.render(<FormComponent />, document.getElementById('sign-in'));
		ReactDOM.render(<NavUser />, document.getElementById('nav-user'));
		ReactDOM.render(<LoginSns />, document.getElementById('login-sns'));
  });
}