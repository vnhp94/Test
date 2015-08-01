#pragma strict

static var speed : int =2;

function Start () {

}

function Update () {
	transform.Translate(Vector2(-1,0) * Time.deltaTime*speed);
}