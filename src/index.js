class Sorter {
  constructor() {
    this.data = [];
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
    
    tmp.sort(function(a, b) {
      return a - b
    });  
   
    for(var k = 0; k < indices.length; k++) {
      this.data[indices[k]] = tmp[k];
    }
  
    return this.data;
  }

  setComparator(compareFunction) {

  }
}

module.exports = Sorter;