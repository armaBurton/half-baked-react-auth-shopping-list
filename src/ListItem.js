import { buyItem } from './services/fetch-utils';

export default function ListItem({ fetchItems, listItem }) {
  async function handleClick() {
    // buy the item (in supabase)
    // refetch the updated items array by calling the function passed in through props
    buyItem(listItem.id);
    fetchItems();
  }

//  () => {} is javascript for "do nothing". It's an arrow function that doesn't nothing at all.
  return (
    // on click, if it's already been bought, do nothing; otherwise, call the handleClick function
    <div className='list-item' onClick={handleClick}>
      {/* if it's been bought, this p tag should have the 'bought' class. Otherwise it should have the 'needed' class */}
      {
        listItem.has_been_bought
          ? <p className='bought'>{listItem.quantity}x {listItem.name}</p>
          : <p className='needed'>{listItem.quantity}x {listItem.name}</p>  
      }
    </div>
  );
}
