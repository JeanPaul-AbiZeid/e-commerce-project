<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Category;

class AdminController extends Controller
{
    public function addItem(Request $request){
        $item = new Item;
        $item->name = $request->name;
        $item->description = $request->description;
        $item->category_id = $request->category_id;
        $item->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function addCategory(Request $request){
        $category = new Category;
        $category->name = $request->name;
        $category->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function deleteItem(Request $request){
        $item = Item::where('id', $request->id)->delete();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
