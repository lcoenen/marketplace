# Marketplace

Marketplace is a simple website using the MEAN (MongoDB, express, angular.js, Node.js) stack, coffeescript and SASS (made for auto-didactic purpose). It should provide all the feature of a modern marketplace website with multiple vendors, vendors and items feedbacks and payment system. A website UI can be modelised as a finished list of interaction between concepts, merely supported by the technical and graphical part of the project. Here is the list of concepts used by the website : 

* An **user** can either sell (he's the **vendor**) or buy (he's a **client**) items
* A **category** contains a certain number of *item*. Each item has a *category*
* The **bask** will store item until the *transaction*
* An **order** is made to an *user* (the *vendor*) by a *client* (which is also an *user*) for a certain ammount of *items* to a specific *adress* after the *transaction* have been settled.
* A **transaction** is made between a vendor and a buyer by exchanging money
* A **feedback** is written by the *client* about the *vendor* or the *item* after the *order* have been received.

## Use cases

As we said, the user can either be (mainly) a seller or a buyer. We'll then use these two simple set of use cases to clarify the workflow :

### Client

* Title: Buying a watch and a scarf 
* Primary Actor: Stephan the Buyer
 Level: +

> Stephan want to buy a little present for his girlfriend's birthday. 
> He'll browse to market.place and discover the most bought product.
> Since he can't see neither any scarfes nor watches, he'll *find the item he want*
> Once he managed to find the scarf, after he checked feedbacks
> about the item, he will add the item to the bask. He'll do the same 
> for the watch. Once he's ready to pay, he will *proceed to checkout*.
> He'll then *leave a feedback* to the vendor saying his girlfriend 
> was so happy with her gift.

* Title: Finding the item he want
* Primary Actor: Stephan the Buyer
* Level: !
 
> Stephan will either use the search bar on the top of the webpage, 
> which will autofill what he's typing with the correct proposition.
> He could also browse through the differents *categories* showed on
> the right of his screen, from broader to narrower categories.

* Title: Proceed to checkout
* Primary Actor: Stephan the Buyer
* Level: !
 
> Stephan will check his bask, keep browsing until he has everything he want,
> or delete some items if he doesn't want them anymore, then checkout. 
> He'll recieve a specific two specific bank account adress with how much 
> he own to each vendor. He'll also recieve an URL to *leave a feedback* 
> once he'll recieve his items.

* Title: Leave a feedback
* Primary Actor: Stephan the Buyer
* Level: !
 
> Once he recieved his scarf and watch, he'll connect to the URL he recieved when
> he checked out. The system will remember he bought a scarf and a watch, and he'll
> be able to leave a feedback of one star for the scarf (which wasn't that pretty after all)
> and to give four star for the gold watch.

### Seller

* Title: Sending a scarf
* Primary Actor: Barack the Seller
* Scope: System (black-box)	
* Level: +
 
> Barack is a scarf seller. He'll wake up in the morning and connect
> to the website, identify himself and check today orders. He'll discover an
> order have been paid to an adress in New-York and that a feedback have been
> left on his page.

## Usage

Compile client and server, then serve

`make` 

Just compile everything

`make compile`

Run the server on `localhost:80`

`make serve`

Run unittests

`make test`

Run docco and create the documentation

`make doc`

Clean the arborescece

`make clean`

