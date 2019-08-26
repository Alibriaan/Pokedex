

import {
	observable,
//	computed,
	action,
	decorate,
//	set,
//	get
} from 'mobx';

import {
	createContext
} from 'react'




// Сохранка 25.08.19 ночь
// Теги и форму вроде сделал
// Сделать поиск при отсутствие покемонов с запросами 
// Теперь идет до максималочки
// Пофиксил перезапись массива покемонов


class PokemonsStore {

	// Конструктор начальной инициализации
	constructor() {

		console.log("constructor)");

		for (var co = 1; co <= 20; co++) {
			fetch("https://pokeapi.co/api/v2/pokemon/" + co)
				.then(results => {
					return results.json();
				})
				.then(data => {
					this.pokemons.push({
						name: data.name,
						id: data.id,
						types: data.types,
						sprites: {
							front_default: data.sprites.front_default
						},
					});
					this.pokemons = this.pokemons.slice().sort((a, b) => {
						if (a.id > b.id) {
							return true;
						} else {
							return false;
						}
					})
				});

		}

		this.Get807();
	}


	pokemons = [] // Массив покемонов
	pokemonsRepeat = [] // Массив покемонов для повторного использования
	poksPag = []//Массив для пагинации при поиске

	typesCheckbox = [] // Массив типов покемонов при активации чекбоксов
	
	pokemon // Выбранный покемон для отдельной страницы
	species // Fetch pokeApi species

	loadCountPrimary = 20 // Количество покемонов на страницу для добавления при переходе
	loadCount = 20 // Количество покемонов
	pagenum = 1 // Количество страниц
	SearchText = "" // Данные в поисковой форме


	activePage = 1 ;
	// Пагинация 
	handlePageChange = (pageNumber) =>
	{

		this.pokemons = [];
		this.activePage = pageNumber;

		if(this.SearchText.length > 0 || this.typesCheckbox.length > 0)
		{
			setTimeout( () => {this.pokemons = this.poksPag.slice( this.loadCount * (pageNumber-1) , this.loadCount * pageNumber  ) 
				console.log("stabotal") }, 250);
		}
		else
		{
		setTimeout( () => {this.pokemons = this.pokemonsRepeat.slice( this.loadCount * (pageNumber-1) , this.loadCount * pageNumber  ) 
			 console.log("stabotal") }, 250);
		}
	}

	// Асинхронное 807 покемонов 
	Get807 = async () => {

		console.log("vizov 807");
		for (var co = 1; co <= 807; co++) {
			const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + co)
			const json = await response.json();
			this.pokemonsRepeat.push({
				name: json.name,
				id: json.id,
				types: json.types,
				sprites: {
					front_default: json.sprites.front_default
				},
			});

		}
	}


	// Пагинация пока грузит 807 покемонов
	PageBefore807 = async(pageNumber) => {

		this.pokemons = [];
		var mass = [];
		this.activePage = pageNumber;
		console.log("before 807");
		for (var co = (this.activePage-1) * this.loadCount + 1; co <= ( this.activePage * this.loadCount); co++) {
			if(co > 807)
			{
				break;
			}
			else
			{
			const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + co)
			const json = await response.json();
			mass.push({
				name: json.name,
				id: json.id,
				types: json.types,
				sprites: {
				front_default: json.sprites.front_default
				},
			});
		}
		}

		this.pokemons = mass;

	}


	// Функция присвоения текущего покемона для его персональной страницы при заходе одельно по ссылке
	CurrentPokemonPage =    (value)  => {

		fetch("https://pokeapi.co/api/v2/pokemon-species/" + value + "/").then(results => {
			return results.json();
		}).then(data => {

			this.species = data;

			
			
		});
		
		fetch("https://pokeapi.co/api/v2/pokemon/" + value).then(results => {
			return results.json();
		}).then(data => {

			this.pokemon = data;

			
		});


	}



	// Функция выбора количества отображаемых покемонов (Пока что без количества страниц)
	PokemonGet = (value = 20) => {
	
		// Я ебал ваш материал в ротяку :*
		let inputs = document.querySelectorAll('input[type="checkbox"]');
		for (var i = 0; i < inputs.length; i++) {
		  inputs[i].checked = true;
		  inputs[i].click();

		}

		
		//document.getElementById("search").value = "";
		//document.getElementById('search').value = '';
		
		/*
		let check = document.getElementsByTagName("").checked = false;
		for(let i = 0 ; i < check.length ; i++)
		{
			check[i].removeAttribute('checked');
		}
		*/
		this.SearchText ="";
		this.pokemons = [];
		this.loadCount = value;
		this.pokemons = this.pokemonsRepeat.slice(0, value);
		this.loadCountPrimary = value;
		this.activePage = 1 ;
	}





	// Переделать проверки ?? Вроде переделал
	// Функция поиска покемонов по имене
	SearchPokemons = (e) => {

		// Присвоение значения с формы
		this.SearchText = e.target.value;
		this.pokemons = [];
		this.activePage = 1;

		// Проверка на пустоту формы и фильтр

		setTimeout(  () => {
			if (this.SearchText === "" && this.typesCheckbox.length === 0) {
				this.poksPag = this.pokemonsRepeat.slice(0, this.loadCount);
			} else {
				this.poksPag = this.pokemonsRepeat.filter((val) => {
					return val.name.match(this.SearchText + ".*");
				});
	
	
				// Проверка чек боксов
				if (this.typesCheckbox.length !== 0) {
					this.poksPag = this.poksPag.filter((val) => {
						var chec = false;
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
		this.pokemons = this.poksPag.slice( 0 , this.loadCount-1 ) ;

		}, 100);
	
	}


	// Проверка чекбоксво
	CheckBoxPokemon = (event) => {

		this.activePage = 1;
		// Востановление масива значений
		if (event.target.checked) {
			this.typesCheckbox.push(event.target.value);
		} else {
			var num = this.typesCheckbox.indexOf(event.target.value);
			if (num > -1) {
				this.typesCheckbox.splice(num, 1);
			}
		}

		if (this.SearchText === "" && this.typesCheckbox.length === 0) {
			this.poksPag = this.pokemonsRepeat.slice(0, this.loadCount);
		}
		else
		{
			this.poksPag = this.pokemonsRepeat;

			if (this.SearchText.length !== 0) {
				this.poksPag = this.pokemonsRepeat.filter((val) => {
					return val.name.match(this.SearchText + ".*");
				});
			}

			if (this.typesCheckbox.length !== 0) {
				this.poksPag = this.pokemonsRepeat.filter((val) => {
					var chec = false;
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
			
		this.pokemons = this.poksPag.slice( 0 , this.loadCount ) ;

		}
	}





// Декорация свойств и методов 
decorate(PokemonsStore, {

	poksPag: observable, 

	species: observable,
	PageBefore807: action,

	activePage: observable,
	handlePageChange:action,

	formChecked: observable,
	loadCount: observable,
	loadCountPrimary: observable,
	pagenum: observable,
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
	CheckBoxPokemon: action,
})

// Создание экземпляра 
var m = new PokemonsStore();

// Експорт и привязка контекста
export default createContext(m);