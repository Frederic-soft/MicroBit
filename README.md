# Microbit
Projets pour cartes [BBC micro:bit](https://microbit.org)

Il suffit d'importer les fichiers ``.hex`` dans [MakeCode](https://makecode.microbit.org/) pour utiliser ces projets.

Il est également possible d'utiliser l'[application "offline"](https://makecode.microbit.org/offline-app)

* Boussole : affiche une flèche qui indique le nord. Il faut calibrer le capteur de champ magnétique en déplaçant un pixel sur tout l'écran au démarrage du programme.
* De : lance un dé à 6 faces lorsqu'on secoue la carte.
* DetecteurIR : affiche l'état d'un détecteur de proximité à infra-rouges connecté à la patte 2.
* DetecteurUltraSons : joue un La lorsqu'un obstacle se situe à moins de 15cm du capteur à ultra-sons connecté aux pattes 0 et 1.
* Fax : permet de choisir une image avec le bouton B, et de la transmettre par radio à toutes les cartes en appuyant sur le bouton A.
* LED : trois exemples de déplacement d'une "balle" sur l'écran, à faire en progression pédagogique :
	* LED-AB : déplace une "balle" horizontalement à l'aide des boutons A (gauche) et B (droite).
	* LED-Accel : déplace une "balle" horizontalement en inclinant la carte vers la gauche ou vers la droite (mais il faut revenir à l'horizontale entre chaque déplacement).
	* LED-AccelSmooth : idem que LED-Accel, mais la balle continue de se déplacer tant qu'on maintient l'inclinaison.
* NeoPixelRainbow : teste les LED d'un cercle de 12 NeoPixels et affiche un arc-en-ciel ondoyant.
* NumeroUnique : utilise les communications radio pour donner un numéro unique à chaque carte. Les cartes affichent leur numéro ainsi que, en moins intense, le plus grand numéro affecté à une carte.
* SliderServo : positionne un servomoteur (patte 1) en fonction de la position d'un potentiomètre linéaire (patte 2). 
* Joue un son dont la hauteur varie selon la distance mesurée par un capteur à ultra-sons connecté aux pattes 1 et 2.
