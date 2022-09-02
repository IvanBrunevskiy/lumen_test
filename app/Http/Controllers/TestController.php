<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

class TestController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index() {
        $user = User::query()->where('id', 1)->first();;
        $affected = DB::table('users')
            ->where('id', 1)->get();
        return view('test', ['name' => 'Ivan']);
//        dd($user->getAttributes());
    }
}
