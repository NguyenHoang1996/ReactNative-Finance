let rootUrl = 'https://finance.google.com/finance';

export default function(code) {
  let url = `${rootUrl}?q=${code}&output=json`; 
  return fetch(url).then(function(response){  
      console.log('--------------------Truoc khi GET JSON');      
      console.log(url);
      return response.text();
    }).then(function(text){
      console.log(text);
      let rawJSONString = text.replace("//",'');
      console.log(rawJSONString);
      let json = JSON.parse(rawJSONString);
      console.log(json);
      let data = json[0];
      console.log(data);
      console.log(data.l);
      return {
        stockIndex: data.l,
        stockChangeRaw: data.c,
        stockChangePercent: data.cp
      };
    });
}