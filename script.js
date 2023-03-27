function copyToClipboard() {
    const myEmail = "av.yigitdincsoy@gmail.com"
    navigator.clipboard.writeText(myEmail);

    document.getElementById("myEmail").innerHTML = "copied to clipboard" 
  } 