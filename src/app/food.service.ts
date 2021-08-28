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

  storeProducts = [
    {
      title:'Προσφορές',
      comment:'',
      items:[
        {
          name:'Με 1 combo classic burger, δώρο ακόμη 1',
          price: '7.30€',
          comment:''
        },
        {
          name:'3 Τυλιχτά, 1 μερίδα πατάτες & 1 Coca-Cola 500ml',
          price: '11.10€',
          comment:''
        },
        {
          name:'2 Τυλιχτά, 1 μερίδα πατάτες & 1 Coca-Cola 330ml',
          price: '8,49€',
          comment:''
        },
        {
          name:'2 Τυλιχτά με καλαμάκι κοτόπουλο μπούτι & 1 αναψυκτικό 330ml',
          price: '5.00€',
          comment:''
        },
        {
          name:'1 Classic burger με πατάτες τηγανητές & συνοδευτική σως (+1 αναψυκτικό 330ml)',
          price: '5.00€',
          comment:''
        },
      ]
    },
    {
      title:'Πίτες...Χειροποίητες',
      comment:'Χειροποίητα & φρέσκα',
      items:[
        {
          name:'Πιτάκια Καλαμποκιού',
          price:'1.00€',
          comment:'3 τεμάχια'
        },
        {
          name:'Πιτάκια Ολικής Άλεσης',
          price:'1.00€',
          comment:'3 τεμάχια'
        },
        {
          name:'Πίτα Καλαμποκιού',
          price:'0.50€',
          comment:''
        },
        {
          name:'Πίτα Ολικής Άλεσης',
          price:'0.50€',
          comment:''
        },
        {
          name:'Πίτα Κυπριακή',
          price:'0.50€',
          comment:''
        },
        {
          name:'Πίτα Παραδοσιακή',
          price:'0.50€',
          comment:''
        },
        {
          name:'Πίτα Σάντουιτς',
          price:'0.50€',
          comment:''
        },
        {
          name:'Θρακόψωμο',
          price:'1.00',
          comment:''
        },
      ]
    }
  ]



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
