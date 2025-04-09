<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        $data['titulo']='Principal';
        return view('header', $data).view('navbar').view('carousel').view('principal').view('footer');
    }
    public function somos(): string
    {
        $data['titulo']='Quienes Somos';
        return view('header', $data).view('navbar').view('quienes_somos').view('footer');
    }
    public function productos(): string
    {
        $data['titulo']='Productos';
        return view('header', $data).view('navbar').view('productos').view('footer');
    }
    public function contacto(): string
    {
        $data['titulo']='Contacto';
        return view('header', $data).view('navbar').view('contacto').view('footer');
    }
}
