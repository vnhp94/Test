#pragma strict

static var speed : int = 5;

function Start () {

}

function Update () {
	if(Input.GetKey(KeyCode.UpArrow)){
		transform.Translate(Vector3(0,1,0) * Time.deltaTime*speed);
	}
	
	if(Input.GetKey(KeyCode.DownArrow)){
		transform.Translate(Vector3(0,-1,0) * Time.deltaTime*speed);
	}
	
	if(Input.GetKey(KeyCode.LeftArrow)){
		transform.localScale.x = -3.0f;
		transform.Translate(Vector3(-1,0,0) * Time.deltaTime*speed);
	}
	
	if(Input.GetKey(KeyCode.RightArrow)){
		transform.localScale.x = 3.0f;
		transform.Translate(Vector3(1,0,0) * Time.deltaTime*speed);
	}
}