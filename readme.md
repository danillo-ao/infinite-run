Infinite Run!
-----
> Infinte run is n canvas game, created to study and practice how a game works, how is they life cycle and the logic behind the scenes. This game basically use Layers of "canvas" from html5, who're controlled fully by javascript

---

[![game screenshot](https://i.imgur.com/XrUlZwg.png "game screenshot")](https://i.imgur.com/XrUlZwg.png "game screenshot")

---

#### • Play the game!
To play the game, access: [http://danilloliveira.com.br](http://danilloliveira.com.br "http://danilloliveira.com.br")

---

#### • What was used to development
This game was been developed whitout **any** framework or thirdparty tool.

> HTML5

HTML5 was used to mount the game scene. But, the main feature of HTML5 used was the Canvas.
Canvas was been used like layers of photoshop project. In the game scene, i've added one canvas over another, each one responsable to controll one element of the game. There is one Canvas to controll the player, one to controll the enemies, one to controll the coins, and so on.

> javascript (typescript)

Javascript is the core of this game.
I've chosen to use TypeScript, by many reasons. The main reason, is the variables typing, what for me is the most attractive feature of typescript. The second feature what makes me chosen to use typescript, are the Interfaces, they're very helpful to keep the patterns during the development, and helps on time of we need to call some props.

> CSS (SASS)

Used to positioning some elements, to define the patterns of typographies. Creation of keyframes animations like blink and fading

#### • How game was developed
----
The game use the POO architecture, where each of one objects of the game, is an controller in typescript

Basically, the game has one controller, that i'll call "master". This controller, is responsable to control each one another controllers. Also, it store the game values, like score, coins getted, the high score and etc. This controller is responsable by life cycle of the game, using an interval to draw and redraw the scene, calling the other controllers.

Each of Canvas in the scene, has an Controller in TypeScript, who is responsable to controll your game object, like enemies, player, coins and so on. This controller will draw and redraw your own canvas, this way, the another objects in the scene will not be affected by this controller. Also, each controller has your own feature. For example, Enemies and coins controllers, has your own script to detect collision with the player. The background and the floor controllers, has your own Parallax script.

Therefore, all of elements and objects can be controlled separated, so that it does not conflict each with other

#### Assets
----
In the first version, the game use assets of classic games like Sonic and Super Mario. The game was developed just and only to study and practice. And there is no profit end.
But, my intention is redraw every asset to my own. That way, i practice some art skills.

Every asset used in this game, can be found for free in the internet. In my case, i found it in the [spriters-resource](https://www.spriters-resource.com/ "spriters-resource")
