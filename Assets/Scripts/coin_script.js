#pragma strict

var animator : Animator;

function Start () {
	animator = GetComponent(Animator);
}

function Update () {
	
}

function OnTriggerEnter2D(other : Collider2D){
	animator.SetBool("jump", true);
	yield WaitForSeconds(1);
	Destroy(gameObject);
}