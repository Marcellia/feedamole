function getSadInterval() {
    return Date.now()+500
}
function getGoneInterval() {
    return Date.now()+ Math.floor(Math.random()*20000)+2000
}

function getHungryInterval() {
    return Date.now()+2000
}
  
console.log(document.getElementById("hole-0"), "getbyelement")

const moles = [
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node:document.getElementById("hole-0")
    },
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node: document.getElementById("hole-1")
    },
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node: document.getElementById("hole-2")
    },
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node: document.getElementById("hole-3")
    },
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node: document.getElementById("hole-4")
    },
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node: document.getElementById("hole-5")
    },
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node: document.getElementById("hole-6")
    },
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node: document.getElementById("hole-7")
    },
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node: document.getElementById("hole-8")
    },
    {
        status: 'sad',
        next:getSadInterval(),
        king: false,
        node: document.getElementById("hole-9")
    }
  
];

function getNextStatus(mole) {
    console.log(" Am in getNextStatus")
switch(mole.status) {
        case 'sad':
            mole.next = getSadInterval();
            mole.status="leaving"; 
            mole.node.children[0].src = "./mole-leaving.png";
        break;
 
        case "leaving":
            mole.status="gone"; 
            mole.next = getGoneInterval();
            mole.node.children[0].classList.add("gone")
        break;

        case"gone":
            mole.status = 'hungry'
            mole.next= getHungryInterval();
            mole.node.children[0].classList.add("hungry");
            mole.node.children[0].classList.remove("gone");
            mole.node.children[0].src="./mole-hungry.png";
        break;

        case"hungry":
            mole.status='sad'
            mole.node.children[0].classList.remove("hungry");
            mole.next=getSadInterval();
            mole.node.children[0].src ="./mole-sad.png"
        break;
    }
}


let runAgainAt = Date.now()+100;
let temp = getSadInterval()
let dateNow = Date.now()


const nextFrame = () => {

    const now = Date.now();
 
    for (let i = 0; i < moles.length; i++) {
  
      if (moles[i].next <= now) {
        console.log(moles[i],"moles[i]")
        getNextStatus(moles[i]);
      }
      runAgainAt = now+100;
    }
    requestAnimationFrame(nextFrame);
  };
  
  nextFrame();