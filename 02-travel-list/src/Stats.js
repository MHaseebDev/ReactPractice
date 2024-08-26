import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats"> Start adding some items to your packing list 🚀</p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed);
  const numPackedItems = packedItems.length;
  const packedItemsPercentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage === 100
          ? `You got everything! Ready to go ✈`
          : `You have ${numItems} items on your list, and already packed ${numPackedItems} (${packedItemsPercentage}%)`}
      </em>
    </footer>
  );
}
