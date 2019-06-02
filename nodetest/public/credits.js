function createCredits(){
	var creditRoll = document.createElement('section');
	creditRoll.setAttribute("id", "creditRoll");
	creditRoll.setAttribute("class", "star-wars");
	document.body.insertBefore(creditRoll, document.body.firstChild);

	var crawlDiv = document.createElement('div');
	crawlDiv.setAttribute("id", "crawlDiv");
	crawlDiv.setAttribute("class", "crawl");
  	document.getElementById("creditRoll").append(crawlDiv);

	var winTitle = document.createElement('div');
	winTitle.setAttribute("class", "title");
	winTitle.textContent = ("YOU WON!")
	document.getElementById("crawlDiv").append(winTitle);

	var creditPar = document.createElement('p');
	var creditText = "This was our Oregon State University Senior Capstone Project!";
  	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);
  
  	creditPar = document.createElement('p');
	creditText = "The Developers were:";
  	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);
  
  	creditPar = document.createElement('p');
	creditText = "Christopher Frenchi";
  	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);
  
  	creditPar = document.createElement('p');
	creditText = "Johnathan Ruby";
  	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);
  
  	creditPar = document.createElement('p');
	creditText = "Ruben Torres";
  	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);
  
	creditPar = document.createElement('p');
	creditText = "Our stack was three.js for graphics, javascript for game engine and logic (muscles), css for our UI (skin), html for our script and DOM access (skeleton).";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "The models were created, animated, and exported to gltf in Blender 2.80 beta. The server was Node.js. This website is hosted on an AWS Lightsail.";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "Special shoutouts to:";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "Our friends and families for putting up with us during our last term!";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "Stackoverflow; for all the things we didn't know and all the people who suffered before us to share knowledge.";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "three.js; for making such an amazing library! The documentation and source examples were amazing.";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "Google; turning incoherent ramblings into links.";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "github; for hosting our code repo.";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "git; for making version control a breeze.";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "AWS Lightsail; for making private server management easy.";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "Node.js; for making setting up servers easy!";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "Developed on Linux (Ubuntu 19.04), Mac (MacOs), Windows (10) for the web!";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);

	creditPar = document.createElement('p');
	creditText = "Thank you to our testers: Alex Davila, Taylor Kennedy Frenchi, and YOU!";
	creditPar.textContent = creditText;
	document.getElementById("crawlDiv").append(creditPar);
	
	function clearCredits(){
		document.body.removeChild(creditRoll);
	}
	
	setTimeout(function(){
		clearCredits();
	}, 45000);
}
