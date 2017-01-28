# -*- coding: utf-8 -*-
# try something like
from gluon.serializers import json
def index(): 
    redirect(URL("games","overlord"))
    return None
                 
def current():
    d= dict()
    descriptions = ["kek"]*12
    descriptions[0] = "Ice themed map."
    descriptions[1] = "Word themed map."
    descriptions[2] = "Fire themed map."
    descriptions[3] = "Example of spinner."
    descriptions[4] = "Carrot card."
    descriptions[5] = "Gear card."
    descriptions[6] = "Boost card."
    descriptions[7] = "Trap card."
    descriptions[8] = "Battle card."
    descriptions[9] = "Gear card."
    descriptions[10] = "Gear card."
    descriptions[11] = "Event card."
    getImages(d, 'current',12)
    d['descriptions'] = json(descriptions)
    d['dev'] = "September 2016 - Current"
    d['gameFeatures'] = ["LAN Multi Player", "Cross platform play"]
    d['gameRunsOn']= ["Python", "Android"]
    d['gameCredits']= ["Art drawn by me.",]
    d['gameTitle'] = "Unnamed"
    d['gameGenres'] = ["RPG", "Board-Game","Family"]
    d['gameDescription'] = "An extension of my Overlord game, with much of the code rewritten for optimization, and support for Python 3. This one features my own art, gameplay updates and a visual novel system for delivering story. "
    d['gameDescription'] += "It is still in development, and is set for release summer 2017."
    return d

def rainbow():
    d= dict()
    d['message'] = 'kek'
    descriptions = ["kek"]*9
    descriptions[0] = "Opening cutscene."
    descriptions[1] = "Opening cutscene."
    descriptions[2] = "Save selection."
    descriptions[3] = "Race screen."
    descriptions[4] = "Race Results."
    descriptions[5] = "Race Selection/ Main menu."
    descriptions[6] = "Loading screen with tips. Hats were never actually implemented."
    descriptions[7] = "Losing a race."
    descriptions[8] = "Race Screen."
    getImages(d, 'rainbow', 9)
    d['descriptions'] = json(descriptions)
    d['dev'] = "Grade 11 Project (Spring 2014)"
    d['gameFeatures'] = ["Single Player"]
    d['gameRunsOn']= ["Python"]
    d['gameCredits']= ["Sprites from DesktopPonies.","Music from youtube."]
    d['gameTitle'] = "Rainbow Race"
    d['gameGenres'] = ["Action", "Racing"]
    d['gameDescription'] = "A MLP themed racing game I made in Grade 11 for a graded game contest. I am pretty proud of how this one turned out because it was the first program I ever made. "
    d['gameDescription'] += "The code is a nightmare, of course; at the time I had no idea what a class was, so there is a ton of repitition and clutter."
    return d
def overlord():
    d= dict()
    descriptions = ["kek"]*11
    descriptions[0] = "Battle Screen. The phone screen is not actually shown on the main screen."
    descriptions[1] = "Main menu."
    descriptions[2] = "Card Viewer that shows all cards."
    descriptions[3] = "Example of a trap card."
    descriptions[4] = "Lobby where players canjoin the server. Also offers different map and game options."
    descriptions[5] = "Desco standing over a dead player. Game supports any number of players."
    descriptions[6] = "Character selection screen prior to game starting. Also shows the player that character's special card."
    descriptions[7] = "Card draft, cards get added to a pool of cards that will be randomly given to players during gameplay."
    descriptions[8] = "Player's options during gameplay. The phone screen is great for hiding cards from others."
    descriptions[9] = "2 real players fighting."
    descriptions[10] = "Battle Screen."
    getImages(d, 'overlord',11)
    d['descriptions'] = json(descriptions)
    d['dev'] = "Spring 2015"
    d['gameFeatures'] = ["LAN Multi Player"]
    d['gameRunsOn']= ["Python", "Android"]
    d['gameCredits']= ["Sprites from Disgaea.","Tumblr Backgrounds.","Card art are anime screenshots.", "All other art by me."]
    d['gameTitle'] = "Overlord"
    d['gameGenres'] = ["RPG", "Board-Game","Family"]
    d['gameDescription'] = "A Disgaea themed board game. Win through friendship-breaking combat. This game was created because I liked a steam game (100% Orange Juice), but it was limited to 4 players. I ended up making a very similar game capable of many more concurrent players to play with friends. "
    d['gameDescription'] += "This was fun to make, as the mechanics are light-hearted. It runs very well, has AI, and a variety of new/altered mechanics compared to Orange Juice."
    return d
