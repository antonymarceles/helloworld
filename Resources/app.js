// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
var myapp = {}; 

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
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

//
// Create Objects on Window 1
//
// **************************************************************  Title
myapp.window1elements = function (){
var labeltitle1 = Titanium.UI.createLabel({
	color:'#999', text:'Login Page', font:{fontSize:30,fontFamily:'Helvetica Neue',fontWeight:'bold'}, textAlign:'center', width:'auto', top: 10, left: 160,
});
win1.add(labeltitle1);

// **************************************************************  Edit Field 1
top_distance = 100; 
var label10 = Titanium.UI.createLabel({
	color:'#999', text:'Full Name', font:{fontSize:20,fontFamily:'Helvetica Neue'}, textAlign:'center', width:'auto', top: top_distance, left: 10,
});

win1.add(label10);

var tf10 = Titanium.UI.createTextField({
    color:'#336699', top: top_distance - 20, left:200, width:250, borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win1.add(tf10);

// **************************************************************  Edit Field 2
top_distance = top_distance + 80; 
var label11 = Titanium.UI.createLabel({
	color:'#999', text:'e-Mail', font:{fontSize:20,fontFamily:'Helvetica Neue'}, textAlign:'center', width:'auto', top: top_distance, left: 10,
});

win1.add(label11);

var tf11 = Titanium.UI.createTextField({
    color:'#336699', top:top_distance - 20, left:200, width:250, borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win1.add(tf11);

// **************************************************************  Edit Field 3
top_distance = top_distance + 80; 
var label12 = Titanium.UI.createLabel({
	color:'#999', text:'Phone No.', font:{fontSize:20,fontFamily:'Helvetica Neue'}, textAlign:'center', width:'auto', top: top_distance, left: 10,
});

win1.add(label12);

var tf12 = Titanium.UI.createTextField({
    color:'#336699', top:top_distance - 20, left:200, width:250, borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win1.add(tf12);

// **************************************************************  Picker 
top_distance = top_distance + 80; 
var label13 = Titanium.UI.createLabel({
	color:'#999', text:'State', font:{fontSize:20,fontFamily:'Helvetica Neue'}, textAlign:'center', width:'auto', top: top_distance, left: 10,
});
win1.add(label13);

var demo_picker = Titanium.UI.createPicker({
	left:200, top:top_distance - 20, width:250
});
var picker_data = [];
picker_data[0]=Titanium.UI.createPickerRow({title:'Bananas'});
picker_data[1]=Titanium.UI.createPickerRow({title:'Strawberries'});
picker_data[2]=Titanium.UI.createPickerRow({title:'Mangos'});
picker_data[3]=Titanium.UI.createPickerRow({title:'Grapes'});
demo_picker.add(picker_data);

win1.add(demo_picker);

// **************************************************************  Edit Field 5
top_distance = top_distance + 80; 
var label14 = Titanium.UI.createLabel({
	color:'#999', text:'Zip Code', font:{fontSize:20,fontFamily:'Helvetica Neue'}, textAlign:'center', width:'auto', top: top_distance, left: 10,
});

win1.add(label14);

var tf14 = Titanium.UI.createTextField({
    color:'#336699', top:top_distance - 20, left:200, width:250, borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win1.add(tf14);

// **************************************************************  Button
top_distance = top_distance + 80; 
var button1 = Titanium.UI.createButton({
   title: 'Submit Info', top:top_distance, left: 150, width: 200
});

win1.add(button1);
}

myapp.window1elements()

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  

// open tab group
tabGroup.open();
