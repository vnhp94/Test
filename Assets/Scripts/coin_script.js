#pragma strict

var animator : Animator;

function Start () {
	animator = GetComponent(Animator);
}

function Update () {
	
}

function OnTriggerEnter2D(other : Collider2D){
	animator.SetBool("jump", true);
	// them 2 s cho dep
	yield WaitForSeconds(2);
	Destroy(gameObject);
}