// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var myapp = {}; 

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// create base UI tab and root window
// **************************************************************  Window 1
var win1 = Titanium.UI.createWindow({  
    title:'Login', backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png', title:'Login', window:win1
});

// **************************************************************  Window 2
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2', backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png', title:'Tab 2', window:win2
});

// **************************************************************  Window 3
var win3 = Titanium.UI.createWindow({  
    title:'Tab 3', backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png', title:'Tab 3', window:win3
});

// **************************************************************  Window 2
var win4 = Titanium.UI.createWindow({  
    title:'Tab 4', backgroundColor:'#fff'
});
var tab4 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png', title:'Tab 4', window:win4
});


// Create Objects on Window 1
// **************************************************************  Login Window
myapp.window1elements = function (){
var labeltitle1 = Titanium.UI.createLabel({
	color:'#999', text:'Login Page', font:{fontSize:30,fontFamily:'Helvetica Neue',fontWeight:'bold'}, textAlign:'center', width:'auto', top: 10, left: 160, zindex:100
});
win1.add(labeltitle1);

var loginform = require('login');
win1.add(loginform.login_form());
}

myapp.window1elements()

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  
tabGroup.addTab(tab4);  

// open tab group
tabGroup.open();
