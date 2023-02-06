const users2 = [
				  {
					first_name: 'Mike',
					location: 'London'
				  },
				  {
					first_name: 'Tim',
					location: 'US'
				  },
				  {
					first_name: 'John',
					location: 'Australia'
				  }
				];
			let loc=users2.map(function(user){
			return`${user.first_name} lives_in ${user.location}`;
			});
			console.log(loc);
			document.write("<br>",loc);