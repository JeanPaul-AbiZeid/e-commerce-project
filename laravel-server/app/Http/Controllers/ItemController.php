<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Item;
use App\Models\User;
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

    public function getAllcategories(){
        $category = Category::all();
        
        return response()->json([
            "status" => "Success",
            "items" => $category
        ], 200);
    }

    public function getFavorites(){
        $user = Auth::user();
        $favorites = $user->favorites;

        return response()->json([
            "favorites" => $favorites
        ], 200);
    }

    public function change(Request $request){
        $item = Item::find($request->item_id);

        if(!$item){
            return response()->json([
                'message' => 'item does not exist'
            ]);
        }

        $user = Auth::user();
        $is_favorite = $user->whereHas('favorites', function($query) use($request){
            return $query->where('item_id', $request->item_id);
        })->first();
        if($is_favorite){
            $user->favorites()->detach($request->item_id);
            return response()->json([
                'message' => 'removed from favorites'
            ], 200);
        }
        else{
            $user->favorites()->syncWithoutDetaching($request->item_id);
            return response()->json([
                'message' => 'added to favorites'
            ], 200);
        }
    }
}
