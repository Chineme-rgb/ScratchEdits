ScratchTools.Scratch.scratchGui.then(gui => {
  const titleInput = gui.querySelector('input[placeholder="Project title"]');

  if (titleInput) {
    titleInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.shiftKey) {
        e.preventDefault();
        const cursorPos = titleInput.selectionStart;
        const value = titleInput.value;
        titleInput.value = value.slice(0, cursorPos) + '\n' + value.slice(cursorPos);
      }
    });
  }
});
