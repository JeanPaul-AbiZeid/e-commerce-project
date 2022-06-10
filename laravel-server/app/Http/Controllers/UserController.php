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
}
