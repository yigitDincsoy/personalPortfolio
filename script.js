function copyToClipboard() {
    const myEmail = "av.yigitdincsoy@gmail.com"
    navigator.clipboard.writeText(myEmail);

    document.getElementById("clipboardCopiedMessage").style.display = "inline" 
  } 