def vanquest():
    d= dict()
    descriptions = ["kek"]*9
    descriptions[0] = "3 Players dying to bandits."
    descriptions[1] = "Great story."
    descriptions[2] = "Scoreboard showing players. This game supports up to 16 players, but settings must be tweaked for stability."
    descriptions[3] = "Boss battle."
    descriptions[4] = "Great story."
    descriptions[5] = "Driving up a building, while avoiding spiders"
    descriptions[6] = "Space kittens."
    descriptions[7] = "Re-entering the atmosphere with a katana in hand."
    descriptions[8] = "Lobby before game begins."
    getImages(d, 'vanquest',9)
    d['descriptions'] = json(descriptions)
    d['dev'] = "1.5 Weeks - Fall 2014"
    d['gameFeatures'] = ["LAN Multi Player"]
    d['gameRunsOn']= ["Python"]
    d['gameCredits']= ["Art by me"]
    d['gameTitle'] = "VanQuest"
    d['gameGenres'] = ["Action", "Shooting"]
    d['gameDescription'] = "A game made in a very short time span. It's inspired by Super Amazing Wagon Adventure, and was created to play at school in the computer lab before the christmas break. "
    d['gameDescription'] += "The objective is to make a delivery, but the world wants to get rid of you and your friends. "
    d['gameDescription'] += "The multiplayer is very smooth, but tweaks to the script must be made with large volumes of players(>4). "
    d['gameDescription'] += "The graphics are basic. It was fun to use my imagination to cheaply represent enemies."
    return d

def accelskies():
    d= dict()
    descriptions = ["kek"]*11
    descriptions[0] = "Playing the game as Desco."
    descriptions[1] = "Main menu."
    descriptions[2] = "Character Selection, with bios."
    descriptions[3] = "Playing the game as Gig."
    descriptions[4] = "End of game screen. Gives a summary of the character's run."
    descriptions[5] = "Tooltips show you what a skill does during gameplay (or while paused.)"
    descriptions[6] = "Playing special mode as Succubus, it's much harder than normal."
    descriptions[7] = "Pause menu shows what items you have picked up, and what they do."
    descriptions[8] = "A message, based on how well you did before death."
    descriptions[9] = "Depending how the player did, they can unlock achievements."
    descriptions[10] = "Achievements unlock items that can be used during gameplay."
    getImages(d, 'accelskies',11)
    d['descriptions'] = json(descriptions)
    d['dev'] = "2 Months - Fall 2015"
    d['gameFeatures'] = ["Single Player", "Achievements"]
    d['gameRunsOn']= ["Python"]
    d['gameCredits']= ["Sprites from Disgaea and GBA titles.", "Everything else by me."]
    d['gameTitle'] = "Accel Skies"
    d['gameGenres'] = ["Action", "Rogue-lite"]
    d['gameDescription'] = "Another Disgaea themed game. You have to survive in a map with random objectives, and are given random items to help you complete the objectives. "
    d['gameDescription'] += "Created for the 2015 EPIC Game Challenge of McMaster University, it came out very well. I am proud of the game's efficient use of polymorphism. "
    d['gameDescription'] += "Different characters play very differently, and even enemies are very varied in attack patterns. "
    d['gameDescription'] += "The item and achievement system is inspired by the systems in another game, Risk of Rain. "
    d['gameDescription'] += "Players will unlock items by completing performance bases achievements. "
    d['gameDescription'] += "The items themselves can wildly alter playstyles, adding flavour to the gameplay. "
    return d

def magichotel():
    d= dict()
    descriptions = ["kek"]*8
    descriptions[0] = "Enemy fainting during battle."
    descriptions[1] = "Status screen that shows moves and ability."
    descriptions[2] = "Incomplete hotel management system. Basically try to stay out of the red by keeping tenants happy."
    descriptions[3] = "Selecting a target during a double battle."
    descriptions[4] = "Scope attack animation during battle."
    descriptions[5] = "Battle."
    descriptions[6] = "Picking a move during battle."
    descriptions[7] = "Another status screen."
    getImages(d, 'magichotel',8)
    d['descriptions'] = json(descriptions)
    d['dev'] = "Fall 2014"
    d['gameFeatures'] = ["Single Player"]
    d['gameRunsOn']= ["Python", "Android"]
    d['gameCredits']= ["All sprites by me."]
    d['gameTitle'] = "Magic Hotel"
    d['gameGenres'] = ["RPG", "Management"]
    d['gameDescription'] = "A game I made to experiment with polymorphism. It is inspired by pokemon, so you basically battle monsters while managing a hotel. "
    d['gameDescription'] += "There are a variety of battle moves, abilities and mechanics that make battles challenging. "
    d['gameDescription'] += "I am not happy with the graphics, but I am happy with the stack system that controls the flow of battle. "
    d['gameDescription'] += "This one is unfinished because it was purely experimentation with classes, to the point where many sprites were taken from another one of my unfinished games. "
    return d

def getImages(d, game, imageNum):
    d['slideshowimages'] = []
    d['slideshowcommands'] = []
    for i in range(imageNum):
        d['slideshowimages'].append('images/games/%s/screen%i.png'%(game, i+1))
        d['slideshowcommands'].append('setimg(%i)'%(i))
