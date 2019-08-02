var signup = (function() {
	var sc = {};

	var $username;
	var $password;

	$(document).ready(function() {
		sc.init();
	})

	sc.init = function() {
		$username = $('#username');
		$password = $('#password');
		$('#signup').on('click',signup)
	}

	function signup() {
		if ($username.val() == '') {
			alert('Username cannot be empty');
		} else if ($password.val() == '') {
			alert('Password cannot be empty')
		} else {
			$.post('/users',{func: 'createUser', identity: $username.val(),password: $password.val()},null,'json')
			.done(function(response) {
				console.log(response.users)
				console.log(isempty(response.users))
				if (isempty(response.users)) {
					alert('Username is already taken. Please try again.')				}
				else {
					document.location.href = '/site';
				}

			})
		}
	}

	return sc;
})();
