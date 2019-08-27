/* eslint-disable semi */

import { observable, action, decorate } from 'mobx';
import { createContext } from 'react'

// Сохранка 27.08.19 ночь
// Финал созидания
// Начинаю чистить код
// Линт поставлен код проверен
class PokemonsStore {
// Конструктор начальной инициализации
  constructor () {
    this.fade = false;
    // Асинхронность для fade анимации (без нее)
    const firstTw = async () => {
      const mass = [];
      for (let co = 1; co <= 20; co++) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + co)
        const json = await response.json();
        let text;
        const index = json.name.indexOf('-');
        if (index !== -1) {
          text = json.name.slice(0, index);
        } else {
          text = json.name;
        }
        mass.push({
          name: text,
          id: json.id,
          types: json.types,
          sprites: {
            front_default: json.sprites.front_default
          }
        });
      }
      this.pokemons = mass;
      this.fade = true;
    }

    firstTw();

    this.Get807();
  }

pokemons = [] // Массив покемонов
pokemonsRepeat = [] // Массив покемонов для повторного использования
poksPag = [] // Массив для пагинации при поиске
typesCheckbox = [] // Массив типов покемонов при активации чекбоксов
pokemon // Выбранный покемон для отдельной страницы
species // Fetch pokeApi species
loadCount = 20 // Количество покемонов
SearchText = '' // Данные в поисковой форме
activePage = 1 ;
fade // Затухание при перерендере

// Пагинация
handlePageChange = (pageNumber) => {
  let mass = [];
  this.fade = false
  this.pokemons = [];
  this.activePage = pageNumber;

  if (this.SearchText.length > 0 || this.typesCheckbox.length > 0) {
    mass = this.poksPag.slice(this.loadCount * (pageNumber - 1), this.loadCount * pageNumber);
  } else {
    mass = this.pokemonsRepeat.slice(this.loadCount * (pageNumber - 1), this.loadCount * pageNumber);
  }

  setTimeout(() => {
    this.pokemons = mass
    this.fade = true
  }, 200);
}

// Асинхронное 807 покемонов
Get807 = async () => {
  for (let co = 1; co <= 807; co++) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + co)
    const json = await response.json();

    let text;
    const index = json.name.indexOf('-');
    if (index !== -1) {
      text = json.name.slice(0, index);
    } else {
      text = json.name;
    }

    this.pokemonsRepeat.push({
      name: text,
      id: json.id,
      types: json.types,
      sprites: {
        front_default: json.sprites.front_default
      }
    });
  }
}

// Пагинация пока грузит 807 покемонов
PageBefore807 = async (pageNumber) => {
  this.fade = false;
  this.pokemons = [];
  const mass = [];
  this.activePage = pageNumber;

  for (let co = (this.activePage - 1) * this.loadCount + 1; co <= (this.activePage * this.loadCount); co++) {
    if (co > 807) {
      break;
    } else {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + co)
      const json = await response.json();
      let text;
      const index = json.name.indexOf('-');
      if (index !== -1) {
        text = json.name.slice(0, index);
      } else {
        text = json.name;
      }
      mass.push({
        name: text,
        id: json.id,
        types: json.types,
        sprites: {
          front_default: json.sprites.front_default
        }
      });
    }
  }
  this.pokemons = mass;

  setTimeout(() => {
    this.fade = true;
  }, 100);
}

// Функция присвоения текущего покемона для его персональной страницы при заходе одельно и по ссылке
CurrentPokemonPage = (value) => {
  fetch('https://pokeapi.co/api/v2/pokemon-species/' + value + '/').then(results => {
    return results.json();
  }).then(data => {
    this.species = data;
  });
  fetch('https://pokeapi.co/api/v2/pokemon/' + value).then(results => {
    return results.json();
  }).then(data => {
    this.pokemon = data;
  });
}

// Функция выбора количества отображаемых покемонов (Пока что без количества страниц)
PokemonGet = (value = 20) => {
  this.fade = false;

  // Я ебал ваш материал в ротяку :
  const inputs = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
    inputs[i].click();
  }
  this.SearchText = '';
  this.pokemons = [];
  this.loadCount = value;
  this.activePage = 1;
  setTimeout(() => {
    this.pokemons = this.pokemonsRepeat.slice(0, value);
    this.fade = true;
  }, 200);
}

// Функция поиска покемонов по имене
SearchPokemons = (e) => {
// Присвоение значения с формы
  this.fade = false;
  this.SearchText = e.target.value;
  this.pokemons = [];
  this.activePage = 1;
  this.poksPag = [];
  // Проверка на пустоту формы и фильтр

  setTimeout(() => {
    if (this.SearchText === '' && this.typesCheckbox.length === 0) {
      this.poksPag = this.pokemonsRepeat.slice(0, this.loadCount);
    } else {
      this.poksPag = this.pokemonsRepeat.filter((val) => {
        return val.name.match(this.SearchText + '.*');
      });

      // Проверка чек боксов
      if (this.typesCheckbox.length !== 0) {
        this.poksPag = this.poksPag.filter((val) => {
          let chec = false;
          val.types.map((item) => {
            if (this.typesCheckbox.indexOf(item.type.name) !== -1) {
              chec = true;
              return undefined;
            }

            return undefined;
          });
          if (chec === true) {
            return val;
          }

          return undefined;
        });
      }
    }
    this.pokemons = this.poksPag.slice(0, this.loadCount);
    this.fade = true;
  }, 200);
}

// Проверка чекбоксво
CheckBoxPokemon = (event) => {
  this.pokemons = [];
  this.poksPag = [];
  this.activePage = 1;
  this.fade = false;
  // Востановление масива значений
  if (event.target.checked) {
    this.typesCheckbox.push(event.target.value);
  } else {
    const num = this.typesCheckbox.indexOf(event.target.value);
    if (num > -1) {
      this.typesCheckbox.splice(num, 1);
    }
  }

  if (this.SearchText === '' && this.typesCheckbox.length === 0) {
    this.poksPag = this.pokemonsRepeat.slice(0, this.loadCount);
  } else {
    this.poksPag = this.pokemonsRepeat;

    if (this.SearchText.length !== 0) {
      this.poksPag = this.poksPag.filter((val) => {
        return val.name.match(this.SearchText + '.*');
      });
    }

    if (this.typesCheckbox.length !== 0) {
      this.poksPag = this.poksPag.filter((val) => {
        let chec = false;
        val.types.map((item) => {
          if ((this.typesCheckbox.indexOf(item.type.name) !== -1)) {
            chec = true;
            return undefined;
          }
          return undefined;
        });
        if (chec === true) {
          return val;
        }

        return undefined;
      });
    }
  }
  setTimeout(() => {
    this.pokemons = this.poksPag.slice(0, this.loadCount);
    this.fade = true;
  }, 200)
}
}

// Декорация свойств и методов
decorate(PokemonsStore, {
  fade: observable,
  poksPag: observable,
  species: observable,
  PageBefore807: action,
  activePage: observable,
  handlePageChange: action,
  formChecked: observable,
  loadCount: observable,
  pokemons: observable,
  pokemonsRepeat: observable,
  pokemon: observable,
  typesCheckbox: observable,
  SearchText: observable,
  PokemonGet: action,
  SearchPokemons: action,
  CurrentPokemon: action,
  NextPage: action,
  CurrentPokemonPage: action,
  CheckBoxPokemon: action
})

// Создание экземпляра
const m = new PokemonsStore();
// Експорт и привязка контекста
export default createContext(m);
