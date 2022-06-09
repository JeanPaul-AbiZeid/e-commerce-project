<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class AdminController extends Controller
{
    public function addItem(Request $request){
        $item = new Item;
        $item->name = $request->name;
        $item->description = $request->description;
        $item->save();

        // $item = Item::create([
        //     'name' => $request->first_name,    
        //     'description' => $request->description,
        // ]);

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    
}
