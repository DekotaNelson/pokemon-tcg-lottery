# Pokemon Trading Card Lottery 
These days Pokemon cards are like lottery tickets, with the most valuable Pokemon card worth $900,000! This web app lets you see just how much that card collection of yours is worth easily and quickly by utilizing the powers of APIs. How much will your card be worth? Check it out now with the live demo link below!

Link to live demo of project: https://pokemonlottery.netlify.app/

<p align="center">
  <img src="https://drive.google.com/uc?id=10yewNbIO6HOJHvNT1Ssk6ZjibkJwYOb7" alt="Pokemon Lottery home page" />
</p>

<p align="center">
  <img src="https://drive.google.com/uc?id=10yGMWReeB7EYOzckbM1nTNJOI1hXwm0G" alt="Pokemon Lottery card search example" />
</p>

# How It's Made:
Tech used: HTML, CSS, JavaScript, and APIs

Utilizing the PokemonTCG API, the app requests a search for the user’s inquiry. Then we pull the data from the API response for every different style of card for that particular pokemon. We then have to process some of the information through javascript conditionals to determine which kind of card we have due to the way the API is structured. Now we’re ready to start making our client sided cards that the user will see in the DOM. We take each trading card’s information and slide it into a dynamically created visual card that is populated into the DOM. After doing this for each card, the user can then browse through at their leisure. 

# Lessons Learned:
This project allowed me to learn more and dive deeper into dynamic rendering, API utilization, datasets, and tailoring my approach to the needs of a dataset. One of the parts I really enjoyed working on for this app was the javascript logic for parsing through the data that overcame the issues that arose due to the dataset and API structure. I also learned how important it can be to adapt an original design to meet the potentially unforeseen needs of the data being utilized.

# Other Projects:
Feel free to explore other projects I've worked on:

Thought Exchanger for finding and sharing thoughts: https://github.com/DekotaNelson/thought-exchanger

Ingredient Checker for Vegans/Vegetarians: https://github.com/DekotaNelson/dietary-product-look-up

Url Shortener Smols Us: https://github.com/DekotaNelson/smols-us
