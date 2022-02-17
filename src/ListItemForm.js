import { useState } from 'react';
import { createListItem } from './services/fetch-utils';

export default function ListItemForm({ fetchItems, shoppingList }) {
  // you'll need to track the name and quantity in state
  const [quantity, setQuantity] = useState(NaN);
  const [name, setName] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    
    // make a new list item in supabase using the form values stored in state
    const item = {
      name,
      quantity,
      has_been_bought: false
    };

    await createListItem(item);
    // refetch the items using the handler functionpassed down as a prop
    await fetchItems();
    // clear the name and quantity in state to refresh the form
    setName('');
    setQuantity(NaN);
  }
  
  return (
    <div className='new-item-form-container'>
      {/* on submit, call the handleSubmit function */}
      <form onSubmit={handleSubmit}>
          I need . . . 
        <label>
          {/* on change, update the quantity in state */}
          {/* // this should be a controlled input, soi set the value based on state */}
            Quantity
          <input required value={quantity} type="number" name="quantity" onChange={e => setQuantity(e.target.value)} />
        </label>
        <label>
            Name
          {/* on change, update the name in state */}
          {/* // this should be a controlled input, soi set the value based on state  */}
          <input required value={name} name="name" onChange={e => setName(e.target.value)}/>
        </label>
        <button>Add item</button>
      </form>
    </div>
  );
}
