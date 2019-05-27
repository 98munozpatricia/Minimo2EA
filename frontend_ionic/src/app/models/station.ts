export class Station {
    _id: string;
    name: String;
    state: Boolean;
    description: String;
      

    constructor(_id = '', name = '', state = false ,description = '') {
        this._id = _id;
        this.name=name;
        this.state=state; 
        this.description=description;
        
        
    }
}