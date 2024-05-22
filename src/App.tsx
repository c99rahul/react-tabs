import TabItem from "@/components/Tabs/TabItem";
import TabList from "@/components/Tabs/TabList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Here's a recipe for a classic Avocado Toast, which also showcases a Tab
        Component built with React, TypeScript, and CSS. This handy component
        lets you easily navigate through different steps and variations of the
        recipe.
      </p>

      <p>
        <a href="https://github.com/c99rahul/react-tabs/">
          Check out the source here
        </a>
        , and give it a star if you like it. I hope you enjoy the recipe and
        find the component useful for your own projects.
      </p>
      <TabList activeTabIndex={4}>
        <TabItem label="Ingredients">
          <ul>
            <li>1 ripe avocado</li>
            <li>2 slices of whole grain bread</li>
            <li>1 tablespoon lemon juice</li>
            <li>Salt and pepper to taste</li>
            <li>
              Optional toppings: cherry tomatoes, red pepper flakes, feta
              cheese, poached egg, microgreens
            </li>
          </ul>
        </TabItem>
        <TabItem label="Preparation Time">
          <p>
            <strong>Total time</strong>: 10 min; 5 min each for pre and cooking
          </p>
        </TabItem>
        <TabItem label="Instructions">
          <ol>
            <li>
              <strong>Prepare the Avocado:</strong>
              <ul>
                <li>
                  Cut the avocado in half, remove the pit, and scoop the flesh
                  into a bowl.
                </li>
                <li>Add the lemon juice, salt, and pepper.</li>
                <li>
                  Mash the avocado with a fork until you achieve your desired
                  consistency (smooth or chunky).
                </li>
              </ul>
            </li>
            <li>
              <strong>Toast the Bread:</strong>
              <ul>
                <li>
                  While preparing the avocado, toast the slices of whole grain
                  bread to your preference (lightly toasted or crispy).
                </li>
              </ul>
            </li>
            <li>
              <strong>Assemble the Toast:</strong>
              <ul>
                <li>
                  Spread the mashed avocado evenly onto the toasted bread
                  slices.
                </li>
              </ul>
            </li>
            <li>
              <strong>Add Optional Toppings:</strong>
              <ul>
                <li>
                  If desired, add toppings such as halved cherry tomatoes, a
                  sprinkle of red pepper flakes, crumbled feta cheese, a poached
                  egg, or fresh microgreens.
                </li>
              </ul>
            </li>
            <li>
              <strong>Serve:</strong>
              <ul>
                <li>
                  Serve immediately and enjoy your delicious avocado toast!
                </li>
              </ul>
            </li>
          </ol>
        </TabItem>
        <TabItem label="Nutrition">
          <ul>
            <li>
              <strong>Calories:</strong> ~250 kcal
            </li>
            <li>
              <strong>Protein:</strong> 5g
            </li>
            <li>
              <strong>Fat:</strong> 17g
              <ul>
                <li>Saturated Fat: 2.5g</li>
              </ul>
            </li>
            <li>
              <strong>Carbohydrates:</strong> 22g
              <ul>
                <li>Dietary Fiber: 8g</li>
                <li>Sugars: 3g</li>
              </ul>
            </li>
            <li>
              <strong>Sodium:</strong> 150mg
            </li>
          </ul>
        </TabItem>
        <TabItem label="Final Outcome">
          <img src="//source.unsplash.com/7GO11y7bznw/1920x1080" />
        </TabItem>
      </TabList>
    </div>
  );
}

export default App;
