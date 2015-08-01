#pragma strict

var animator : Animator;

function Start () {
	animator = GetComponent(Animator);
}

function Update () {
	
}

<<<<<<< HEAD
function OnTriggerEnter2D(other : Collider2D){
	animator.SetBool("jump", true);
	// them 2 s cho dep
	yield WaitForSeconds(2);
	Destroy(gameObject);
}
=======
//function OnTriggerEnter2D(other : Collider2D){
	//animator.SetBool("jump", true);
	//yield WaitForSeconds(1);
	//Destroy(gameObject);
//}
>>>>>>> origin/master

//VUPTPS02028 was here

Hello my name is minh thu
