# -*- coding: utf-8 -*-
# try something like
from gluon.serializers import json
def index():
    redirect(URL("apps","comparelol"))
    return dict()
def lolcompare():
    d= dict()
    d['message'] = 'kek'
    descriptions = ["kek"]*3
    descriptions[0] = "Ahri stat comparison."
    descriptions[1] = "Ashe stat comparison."
    descriptions[2] = "Sejuani stat comparison."
    getImages(d, 'lolcompare', 3)
    d['descriptions'] = json(descriptions)
    d['dev'] = "2 Months - Grade 11 Project (Spring 2014)"
    d['appFeatures'] = ["Stat Comparison"]
    d['appRunsOn']= ["Java","Android"]
    d['appCredits']= ["Images in the app belong to Riot Games. (Pulled by API)"]
    d['appTitle'] = "LoLCompareStats"
    d['appDescription'] = "A simple application that makes API calls based on inputed usernames. It draws stats from the server, and ranks players against each other."
    return d
def getImages(d, app, imageNum):
    d['slideshowimages'] = []
    d['slideshowcommands'] = []
    for i in range(imageNum):
        d['slideshowimages'].append('images/apps/%s/screen%i.png'%(app, i+1))
        d['slideshowcommands'].append('setimg(%i)'%(i))
