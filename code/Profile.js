
class Profile {
  constructor(data) {
      this.local_RestStubs = []
      this.local_RestChains = []
      this.local_identifiers = []
  }

  /*
    Returns a deep copy of a list of all RestStubs in this profile.
  */
  getRestStubs (identifier){
  	   return local_RestStubs.slice();
  }

  /*
    Returns a deep copy of a list of all RestChains in this profile.
  */
  getRestChains (identifier){
       return local_RestChains.slice(); 	
  }

  /*
    Adds a RestStub to this Profile.
  */
  addRestStub (identifier){
      local_RestStubs.push(identifier);
  } 

  /*
    Adds a RestChain to this Profile.
  */
  addRestChain  (identifier){
      local_RestChains.push(identifier);
  } 

  /*
    Removes a RestStub from this Profile.
  */
  removeRestStub (identifier){
    if (identifier in this.local_RestStubs)
      this.local_RestStubs.splice(this.local_RestStubs.indexOf(identifier), 1);
    if (identifier in this.local_identifiers)
      this.local_identifiers.splice(this.local_identifiers.indexOf(identifier), 1);
    
  } 

  /*
    Removes a RestChain from this Profile.
  */
  removeRestChain  (identifier){
    if (identifier in this.local_RestStubs)
      this.local_RestChains.splice(this.local_RestChains.indexOf(identifier), 1);
    if (identifier in this.local_identifiers)
      this.local_identifiers.splice(this.local_identifiers.indexOf(identifier), 1);
    
  } 

}