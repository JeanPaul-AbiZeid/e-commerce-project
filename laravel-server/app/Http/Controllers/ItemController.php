<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Category;

class ItemController extends Controller
{
    public function getAllItems($id = null){
        if($id != null){
            $items = Item::find($id);
            $items->category = Item::find($id)->category->name;
        }else{
            $items = Item::all();
            for ($i = 0; $i < count($items); $i++){
                $items[$i]->category = Item::find($items[$i]->id)->category->name;
            }
        }
        
        return response()->json([
            "status" => "Success",
            "items" => $items
        ], 200);
    }
}
