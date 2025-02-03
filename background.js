chrome.runtime.onInstalled.addListener(() => {
    console.log('DCInside URL Converter 확장 프로그램이 설치되었습니다.');
});
chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: "https://chromewebstore.google.com/detail/dcinside-url-converter/bbhfiaigheddloefjfhfjkoijhjjefbc" });
});