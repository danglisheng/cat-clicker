var initialCats=[
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
            names:[{name:"cutepuppy"},{name:"flurry"},{name:"ball"},{name:"miao"}]
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            names:[{name:"tg"}]
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            names:[{name:"candy"}]
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
            names:[{name:"grayball"}]
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            names:[{name:"night spirte"}]
        }
    ];
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.level=ko.computed(function(){

		if(this.clickCount()<10){
			return "new born";
		}
		else if(this.clickCount()<20){
			return "infant";
		}
		else if(this.clickCount()<30) {
			return "child";
		}
		else if(this.clickCount()<40){
			return "teen";
		}
		else if(this.clickCount()<50){
			return "adult";
		}
		else {
			return "big boss";
		}
	},this);
	this.names=data.names;
}
var ViewModel = function(){
	var self=this;
	this.Cats=ko.observableArray([]);
	initialCats.forEach(function(cat){
		self.Cats.push(new Cat(cat));
	});
	

	this.currentCat=ko.observable(self.Cats()[0]);
	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount()+1);
	};
	this.changeCat=function(e){
		
		self.currentCat(e);
	}
	
}
ko.applyBindings(new ViewModel());