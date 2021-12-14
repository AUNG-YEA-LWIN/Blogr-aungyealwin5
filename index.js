	var a;
		function show_hide(){
				
			if(a==1)
				{
					document.getElementById('nav-contact').style.display="none";
					return a=0;
				}

				else
				{
					document.getElementById('nav-contact').style.display="block";
					return a=1;


				}
			}

	let changeIcon = function (icon){

		icon.classList.toggle('fa-times');
	}


		function show_hide_phoe_size(){
				
			if(a==1)
				{
					document.getElementById('ph-contact').style.display="none";
					return a=0;
				}

				else
				{
					document.getElementById('ph-contact').style.display="block";
					// document.getElementById('icon2').classList.toggle('fa-sort-up');
					return a=1;

				}

			}
