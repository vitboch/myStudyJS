let url = "www.google.com/translate"

function domainName(url){
    return url.replace('www.','')
        .replace('http://','')
        .replace('https://','')
        .split(".")
        .shift()
}
console.log(domainName(url))