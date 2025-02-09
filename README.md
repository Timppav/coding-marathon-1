# Self-Assessment

## Tino

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
const [newRecipe, setNewRecipe] = useState({
  name: "",
  ingredients: "",
  instructions: "",
});

function handleInputChange(event) {
  const { name, value } = event.target;
  setNewRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
}
```
## Phong
I enhance additional function which update Shopping Card after user added items.

```javascript
const handleUpdateItem = (index) => {
  const updatedItem = [...items];
  updatedItem[index] = newItem;
  setItems(updatedItem);
  setNewItem(initialState);
};

<div className="item-buttons">
  <button
    onClick={() => deleteItem(index)}
    className="item-button delete-button"
  >
    Delete
  </button>
  <button
    onClick={() => handleUpdateItem(index)}
    className="item-button update-button"
  >
    Update
  </button>
</div>

```
## Casper

Most problems came from CSS selectors in layout.css overwriting classes.

`.page-content `prefix was added to all classes to avoid this.

Not ideal, but it works.

```css
.page-content .book-info {
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: transparent;
}


```
## Leevi

Wrong casing :

```javascript
return (
    <div className="Contact-collection">
      <h1>Contact List Manager</h1>
```

Here "Contact-collection" was different than the one in css file ("contact-collection") so the css didn't show up on the page.

(fixed version)

```javascript
return (
    <div className="contact-collection">
      <h1>Contact List Manager</h1>
```

Lesson learned: Be more aware of upper/lowercase letters in coding while troubleshooting. 

Successess:

After lessons and by following example codes given in the coding marathon this exercise went well.
I got to a desired outcome without many problems.

Areas for Improvement:

Better understanding of the code, adding more variability and functionality + creating a even better UI with CSS.


