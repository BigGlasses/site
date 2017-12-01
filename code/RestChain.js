// import * as Constants from 'Constants.js';

/*
  Class for running tests in order.
*/
class RestChain {
  /*
	Creates a RestChain.
	If data is not null, the class will load data from it.
  */
  constructor(data) {
  	this.label = "RestChain";
  	this.reststublist = [];
  	this.identifier = "";
  	if (data != null){
  		this.identifier = data.identifier;
  		this.reststublist = data.reststublist;
  		this.label = data.label;
  	}
  }

  /*
	Adds a test identifier to the TestChain at the end.
  */
  addTest(identifier){
  	this.reststublist.push(identifier);
  }

  /*
	Removes a test identifier from the TestChain.
  */
  removeTest(identifier){
  	if (this.reststublist.indexOf(identifier) > -1)
  			this.reststublist.splice(this.reststublist.indexOf(identifier), 1);
  }

  /*

  */
  moveTest(identifier, location){
    	if (this.reststublist.indexOf(identifier) > -1){
  	  	this.removeTest(identifier);
        if (location < 0) location = 0;
        if (location > this.reststublist.length) location = this.reststublist.length;
  	  	this.reststublist.splice(location, 0, identifier);
  	}
  }

  /*

  */
  toJson(){
  var data = {};
	data.label = this.label;
	data.reststublist = this.reststublist;
	data.identifier = this.identifier;
	return data;
  }
}