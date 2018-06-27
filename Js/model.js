const operations={
    first:0,
    second:0,
    set( first, second){
        this.first=first;
        this.second=second;
    },
    add(){
        return this.first+this.second;
    },
    subtract(){
        return this.first-this.second;
    },
    multiply(){
        return this.first*this.second;
    },
    divide(){
        return this.first/this.second;
    }
};