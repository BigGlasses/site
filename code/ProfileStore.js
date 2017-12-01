// import * as Constants from 'Constants.js';
// import * as {RestStub} from 'RestStub.js';
// import * as {RestChain} from 'RestChain.js';
// import * as {Profile} from 'Profile.js';


class ProfileStore {
   constructor() {
	this.allRestStubs = [];
	this.allRestChains = [];
	this.allIdentifiers = [];
	this.allProfiles = [];

   }


	getRestStubFromID(identifier){
		return arraySearch(this.allRestStubs, identifier);
	}

	getRestChainFromID(identifier){
		return arraySearch(this.allRestChains, identifier);
	}

	/*
	Creates a new RestStub and stores it in memory.
	Returns the RestStub's identifier.
	*/
	newRestStub(){
		var newRst = new RestStub(null);
		var newIdentifier = this.generateIdentifier();
		newRst.identifier = newIdentifier;
		newRst.label += " " + this.allRestStubs.length;
		this.allRestStubs.push(newRst);
		return newIdentifier;
	}

	/*
	Creates a new RestChain and stores it in memory.
	Returns the RestChain's identifier.
	*/
	newRestChain(){
		var newRst = new RestChain(null);
		var newIdentifier = this.generateIdentifier();
		newRst.identifier = newIdentifier;
		this.allRestChains.push(newRst);
		return newIdentifier;
	}

	/*
	Deep copies a RestStub and stores it in memory.
	Returns the RestStub's identifier.
	*/
	copyRestStub(identifier){
		var rst = this.getRestStubFromID(identifier);
		var rstJson = rst.toJson();

		var newRst = new RestStub(rstJson);
		var newIdentifier = this.generateIdentifier();
		newRst.identifier = newIdentifier;
		newRst.label += " - Copy"
		this.allRestStubs.push(newRst);
		return newIdentifier;
	}

	/*
	Deep copies a RestChain and stores it in memory.
	Returns the RestChain's identifier.
	*/
	copyRestChain(identifier){
		var rst = this.getRestChainFromID(identifier);
		var newIdentifier = this.generateIdentifier();
		var newRst = new RestChain(rst);
		newRst.identifier = newIdentifier;
		this.allRestChains.push(newRst);
		return newIdentifier;
	}

	/*
	Generate a unique identifier.
	*/
	generateIdentifier(){
		var newIdentifier = "";
		do {
			newIdentifier = this.randomHash();
		} while (this.allIdentifiers.indexOf(newIdentifier) > -1);
		this.allIdentifiers.push(newIdentifier);
		return newIdentifier;
	}

	/*
	Generate a random string of characters.
	*/
	randomHash(){
		var s = "";
		for (var i = 0; i < ID_LENGTH; i ++){
			var j = Math.floor(Math.random()*ID_CHARACTERPOOL.length);
			s += ID_CHARACTERPOOL.charAt(j);
		}
		return s;
	}

	/*
	Creates a new profile and stores it in memory.
	Return the new profile.
	*/
	newProfile(){
		p = Profile();
		this.allProfiles.push(p);
		return p;
	}

	/**
	Deletes a RestStub.
	*/
	deleteRestStub(identifier){
			console.log("lol")
			// Remove the stub.
			for (var i = 0; i < this.allRestStubs.length; i ++){
				if(identifier == this.allRestStubs[i].identifier){
					this.allRestStubs.splice(i, 1);
				}
			}

			// Remove the stub from all profiles.
			for (var i = 0; i < this.allProfiles.length; i ++){
				this.allProfiles[i].removeRestStub(identifier);
			}

			// Remove the stub from all testchains.
			for (var i = 0; i < this.allRestChains.length; i ++){
				this.allRestChains[i].removeTest(identifier);

			}
	}

	/**
	Deletes a RestChain.
	*/
	deleteRestChain(identifier){

			// Remove the stub from all testchains.
			for (var i = 0; i < this.allRestChains.length; i ++){
				if(identifier = this.allRestChains[i].identifier){
					this.allRestChains.splice(i, 1);
				}
			}
			// Remove the chain from all profiles.
			for (var i = 0; i < this.allProfiles.length; i ++){
				this.allProfiles[i].removeRestChain(identifier);
			}

	}

}
/*
Inserts an element into an array.
*/
function arrayInsert(l, obj){
	l.push(obj);
}

/*
Searches for an element in an array.
*/
function arraySearch(l, identifier){
	for (i = 0; i < l.length; i ++)
		if (l[i].identifier == identifier)
			return l[i];		
	
	console.log("No object with identifier " + identifier);
	return null
}