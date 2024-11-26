browser.storage.local.get('backgroundColor', function(result) {
    if (result.backgroundColor) {
        document.body.style.backgroundColor = result.backgroundColor;
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
});

browser.storage.local.get('linkColor', function(result) {
    if (result.linkColor) {
        const links = document.getElementsByTagName('a');
        for(let link of links) {
            link.style.color = result.linkColor;
        }
    } else {
        const links = document.getElementsByTagName('a');
        for(let link of links) {
            link.style.color = 'blue';
    }
    } 
});

browser.storage.local.get('tableColor', function(result) {
    if (result.tableColor) {
        document.getElementById('hnmain').style.backgroundColor = result.tableColor;
    } else {
        document.getElementById('hnmain').style.backgroundColor = '#f6f6ef';
    }
});

browser.storage.onChanged.addListener((changes) => {
    if (changes.backgroundColor) {
        document.body.style.backgroundColor = changes.backgroundColor.newValue;
    }
});

browser.storage.onChanged.addListener((changes) => {
    if (changes.linkColor) {
        const links = document.getElementsByTagName('a');
        for(let link of links) {
            link.style.color = changes.linkColor.newValue;
        }
    }
});

browser.storage.onChanged.addListener((changes) => {
    if (changes.tableColor) {
       document.getElementById('hnmain').style.backgroundColor = changes.tableColor.newValue;
    }
});
