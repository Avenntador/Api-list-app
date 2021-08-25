class PublicApi extends ClassApi {
  /* 
  This class extends ClassApi for work with public-api
  For documentation follow this link - https://github.com/davemachado/public-api

  properties
  all properties from ClassApi and 2 properties define by default differently
  @param [string] base url = https://api.publicapis.org
  @param [string] endPointName = 'categories' - by default 
  */

  constructor() {
    super();
    this.baseUrl = 'https://api.publicapis.org/'; //default
    this.endPointName = 'categories'; //default
  }

  _renderEntriesAndRandom(data) {
    let dataArr = data.entries;
    if (dataArr == null || dataArr.length == 0 || dataArr == undefined) {
      console.log('Data not found');
      return;
    }
    let outQuery = document.querySelector(this.element);
    for (let item of dataArr) {
      outQuery.append(this._tabliziedData(item));
    }
  }

  _renderCategory(data) {
    for (let item of data) {
      let outQuery = document.querySelector(this.element);
      let itemTag = document.createElement('p');
      itemTag.classList.add('categories');
      itemTag.innerHTML = `<a class = '${item}' href="#">${item}</a>`;
      itemTag.addEventListener('click', () => this._findItems(item));
      outQuery.append(itemTag);
    }
  }

  //method searches every match in the selected category
  _findItems(item) {
    super.cleanScreen();
    super.setEndPointName('entries');
    super.setParameters({ category: `${item}` });
    super.sendRequest();
  }

  // create table with every single object(parameter) which sending in this method
  _tabliziedData(item) {
    let table = document.createElement('table');
    for (let key in item) {
      let tr = document.createElement('tr');
      tr.classList.add('table-row');
      let td1 = document.createElement('td');
      td1.textContent = key;
      td1.classList.add('table-key');
      tr.append(td1);
      let td2 = document.createElement('td');
      if (key == 'Link') {
        td2.innerHTML = `<a href="${item[key]}">${item[key]}</a>`;
      } else {
        td2.textContent = item[key];
      }
      td2.classList.add('table-value');
      tr.append(td2);
      table.append(tr);
    }
    return table;
  }

  _render(data) {
    let endPointNameQuerySearch = this.paramQueryString.split('?')[0];
    if (
      endPointNameQuerySearch  == 'entries' ||
      endPointNameQuerySearch  == 'random' ||
      (this.endPointName == 'entries' || this.endPointName == 'random')
    ) {
      this._renderEntriesAndRandom(data);
    } else if (endPointNameQuerySearch  == 'categories' || this.endPointName == 'categories') {
      this._renderCategory(data);
    }
  }
}