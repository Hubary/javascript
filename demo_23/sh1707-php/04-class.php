<?php
	
	class Dog{
		public $name;
		
		protected $age;
		
		private $test;
		
		public function wang(){
			echo $this->name;
		}
		
		public function setTest($test){
			$this->test = $test;
		}
		public function getTest(){
			return $this->test;
		}
	}
	
	$dog1 = new Dog();
	$dog1->name = 'wangcai';
	
	$dog1->wang();
	
	//Cannot access protected property Dog::$age
	//$dog1->age = 18;
	
	// Cannot access private property Dog::$test i
//	$dog1->test = '111';

	$dog1->setTest('adfadf');
	
	echo $dog1->getTest();
	
	
	
	

?>