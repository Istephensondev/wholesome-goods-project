import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import imageone from "./assets/images/logos1.png";
import imagetwo from "./assets/images/rectangle1.png";
import imagethree from "./assets/images/imagethree.png";
import digestiveIcon from "./assets/images/digestive.png"
import blockageIcon from "./assets/images/blockages.png"
import immuneIcon from "./assets/images/immunesystem.png"
import wellbeingIcon from "./assets/images/wellbeing.png"
import checkmark from "./assets/images/checkmark.png"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="frame-wrapper">
          <div className="frame">
            <div className="div">
              <div className="frame-2">
                <h1 className="your-guide-to-the text-wrapper">
                  Your Guide To The Best Dog Probiotics In 2024: What To Buy
                </h1>
                <p className="subheader">
                  Is your dog experiencing discomfort due to irritated bowels or
                  other gut health issues?
                </p>
                <img src={imagetwo} alt="imgtwo" />
                <div>
                  <p className="text-wrapper">
                    We understand the challenges of dealing with such problems,
                    and fortunately, there's a simple solution to help them feel
                    better: probiotics and digestive chews designed specifically
                    for dogs!
                  </p>

                  <p className="text-wrapper">
                    {" "}
                    By incorporating these supplements into your dog's daily
                    routine for a few weeks, you can expect to see various
                    positive effects, including improved bowel regularity.
                    Additionally, a healthier coat, enhanced cognitive function,
                    and a fortified immune system are just a few of the
                    advantages linked to maintaining a well-functioning
                    digestive system.
                  </p>
                  <p className="text-wrapper">
                    Certain ingredients are essential in digestive supplements,
                    with probiotics being a prime example. These live
                    microorganisms naturally inhabit your pup's gut and play a
                    vital role in maintaining its proper function. In fact, the
                    gut plays a significant role in your dog's immune and
                    digestive health.[1,2,3,4] Thus, maintaining a healthy gut
                    microbiome is vital for the optimal functioning of both
                    their digestive and immune systems.
                  </p>
                  <p className="text-wrapper">
                    Many probiotics and digestive chews on the market come with
                    hefty price tags and questionable additives. Selecting the
                    right probiotic for your dog hinges on three crucial
                    factors: the use of safe ingredients, effectiveness, and
                    value for your money.
                  </p>
                  <p className="text-wrapper">
                    It can be difficult to find what the best probiotic for your
                    dog is, that's why Smarter Reviews has compiled a list from
                    months of research about the best probiotics for dogs to
                    keep your pup healthy and happy. But first, let’s go over
                    the essential features and ingredients to look for and what
                    to avoid when searching for digestive supplements, and how a
                    daily supplement could improve your dog’s overall health.
                  </p>
                  <img src={imagethree} alt="imgthree" />
                  <h2 className="text-wrapper">
                    Benefits Of Probiotics For Dogs
                  </h2>
                  <p className="text-wrapper">
                    Boosting the immune system, preventing digestive troubles,
                    and offering added support during stress, dietary changes,
                    or digestive imbalances are just a few of the advantages
                    probiotics provide for dogs.
                  </p>
                  <div className="benefit-container">
                    <div className="benefit-section">
                      <BenefitCategory
                        icon={digestiveIcon}
                        title="Better Digestive System Functionality"
                        benefits={[
                          "Offers essential nutrition for good gut bacteria",
                          "Aids in nutrient absorption from food",
                        ]}
                      />
                      <BenefitCategory
                        icon={blockageIcon}
                        title="Prevents Blockages"
                        benefits={["Reduces the likihood of constipation", "Normalizes Bowel Movements"]}
                      />
                      <BenefitCategory
                        icon={immuneIcon}
                        title="Reinforces Their Immune System"
                        benefits={["Lowers the chances of allergies in dogs", "Makes it easier for them to fight off infections"]}
                      />
                       <BenefitCategory
                        icon={wellbeingIcon}
                        title="Enhances Overall Well-being"
                        benefits={["A healthy gut keeps your pup feeling calm and less stressed", "Can positively influence a dog's mood and behavior"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const BenefitCategory = ({ icon, title, benefits }) => {
  return (
    <div className="benefit-category">
      <div className="benefit-header">
        <img src={icon} alt="" className="benefit-icon" />
        <h2 className="benefit-title">{title}</h2>
      </div>
      <div className="benefit-list">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <img src={checkmark} alt="Checkmark" className="checkmark-icon" />
            <p>{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
