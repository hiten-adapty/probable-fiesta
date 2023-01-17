import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  path:string = "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTL3H6-lpg3NMdcoIx2KXmBwLqQAe7sa_TExY_ovCGGUzh2-8X2oFQ5oGmcn_dbP0F6kltjzvpbQmymUPc"
  recipes: Recipe[] = [
    new Recipe("Chocolate Cake", "Chocolate Cake", this.path),
    new Recipe("White Marble", "White Marble Cake", "https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg")
  ];

}
