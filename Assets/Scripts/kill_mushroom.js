#pragma strict

var animator : Animator;
var target : mushroom;

function Start () {
	animator = transform.parent.GetComponent(Animator);
}

function Update () {
	
}

function OnTriggerEnter2D(other : Collider2D){
	animator.SetBool("kill", true);
	target.speed = 0;
	yield WaitForSeconds(0.5);
	Destroy(transform.root.gameObject);
}