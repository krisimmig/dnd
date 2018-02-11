@extends('layouts.app')

@section('content')
    <p>app here:</p>
    <div id="app">
        <h1>Hello App!</h1>
        <p>
            <b-button to="/foo">Go to Foo</b-button>
            <b-button to="/bar">Go to Bar</b-button>
            <b-button to="/user/1">Go user 1</b-button>
            <b-button to="/user/2">Go user 2</b-button>
        </p>
        <router-view></router-view>
    </div>
@endsection


