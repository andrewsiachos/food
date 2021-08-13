import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  categories = [
    {
      name:'Healthy/Diet',
      image:'../../assets/images/catone.png',
      type:'healthy'
    },
    {
      name:'Burgers',
      image:'../../assets/images/cattwo.png',
      type:'burgers'
    },
    {
      name:'Ψητοπωλεία',
      image:'../../assets/images/catthree.png',
      type:'grill'
    },
    {
      name:'Restaurant',
      image:'../../assets/images/catfour.png',
      type:'restaurant'
    },
    {
      name:'Coffee',
      image:'../../assets/images/catfive.png',
      type:'coffee'
    },
    {
      name:'Γλυκά',
      image:'../../assets/images/catsix.png',
      type:'sweets'
    },
    {
      name:'Γλυκά',
      image:'../../assets/images/catseven.png',
      type:'sweets'
    },
    {
      name:'Asian',
      image:'../../assets/images/cateight.png',
      type:'asian'
    },
    {
      name:'Μαγειρευτά',
      image:'../../assets/images/catnine.png',
      type:'cooked'
    }
  ];
  selectedCategory:string = '';
  selectedCategoryName: string = '';

  stores = [
    {
      name: 'Βενέτης',
      image: '../../assets/images/veneti.png',
      tags:['sweets', 'coffee', 'healthy']
    },
    {
      name: 'Βενέτης',
      image: '../../assets/images/veneti.png',
      tags:['sweets', 'coffee', 'healthy']
    },
    {
      name: 'Ψησταριά',
      image: '../../assets/images/psistaria.jpg',
      tags:['grill']
    },
    {
      name: 'Ασιατική Κουζίνα',
      image:'../../assets/images/asian.jpg',
      tags:['asian']
    },
    {
      name:'Burger Bar',
      image:'../../assets/images/burger.jpg',
      tags:['burgers']
    }
  ];



  selectedStores:any = [];
  selectedStore:{name: string, image: string} ={name:'', image:''};





  constructor() { }


  getCategories(){
    return this.categories;
  }

  categoryType(type:string, name: string){
    this.selectedCategory = type;
    this.selectedCategoryName = name;
    this.selectedStores = this.stores.filter((x)=>{
      return x.tags.includes(type);
    });
  }

  storeSelected(theStore:any){
    this.selectedStore = theStore;
  }
}
