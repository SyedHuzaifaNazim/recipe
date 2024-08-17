import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="container">
      <header className='recipe-header'>
      <div className="recipe-image">
      <img src="pizza.jpg" alt="Oat Flour Pizza"/>
    </div>
        <h1 className='recipe-title'>Home Made Oat Flour Pizza</h1>
        <p className='recipe-description'>
          I've wanted to share this oat flour pizza recipe with you guys
          for ages! Pizza hungry but don't feel like going for a pizza
          - some pizza time! I finally made you guys my husband's go-to
          pizza and you'll definitely appreciate the whole grain
          benefits and how light you'll feel after. Enjoy a pizza
          half the time, one you can prepare in minutes and a way to
          enjoy pizza in a much healthier way!
        </p>
        <table>
          <tbody>
            <tr>
              <td className='recipe-details-title'>Servings</td>
              <td className='recipe-details-value'>1</td>
            </tr>
            <tr>
              <td>Calories</td>
              <td>143</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>11g</td>
            </tr>
            <tr>
              <td>Carbohydrates</td>
              <td>19g</td>
            </tr>
            <tr>
              <td>Sugar</td>
              <td>1g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>10g</td>
            </tr>
            <tr>
              <td>Prep Time</td>
              <td>15 minutes</td>
            </tr>
            <tr>
              <td>Cook Time</td>
              <td>20 minutes</td>
            </tr>
          </tbody>
        </table>
      </header>
      <main>
        <section className="method">
          <h2>Method</h2>
          <p>
            The measured oat and ingredients recipe is 15-20 minutes.
            Prepare still will take a few minutes as well.
          </p>
          <p>
            Pre-heat oven to 200 degrees C.  Lay a piece of baking paper on
            a baking tray, or a pizza stone.  They could strengthen the dough
            and help with coverage in baking.
          </p>
          <p>
            In a medium bowl, combine the dry ingredients first then add the wet
            ingredients and mix until a dough forms.  Add the dry
            ingredients to half a cup at a time, adding the oat dough
            dough bit by bit.  If you don't have a baking dish
            for 10 inches of diameter, use a few baking sheets
            and use two.  Bake for 15-20 minutes, and top off with
            your desired toppings.  I opted for a homemade tomato sauce,
            and mozzarella cheese, with vegetable, but you can
            customize your pizza to your desire, and enjoy!
          </p>
        </section>
        <section className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li>
              1 cup
              <span>Unsweetened almond milk or low fat milk of choice</span>
            </li>
            <li>
              1/2 cup
              <span>Plain flour (I prefer organic)</span>
            </li>
            <li>
              1 1/4 cup
              <span>
                Unbleached oat flour, or gluten-free flour blend (check package for
                measurement)
              </span>
            </li>
            <li>
              1 1/4 tsp
              <span>Baking powder</span>
            </li>
            <li>
              1/4 tsp
              <span>Salt, or to taste</span>
            </li>
            <li>
              1 tsp
              <span>Dried oregano</span>
            </li>
            <li>
              1/2 tsp
              <span>Italian Seasoning</span>
            </li>
            <li>1 cup
              <span>Pizza powder for additional acid</span>
            </li>
          </ul>
        </section>
        <section className="katie-tip">
          <h3>Katie's tip!</h3>
          <p>
            <span>This chicken is a piece</span>
            <span>or a salad for lunch!</span>
          </p>
          <img
            src="https://www.dashingdish.com/wp-content/uploads/2018/03/Katie-s-Tip-Chicken-Salad-300x300.jpg"
            alt="chicken salad"
          />
        </section>
        <section className="you-may-also-like">
          <h3>You may also like</h3>
          <div className="you-may-also-like-grid">
            <img
              src="https://www.dashingdish.com/wp-content/uploads/2023/03/Peanut-Butter-Protein-Smoothie-300x300.jpg"
              alt="peanut butter protein smoothie"
            />
            <img
              src="https://www.dashingdish.com/wp-content/uploads/2022/11/Roasted-Veggies-with-Tahini-Dressing-300x300.jpg"
              alt="roasted veggies with tahini dressing"
            />
            <img
              src="https://www.dashingdish.com/wp-content/uploads/2021/08/Greek-Yogurt-Parfaits-300x300.jpg"
              alt="greek yogurt parfaits"
            />
          </div>
        </section>
        <section className="comments">
          <h3>
            4 People are talking about this recipe Say Something!
          </h3>
          <div className="comment">
            <img
              src="https://www.dashingdish.com/wp-content/uploads/2022/05/avatar-square-blue.png"
              alt="avatar"
            />
            <div className="comment-content">
              <h4>Suy Smith</h4>
              <p>
                Home made great! I love it, but if you don't have a springform
                pan or a pizza pan - just a cookie pan, you can adjust it a
                little bit, definitely. I would make it for my extended family
                for sure!
              </p>
            </div>
          </div>
          <div className="comment">
            <img
              src="https://www.dashingdish.com/wp-content/uploads/2022/05/avatar-square-yellow.png"
              alt="avatar"
            />
            <div className="comment-content">
              <h4>Jessica Johnson</h4>
              <p>
                Looks so good. I think I'll make this for a potluck!
              </p>
            </div>
          </div>
          <div className="comment">
            <img
              src="https://www.dashingdish.com/wp-content/uploads/2022/05/avatar-square-green.png"
              alt="avatar"
            />
            <div className="comment-content">
              <h4>Tisa Thomas</h4>
              <p>
                It's plus or minus, I don't have a scale, will keep it a
                couple of tablespoons, or less, just so it won't burn.
                Thank you for the recipe!
              </p>
            </div>
          </div>
          <div className="comment">
            <img
              src="https://www.dashingdish.com/wp-content/uploads/2022/05/avatar-square-orange.png"
              alt="avatar"
            />
            <div className="comment-content">
              <h4>Loch Lawson</h4>
              <p>
                Looks so good. I think I'll make this for the 4th of July
                celebration! This is the one!
              </p>
            </div>
          </div>
          <h3>Say Something!</h3>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" name="comment" />
            <button type="submit">Post Comment</button>
          </form>
        </section>
      </main>
      <footer>
        <div className="connect-with-me">
          <h3>Connect with me</h3>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="shop">
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="#">Meal Plan</a>
            </li>
            <li>
              <a href="#">Nutritionizing</a>
            </li>
            <li>
              <a href="#">Pre-Workout</a>
            </li>
            <li>
              <a href="#">Recipe Packs</a>
            </li>
          </ul>
        </div>
        <p>
          © 2019-2024 Dashing Dish, Inc. I work hard to create, envision and suggest
          recipes that are both healthy and delicious. Please don't steal
          them as they are my original recipes.
        </p>
      </footer>
    </div>
    </>
  )
}

export default App
