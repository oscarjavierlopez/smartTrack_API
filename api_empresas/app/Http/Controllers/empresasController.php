<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class empresasController extends Controller
{
    public  function get_empresas()
    {
        $empresas = Empresa::all();
        return response()->json($empresas, 200);
    }

    public function update_by_id(Request $request, $id)
    {
        $empresa = Empresa::find($id);

        if (!$empresa) {
            return response()->json(["Error" => "Empresa no encontrada"], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'string|max:255',
            'cif' => 'string|max:50',
            'direccion' => 'string|max:255',
            'ciudad' => 'string|max:100',
            'provincia' => 'string|max:100',
            'pais' => 'string|max:80',
            'latitud' => 'numeric',
            'longitud' => 'numeric',
            'descripcion' => 'string',
            'sector' => 'string|max:120',
            'prioridad' => 'numeric',
            'presencialidad' => 'in:presencial,híbrido,remoto',
            'horario' => 'string|max:100',
            'activa' => 'numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(["Error" => $validator->errors()], 400);
        }

        if ($request->has('nombre')) {
            $empresa->nombre = $request->nombre;
        }

        if ($request->has('cif')) {
            $empresa->cif = $request->cif;
        }

        if ($request->has('direccion')) {
            $empresa->direccion = $request->direccion;
        }

        if ($request->has('ciudad')) {
            $empresa->ciudad = $request->ciudad;
        }
        if ($request->has('provincia')) {
            $empresa->provincia = $request->provincia;
        }

        if ($request->has('pais')) {
            $empresa->pais = $request->pais;
        }

        if ($request->has('latitud')) {
            $empresa->latitud = $request->latitud;
        }

        if ($request->has('longitud')) {
            $empresa->longitud = $request->longitud;
        }

        if ($request->has('descripcion')) {
            $empresa->descripcion = $request->descripcion;
        }

        if ($request->has('sector')) {
            $empresa->sector = $request->sector;
        }

        if ($request->has('prioridad')) {
            $empresa->prioridad = $request->prioridad;
        }

        if ($request->has('presencialidad')) {
            $empresa->presencialidad = $request->presencialidad;
        }

        if ($request->has('horario')) {
            $empresa->horario = $request->horario;
        }

        if ($request->has('activa')) {
            $empresa->activa = $request->activa;
        }

        $empresa->save();
        return response()->json($empresa, 200);
    }

    public function update_by_cif(Request $request, $cif)
    {
        $empresa = Empresa::where('cif', $cif)->first();

        if (!$empresa) {
            return response()->json(["Error" => "Empresa no encontrada"], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'string|max:255',
            'cif' => 'string|max:50',
            'direccion' => 'string|max:255',
            'ciudad' => 'string|max:100',
            'provincia' => 'string|max:100',
            'pais' => 'string|max:80',
            'latitud' => 'numeric',
            'longitud' => 'numeric',
            'descripcion' => 'string',
            'sector' => 'string|max:120',
            'prioridad' => 'numeric',
            'presencialidad' => 'in:presencial,híbrido,remoto',
            'horario' => 'string|max:100',
            'activa' => 'numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(["Error" => $validator->errors()], 400);
        }

        if ($request->has('nombre')) {
            $empresa->nombre = $request->nombre;
        }

        if ($request->has('cif')) {
            $empresa->cif = $request->cif;
        }

        if ($request->has('direccion')) {
            $empresa->direccion = $request->direccion;
        }

        if ($request->has('ciudad')) {
            $empresa->ciudad = $request->ciudad;
        }
        if ($request->has('provincia')) {
            $empresa->provincia = $request->provincia;
        }

        if ($request->has('pais')) {
            $empresa->pais = $request->pais;
        }

        if ($request->has('latitud')) {
            $empresa->latitud = $request->latitud;
        }

        if ($request->has('longitud')) {
            $empresa->longitud = $request->longitud;
        }

        if ($request->has('descripcion')) {
            $empresa->descripcion = $request->descripcion;
        }

        if ($request->has('sector')) {
            $empresa->sector = $request->sector;
        }

        if ($request->has('prioridad')) {
            $empresa->prioridad = $request->prioridad;
        }

        if ($request->has('presencialidad')) {
            $empresa->presencialidad = $request->presencialidad;
        }

        if ($request->has('horario')) {
            $empresa->horario = $request->horario;
        }

        if ($request->has('activa')) {
            $empresa->activa = $request->activa;
        }

        $empresa->save();
        return response()->json($empresa, 200);
    }

    public function delete_by_id($id)
    {
        $empresa = Empresa::find($id);

        if (!$empresa) {
            return response()->json(["Error" => "Empresa no encontrada"], 404);
        }

        $empresa->delete();
        return response()->noContent();
    }

    public function delete_by_cif($cif)
    {
        $empresa = Empresa::where('cif', $cif)->first();

        if (!$empresa) {
            return response()->json(["Error" => "Empresa no encontrada"], 404);
        }

        $empresa->delete();
        return response()->noContent();
    }
}
