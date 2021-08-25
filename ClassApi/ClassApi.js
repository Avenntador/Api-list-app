class ClassApi {
  /*
  This "abstract" class define default behavior for send AJAX requests.
  
  properties
  @param [string] endPointName - name of end endPoint
  @param [string] baseUrl - base url for fetch
  @param [object] parameters - parameters for query string
  @param [string] element - out element for apeend created HTML-elements
  @param [array] data - response data from fetch on server (not using for now)
  @param [string] query - final query string for AJAX
  @param [string] paramQueryString - (if you need use input tag in your HTML and input parameters manually)
   */

  constructor() {
    this.endPointName = '';
    this.baseUrl = '';
    this.parameters = {};
    this.element = 'body';
    this.data = [];
    this.query = '';
    this.paramQueryString = '';
  }

  setEndPointName(endPoint) {
    if (
      endPoint.trim().length != 0 &&
      endPoint != undefined &&
      endPoint != null
    ) {
      this.endPointName = endPoint;
      return true;
    }
    return false;
  }

  setBaseUrl(url) {
    if (url.trim().length != 0 && url != undefined && url != null) {
      this.baseUrl = url;
      return true;
    }
    return false;
  }

  setParameters(params) {
    if (typeof params == 'object' && params != undefined && params != null) {
      this.parameters = params;
      return true;
    }
    return false;
  }

  setParamQueryParameters(queryString) {
    if (
      queryString.trim().length != 0 &&
      queryString != undefined &&
      queryString != null
    ) {
      this.paramQueryString = queryString;
      return true;
    }
    return false;
  }

  setElement(elem) {
    let tempSelec = document.querySelector(elem);
    if (tempSelec != undefined && tempSelec != null) {
      this.element = elem;
      return true;
    }
    return false;
  }

  //making finish query string for request
  _makeQuery() {
    if (this.paramQueryString != '' && this.baseUrl != '') {
      this.query = this.baseUrl + this.paramQueryString;
      return true;
    }
    if (this.baseUrl != '' && this.endPointName != '') {
      let params = this.parameters;
      this.query = this.baseUrl + this.endPointName;
      if (Object.keys(params).length != 0) {
        let tempQuery = this.baseUrl + this.endPointName;
        tempQuery += '?';
        for (let key in params) {
          tempQuery += `${key}=${params[key]}&`;
        }
        this.query = tempQuery.slice(0, tempQuery.length - 1);
        return true;
      }
      return true;
    }
    return false;
  }

  //main method on this class, sending GET-requests
  sendRequest() {
    if (this._makeQuery()) {
      fetch(this.query)
        .then(response => response.json())
        .then(response => this._render(response))
        .catch(err =>
          console.log(err + '. Check your query and internet connection!')
        );
      return true;
    }
    return false;
  }

  //default render method, append "div" on "body" HTML
  _render(data) {
    let div = document.createElement('div');
    div.textContent = data;
    document.querySelector(this.element).append(div);
  }

  cleanScreen() {
    document.querySelector(this.element).innerHTML = '';
  }
}