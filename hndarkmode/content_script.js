// Log when the script runs
console.log('Content script is running');

// Initial color load
browser.storage.sync.get({
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    linkColor: '#0000FF'
}).then((result) => {
    console.log('Got stored colors:', result);
    document.body.style.backgroundColor = result.backgroundColor;
    document.body.style.color = result.textColor;
    
    // Apply to all links
    const links = document.getElementsByTagName('a');
    for(let link of links) {
        link.style.color = result.linkColor;
    }
    
    console.log('Applied colors:', {
        background: document.body.style.backgroundColor,
        text: document.body.style.color
    });
}).catch((error) => {
    console.error('Error loading colors:', error);
});

// Listen for changes
browser.storage.onChanged.addListener((changes, area) => {
    console.log('Storage changed:', changes);
    
    if (changes.backgroundColor) {
        document.body.style.backgroundColor = changes.backgroundColor.newValue;
        console.log('Changed background to:', changes.backgroundColor.newValue);
    }
    if (changes.textColor) {
        document.body.style.color = changes.textColor.newValue;
        console.log('Changed text color to:', changes.textColor.newValue);
    }
    if (changes.linkColor) {
        const links = document.getElementsByTagName('a');
        for(let link of links) {
            link.style.color = changes.linkColor.newValue;
        }
        console.log('Changed link color to:', changes.linkColor.newValue);
    }
});