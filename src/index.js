class Sorter {
  constructor() {
    this.data = [];
    this.compareFunction;
  }

  add(element) {
    this.data.push(element);
  }

  at(index) {
    return this.data[index];
  }

  get length() {
    return this.data.length;
  }

  toArray() {
    return this.data;
  }

  sort(indices) {
    indices.sort();
    var tmp = [];
		
    for(let i = 0; i < indices.length; i++) {
      tmp.push(this.data[indices[i]]);
    }
    
    if(!this.compareFunction) {
      tmp.sort(function(a, b) {
        return a - b
      });  
    } else {
      tmp.sort(this.compareFunction);
    } 
   
    for(var k = 0; k < indices.length; k++) {
      this.data[indices[k]] = tmp[k];
    }
  
    return this.data;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;