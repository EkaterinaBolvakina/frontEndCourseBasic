Homework Lesson 18:
Task
Create characters for the game using prototype inheritance and this.

1) Create: 
a) a character object that represents the following properties and actions for all characters:
Traits: Name - (name), Health - (health) and Level- (level) 

b) A method (introduce) for the character that displays information about the character on the console, 
for example: "Hello, my name is [name], I am at level [level], and I have [health].". 
- Ignore the square brackets, they are for the schema to refer to variable values

2) Create
a) a warrior object: warrior, which inherits the properties and methods of character, and add when creating the object:
Name (name), Health (health), Level (level), Weapon properties (weapon)

b) Method attack, which displays a message about the attack and the name of the weapon on the console (the value from weapon is used inside).

3) Create 
a) a wizard object that inherits the character's properties and methods, and add the following when creating the object:
Name (name), health (health), level (level), spell properties (spell)

b) castSpell method that outputs a message to the console about how the character casts the spell (use the value from spell).

The output should consist of the following:
- a call to the introduce method for each of the objects
- Calling the attack method for the warrior object
- Calling the castSpell method for the wizard object


--------------------- DE -----------------------
Aufgabe
Erstelle Charaktere für das Spiel, indem du die Vererbung von Prototypen und this. verwendest

1) Erstelle: 
a) ein Charakterobjekt (character), das die folgenden Eigenschaften und Aktionen für alle Charaktere darstellt:
Eigenschaften: Name - (name), Gesundheit - (health) und Level- (level) 

b) Eine Methode (introduce) für den Charakter, die Informationen über den Charakter auf der Konsole ausgibt, 
zum Beispiel: "Hallo, mein Name ist [name], ich bin auf Stufe [level], und ich habe [health] Gesundheit.". 
- Ignoriere die eckigen Klammern, sie sind für das Schema, um auf Variablenwerte zu verweisen

2) Erstellen Sie
a) ein Krieger-Objekt: (warrior), das die Eigenschaften und Methoden von Charakter erbt, und fügen Sie beim Erstellen des Objekts hinzu:
Name (name), Gesundheit (health), Stufe (level), Waffeneigenschaften (weapon)

b) Methode attack, die eine Meldung über den Angriff und den Namen der Waffe auf der Konsole ausgibt (im Inneren wird der Wert aus weapon verwendet).

3) Erstelle 
a) ein Zauberer-Objekt (wizard), das die Eigenschaften und Methoden des Charakters erbt, und füge beim Erstellen des Objekts hinzu:
Name (name), Gesundheit (health), Stufe (level), Zaubereigenschaften (spell)

b) castSpell-Methode, die eine Nachricht auf der Konsole ausgibt, wie der Charakter den Zauber wirkt (verwende darin den Wert aus spell).

Die Ausgabe sollte aus Folgendem bestehen:
- einem Aufruf der introduce-Methode für jedes der Objekte
- Aufruf der Methode attack für das Objekt warrior
- Aufruf der castSpell-Methode für das Zauberer-Objekt


--------------------- RU -----------------------
Задание
Создать персонажей для игры с помощью прототипного наследования и this

Создайте объект character, представляющий следующие характеристики и действие для всех персонажей:
свойства name (имя), health (здоровье), level (уровень)

метод introduce для character, который выводит в консоль информацию о персонаже, 
например: "Hello, my name is [name], I am at level [level], and I have [health] health." 
- на квадратные скобки не обращайте внимание, они для схемы, чтобы указать на переменные значения

Создайте объект warrior, который будет наследовать свойства и методы от character, также при создании объекта добавьте в него:
свойства name (имя), health (здоровье), level (уровень), weapon (оружие)

метод attack, который выводит сообщение в консоль о нападении и название оружия (внутри использовать значение из weapon)

Создайте объект wizard, наследующий свойства и методы от character, также при создании объекта добавьте в него:
свойства name (имя), health (здоровье), level (уровень), spell (заклинание)

метод castSpell, который выводит сообщение в консоль о том, как персонаж произносит заклинание (внутри использовать значение из spell).

Результат должен состоять из следующих действий:
вызова метода introduce для каждого из объектов
вызова метода attack для объекта warrior
вызова метода castSpell для объекта wizard