// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
  var titleNode =document_root.getElementById('eow-title');
    return titleNode.innerText;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});
