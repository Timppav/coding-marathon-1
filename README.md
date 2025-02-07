# Self-Assessment

### Tino

First I used separate state variables for each input field like this:
```javascript
const [name, setName] = useState("");
const [ingredients, setIngredients] = useState("");
const [instructions, setInstructions] = useState("");

function handleNameChange(event) {
  setName(event.target.value);
}

function handleIngredientsChange(event) {
  setIngredients(event.target.value);
}

function handleInstructionsChange(event) {
  setInstructions(event.target.value);
}
```

This worked just fine, but I realized using objects to manage state was a cleaner way to do this.

```javascript
const [newRecipe, setNewRecipe] = useState({ name: "", ingredients: "", instructions: "" });

function handleInputChange(event) {
  const { name, value } = event.target;
  setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
}
```
