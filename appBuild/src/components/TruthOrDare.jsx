
//Component 3 Truths or Dares of the game//
//This component uses useState//
import { useState } from "react";

export default function TruthOrDare(){
    
    const truths = [
        "What is your biggest fear or insecurity?",
        "What's the most embarrassing thing you've done?",
        "Who is your secret crush?",
        "Have you ever ghosted someone?",
        "Have you ever lied to your best friend?"
    ];
    const dares = [
        "Let another player send one text from your phone",
        "Do your best evil laugh for 30 seconds",
        "Post an embarrassing selfie to your story",
        "Dance for 30 seconds with no music",
        "Show the last text message you sent your bestie"
    ];
    const [info, setInfo] = useState("");

//.Random scales the # to size of array//
//.Floor gives a random/# an index between 0 and the last of the array//
//Event Listener//
    const myTruth = () => {
        const randomTruth = truths[Math.floor(Math.random() * truths.length)];
        setInfo(`Truth: ${randomTruth}`);
    };
    const myDare = () => {
       const randomDare = dares[Math.floor(Math.random() * dares.length)];
       setInfo(`Dare: ${randomDare}`);
    };
//Each button when clicked changes the page//
//if Info exists/truthy, then displays the Info wrapped in p tags//
     return (
       <>
         <div className="gameCard4">
           <button onClick={myTruth}>Truth</button>
           <button onClick={myDare}>Dare</button>
           {info && <p>{info}</p>}
         </div>
       </>
     );
}