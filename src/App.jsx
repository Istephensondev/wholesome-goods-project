import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imageone from './images/logos1.png'; 
import imagetwo from './images/rectangle1.png'; 
import imagethree from './assets/images/imagethree.png'; 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      </div>
      <img src={imageone} alt="imgone" />
      <h1>Your Guide to the Best Dog Probiotics in 2024: What to Buy</h1>
      <p>Is your dog experiencing discomfort due to irritated bowels or other gut health issues?</p>
      <img src={imagetwo} alt="imgtwo" />
      <div>
      <p>We understand the challenges of dealing with such problems, and fortunately, there's a simple solution to help them feel better: probiotics and digestive chews designed specifically for dogs!</p>
      
     <p> By incorporating these supplements into your dog's daily routine for a few weeks, you can expect to see various positive effects, including improved bowel regularity. Additionally, a healthier coat, enhanced cognitive function, and a fortified immune system are just a few of the advantages linked to maintaining a well-functioning digestive system.</p>
     <p>Certain ingredients are essential in digestive supplements, with probiotics being a prime example. These live microorganisms naturally inhabit your pup's gut and play a vital role in maintaining its proper function. In fact, the gut plays a significant role in your dog's immune and digestive health.[1,2,3,4] Thus, maintaining a healthy gut microbiome is vital for the optimal functioning of both their digestive and immune systems.</p>
      <p>Many probiotics and digestive chews on the market come with hefty price tags and questionable additives. Selecting the right probiotic for your dog hinges on three crucial factors: the use of safe ingredients, effectiveness, and value for your money.</p>
      <p>It can be difficult to find what the best probiotic for your dog is, that's why Smarter Reviews has compiled a list from months of research about the best probiotics for dogs to keep your pup healthy and happy. But first, let’s go over the essential features and ingredients to look for and what to avoid when searching for digestive supplements, and how a daily supplement could improve your dog’s overall health.</p>
      </div>
      <div>
      <img src={imagethree} alt="imgthree" />
      <h1>Benefits Of Probiotics For Dogs</h1>
      <p>Boosting the immune system, preventing digestive troubles, and offering added support during stress, dietary changes, or digestive imbalances are just a few of the advantages probiotics provide for dogs.</p>
     
      </div>

    </>
  )
}

export default App
