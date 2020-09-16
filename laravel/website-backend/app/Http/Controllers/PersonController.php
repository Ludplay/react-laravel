<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;
use Illuminate\Support\Facades\Log;

class PersonController extends Controller
{
    public function allOrFiltered(Request $request)
    {        
        if(isset($request->email))
        {
            $people = Person::where('email', $request->email)->get();
        }
        else
        {
            $people = Person::all();
        }

        return $people;
    }

    public function perId($id)
    {
        if($id > 0)
        {
            $person = Person::find($id);
            return $person;            
        }
        else
        {
            return response()->json(['error' => 'Bad Request - Invalid Format'], 400, ['X-Header-One' => 'Header Value']);
        }
    }

    public function store(Request $request)
    {
        Log::debug($request);

        $validateTypes = [
            'required' => 'required',
            'required|numeric' => 'required|numeric',
            'required|date' => 'required|date_format:Y-m-d',
        ];

        $this->validate($request, [
            'name' => $validateTypes['required'],
            'email' => 'nullable|email',
            'birth_date' => $validateTypes['required|date'],
            'phone' =>  $validateTypes['required']
        ]);

        $newPerson = new Person();
        $person = $newPerson->create($request->all());

        return response()->json($person, 200);
    }
}
