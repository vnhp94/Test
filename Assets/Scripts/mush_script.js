#pragma strict

var animator : Animator;

function Start () {
	animator = transform.parent.GetComponent(Animator);
}

function Update () {
	
}

function OnTriggerEnter2D(other : Collider2D){
	animator.SetBool("up", true);
	yield WaitForSeconds(0.5);
	//Destroy(transform.parent.gameObject);
}