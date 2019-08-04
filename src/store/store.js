import React from 'react';
import ReactDOM from 'react-dom';

import  { observable , computed , action , decorate , set , get } from 'mobx';

/*
export  const appState = observable({
  textTest: "Store text", // observable state
	
	get elapsedTime() // computing
	{
   return  this.text + " dimas" ;
  	},

	get pokemon()
	{
		fetch('https://pokeapi.co/api/v2/pokemon/1/')
  		.then(function(response) {
			return response.json();
			})
  		.then(function(myJson) {
				console.log(JSON.stringify(myJson));
  });
	
}});

appState.onChange = function(e) { // action
  appState.text = e.target.value;
};

*/

/*
import { createContext } from 'react'

 class Todos {
  text = "TEXT TEST"
   count = 0;
  get remainingTodos() {
    return this.todos.filter(t => !t.completed).length
  }

  toggleTodo = index => {
    this.todos[index].completed = !this.todos[index]
      .completed
  }
  
  Increment = () =>
  {
	  this.count++;
  }
  
  ChangeText = (event) =>
  {
	  this.text = event.target.value;
  }
}



decorate(Todos, {
  text: observable,
  count: observable,
  remainingTodos: computed,
	Increment: action,
	ChangeText: action
})

export default createContext(new Todos())

*/


import { createContext } from 'react'

// Сохранка 04.08.19 днем
// Сделай проверку на теги и имя в поисковике при загрузке на кнопке ... ДОЛБОЕБ!
// Сделать поиск при отсутствие покемонов с запросами 

class PokemonsStore {
  
	// Конструктор начальной инициализации
	constructor() {
	
		var m = new Array() ;
		for(var co = 1 ; co <= 20 ; co++)  
		{
   	
			fetch("https://pokeapi.co/api/v2/pokemon/"+co)
				.then(results => 
					  { 
				return results.json();
					  })
				.then(data => 
					  {
				this.pokemons.push(data);
				this.pokemonsRepeat.push(data);

				/*
				if(co === 20)
				{
				this.pokemonsRepeat = this.pokemons = this.pokemons.slice().sort( (a , b) => {
						if(a.id > b.id)
						{				   
							return true;
						}
						else
						{
							return false;
						}
					})
					
					
				}
				*/
			})
		}
	}
	
	
pokemons = new Array()  // Массив покемонов
pokemonsRepeat = new Array()  // Массив покемонов для повторного использования
typesCheckbox = new Array()  // Массив типов покемонов при активации чекбоксов
pokemon   // Выбранный покемон для отдельной страницы
loadCountPrimary = 20  // Количество покемонов на страницу для добавления при переходе
loadCount = 20   // Количество покемонов
pagenum = 1  // Количество страниц
SearchText = ""  // Данные в поисковой форме


// Функция добавления покемонов
NextPage = () =>{
	
	this.pagenum++;
	
	  for(var co = (this.loadCount+1) ; co <= (this.loadCount + this.loadCountPrimary) ; co++)
		  {
   	fetch("https://pokeapi.co/api/v2/pokemon/"+co).then(results => { return results.json();
    }).then(data => {
    	this.pokemons.push(data)

		 })
		  }
	this.loadCount += this.loadCountPrimary;
    }
		


// Функция присвоения текущего покемона для его персональной страницы
CurrentPokemon = (value) =>
{
	this.pokemon= value;
}

// Функция присвоения текущего покемона для его персональной страницы при заходе одельно по ссылке
CurrentPokemonPage(value)
{


		fetch("https://pokeapi.co/api/v2/pokemon/" + value).then(results => { return results.json();
    }).then(data => {
	this.pokemon = data;
    })

}

// Функция выбора количества отображаемых покемонов (Пока что без количества страниц)
  PokemonGet = (value = 20) =>
  {
	  this.pokemons = [];
	  this.loadCount = value;
	  
	  for(var co = 1 ; co <= value ; co++)
		  {
   	fetch("https://pokeapi.co/api/v2/pokemon/"+co).then(results => { return results.json();
    }).then(data => {
				this.pokemons.push(data);
					this.pokemonsRepeat.push(data);
			});
		  }
	  

		/*
		if(co === value)
				{
					//document.getElementById("next-button").disabled = false;
	
				this.pokemons = this.pokemons.slice().sort( (a , b) => {
						if(a.id > b.id)
						{				   
							return true;
						}
						else
						{
							return false;
						}
					})
					this.pokemonsRepeat = this.pokemonsRepeat.slice().sort( (a , b) => {
						if(a.id > b.id)
						{				   
							return true;
						}
						else
						{
							return false;
						}
					})
				}
		*/
	  this.loadCountPrimary = value;
}
	
  
  
  
  
  
// Функция поиска покемонов по имене
  SearchPokemons = (e) => 
  {
		// Присвоение значения с формы
		this.SearchText = e.target.value;

		// Проверка на пустоту формы и фильтрацыя
		if(e.target.value === "")
		{
			this.pokemons = this.pokemonsRepeat;
		}
		else
		{
			this.pokemons = this.pokemonsRepeat;
			this.pokemons = this.pokemons.filter( (val) => {
				return val.name.match( e.target.value + ".*");
				});
		}

		// Проверка чек боксов
		if( this.typesCheckbox.length != 0 )
		{
		this.pokemons = this.pokemons.filter( (val) =>
		{		
			var chec  = false;
			 val.types.map( (item) => { if(this.typesCheckbox.indexOf(item.type.name) != -1)
				{
					chec = true;
					return ; 
				}
			});
			if( chec === true)
			{
				return val;
			}
			});
		}

  }


  CheckBoxPokemon = (event) =>
  {

		// Востановление масива значений

		this.pokemons = this.pokemonsRepeat;


		// Проверка на активность чек бокса
	  if( event.target.checked)
	  { 
		this.typesCheckbox.push(event.target.value);	
	  }
	  else
	  {		  
		var num = this.typesCheckbox.indexOf(event.target.value);
		if(num > -1)
		{
			this.typesCheckbox.splice(num, 1);
		}
	  }


	  // Проверка масива значений чек бокса
	  if( this.typesCheckbox.length != 0 )
		{
		this.pokemons = this.pokemons.filter( (val) =>
		{		
			var chec  = false;
			 val.types.map( (item) => { if( ( this.typesCheckbox.indexOf(item.type.name) != -1 ) && ( val.name.match( this.SearchText + ".*")))
				{
					chec = true;
					return ; 
				}
			});
			if( chec === true)
			{
				return val;
			}
			});
		}
		else
		{
			this.pokemons = this.pokemons.filter( (val) => {
				return val.name.match( this.SearchText + ".*");
				});
		}
  }


}




// Декорация свойств и методов 
decorate(PokemonsStore, {
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