document.getElementById('save').addEventListener('click', function() {
  let bgcolor = document.getElementById('bgColor').value;
  let linkColor = document.getElementById('linkColor').value;
  let tableColor =  document.getElementById('tableColor').value;
  browser.storage.local.set({ 
    backgroundColor: bgcolor,
    linkColor: linkColor,
    tableColor: tableColor });
});