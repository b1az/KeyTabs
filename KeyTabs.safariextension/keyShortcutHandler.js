if (window.top === window) {
    function handleKeydown(e) {
	if (e.keyCode == 87 && e.ctrlKey) {
            e.preventDefault();
            safari.self.tab.dispatchMessage('closeTabsRight');
	} else if (e.keyCode == 87 && e.altKey) {
            e.preventDefault();
            safari.self.tab.dispatchMessage('closeTabsLeft');
	}
    }
    window.addEventListener('keydown', handleKeydown, false);
}
