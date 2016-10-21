defineClass("LoginViewController",{
	viewWillAppear:function(animated){
	self.ORIGviewWillAppear();
		//默认采用MD5
    self.isMD5 = YES;
	},
})