chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        urlContains: 'http://sae.infnet.edu.br/moodle/'
                    },
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});