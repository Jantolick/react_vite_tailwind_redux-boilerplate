let heartMembers = [];

export const gameStart = () => {    

    let lastTime = new Date();

    if (!document.gameHeart) {
        console.log('Heart setting up.');        
        document.gameHeart = setInterval(() => {
            let elapsedTime = new Date() - lastTime;            
            lastTime = new Date();
            heartMembers.forEach(x => {                
                x.update(elapsedTime);
            });
        }, 10);
    }
}

//The game engine itself.
class Heart {
    
    constructor (reference)
    {
        this.id = reference.id;
        this.name = reference.name;
        this.timeToComplete = reference.timeToComplete;
        this.updateUIfunction = reference.updateUIfunction;
        this.currentTime = reference.currentTime ? reference.currentTime : 0;        
        
        
    }

    update(elapsedTime) {        
        let eventObject = {
            effects: []
        };        
        this.currentTime += elapsedTime;        
        if (this.currentTime > this.timeToComplete)
        {            
            let startCurrent = this.currentTime;
            this.currentTime = this.currentTime - this.timeToComplete;               
            if (this.currentTime < 0) console.log(`ElapsedTime: ${elapsedTime}, CurrentTime: ${this.currentTime}, TimeToComplete: ${this.timeToComplete}, startCurrent: ${startCurrent}`)
            eventObject.effects.push('flash');
        }
        eventObject.currentProgress = this.currentTime / this.timeToComplete;        

        const event = new CustomEvent(`${this.id}`, {
            detail: eventObject
        });
        document.dispatchEvent(event);

    }
}


export const addComponent = (id, name, timeToComplete) => {

    if (heartMembers.filter(x => x.id == id).length > 0)
    {
        console.log(`Component ${id} already present. Not added.`);
        return;
    }


    heartMembers.push(new Heart({
        timeToComplete,
        name,
        id
    }));
    console.log('Added component.');
    console.log('New heart list is', heartMembers.map(x => x.id));
}

export const removeComponent = (id) => {
    heartMembers = heartMembers.filter(x => x.id != id);
    console.log('Removed component.');
    console.log('New heart list is', heartMembers.map(x => x.id));
}