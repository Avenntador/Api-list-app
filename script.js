document.querySelector('.b-1').addEventListener('click', () => {
    let publicApi = new PublicApi();
    publicApi.setElement('.content');
    publicApi.cleanScreen();
    publicApi.setEndPointName('categories');
    publicApi.sendRequest();
    console.log(publicApi.query);
  });
  
  document.querySelector('.b-2').addEventListener('click', () => {
    let publicApi = new PublicApi();
    publicApi.setElement('.content');
    publicApi.cleanScreen();
    publicApi.setEndPointName('random');
    publicApi.sendRequest();
    console.log(publicApi.query);
  });
  
  document.querySelector('.b-3').addEventListener('click', () => {
    let publicApi = new PublicApi();
    publicApi.setElement('.content');
    publicApi.cleanScreen();
    publicApi.setEndPointName('entries');
    publicApi.sendRequest();
    console.log(publicApi.query);
  });
  
  document.querySelector('.b-4').addEventListener('click', () => {
    let publicApi = new PublicApi();
    publicApi.setElement('.content');
    publicApi.cleanScreen();
    console.log(publicApi.query);
  });
  
  document.querySelector('.search-btn').addEventListener('click', () => {
    let publicApi = new PublicApi();
    publicApi.setElement('.content');
    publicApi.cleanScreen();
    let input = document.querySelector('.input-params');
    publicApi.setParamQueryParameters(input.value);
    publicApi.sendRequest();
    console.log(publicApi.query);
  });
  