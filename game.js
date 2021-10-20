function getSadInterval() {
    return Date.now()+500
}
function getGoneInterval() {
    return Date.now()+ Math.floor(Math.random()*20000)+2000
}


const getInterval = () =>
  Date.now() + 2000 + Math.floor(Math.random() * 20000);

function getHungryInterval() {
    return Date.now()+2000
}
  
const getKingStatus = () => Math.random() > 0.9;

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

  switch(mole.status) {
          case "sad":
          case "fed":
            mole.next = getSadInterval();
            if (mole.king) {
              mole.node.children[0].src = "./king-mole-leaving.png";
            } else {
              mole.node.children[0].src = "./mole-leaving.png";
            }
            mole.status = "leaving";
            break;
          case "leaving":
            mole.next = getInterval();
            mole.king = false;
            mole.node.children[0].classList.toggle("gone", true);
            mole.status = "gone";
            break;
          case "hungry":
            mole.node.children[0].classList.toggle("hungry", false);
            if (mole.king) {
              mole.node.children[0].src = "./king-mole-sad.png";
            } else {
              mole.node.children[0].src = "./mole-sad.png";
            }
            mole.status = "sad";
            mole.next = getSadInterval();
            break;
          case "gone":
            mole.status = "hungry";
            mole.king = getKingStatus();
            mole.next = getHungryInterval();
            mole.node.children[0].classList.toggle("hungry", true);
            mole.node.children[0].classList.toggle("gone", false);
            if (mole.king) {
              mole.node.children[0].src = "./king-mole-hungry.png";
            } else {
              mole.node.children[0].src = "./mole-hungry.png";
            }
            break;
        }
};

let score = 0

function feed (event) {
    if(event.target.tagName!== 'IMG' || !event.target.classList.contains("hungry")) {
return;
    }

const mole = moles[parseInt(event.target.dataset.index)]

   mole.status= "fed";
   mole.next=getSadInterval();
   mole.node.children[0].src="./mole-fed.png";
   mole.node.children[0].classList.remove('hungry')
score++

if(score>=10) {
win();
return;
}
wormContainer.style.width = `${score}%`;

}

const win = () => {
    document.querySelector(".bg").classList.add("hide");
    document.querySelector(".win").classList.remove("hide");
  };

let runAgainAt = Date.now()+100;
// let temp = getSadInterval()
// let dateNow = Date.now()


const nextFrame = () => {

    const now = Date.now();
 
    for (let i = 0; i < moles.length; i++) {
  
      if (moles[i].next <= now) {
        
        getNextStatus(moles[i]);
       
      }
      runAgainAt = now+100;
      
    }
    requestAnimationFrame(nextFrame);
  };
  

  document.querySelector('.bg').addEventListener('click',feed); 

  nextFrame();