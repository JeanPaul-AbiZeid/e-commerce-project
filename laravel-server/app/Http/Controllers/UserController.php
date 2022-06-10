<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getInfo(Request $request){
        $user = User::where("id", $request->id)->get();
        
        return response()->json([
            "status" => "Success",
            "user" => $user
        ], 200);
    }

    public function editProfile(Request $request){
        $update = User::find($request->id);
        $update->first_name = $request->first_name;
        $update->last_name = $request->last_name;
        $update->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
