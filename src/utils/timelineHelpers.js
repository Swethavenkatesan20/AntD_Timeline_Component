// check if at least one item has a label
export function hasAnyLabel(items = []) {
  return items.some(item => !!item.label);
}

// reverse items if reverse is true
export function getReversedItems(items = [], reverse = false) {
  return reverse ? [...items].reverse() : items;
}


// get content position for alternate mode
export function getContentPosition(mode, index) {
  if (mode === 'alternate') {
    return index % 2 === 0 ? 'left' : 'right';
  }
  return mode;
}
