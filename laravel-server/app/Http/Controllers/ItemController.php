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
            $category = Item::find($id)->category->name;
        }else{
            $items = Item::all();
        }
        
        return response()->json([
            "status" => "Success",
            "items" => $items,
            "category" => $category
        ], 200);
    }
}
