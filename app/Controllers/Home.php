<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        return view('header').view('navbar').view('footer');
    }
    public function somos(): string
    {
        return view('header').view('navbar').view('quienes_somos').view('footer');
    }
}
