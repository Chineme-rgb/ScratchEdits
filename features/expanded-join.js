ScratchTools.onProjectLoaded(() => {
  const blocks = document.querySelectorAll('.blocklyDraggable');

  blocks.forEach(block => {
    if (block.innerText.includes('join')) {
      // Add extra input fields visually (this is just a placeholder idea)
      const extraInput = document.createElement('input');
      extraInput.placeholder = 'Extra text';
      block.appendChild(extraInput);
    }
  });
});
