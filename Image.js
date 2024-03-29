/**
 * @author Aymen ABDALLAH <aymen.abdallah@gmail.com>
 * @docauthor Aymen ABDALLAH
 */
Ext.define('Ext.ux.Image', {

	config: {
		orgWidth: 400,			
		orgHeight: 400,
		reflHeight: 0,
		reflOpacity: 0,
		itemIndex: 0,		
		image: null,
		reflection: null,
		container: null,					
		alt: '',
		title: '',
		imageSrc: '',
		imageOK: false						
	},

	id: '',
	
	constructor: function(config){
		this.initConfig(config);
		this.imageOK = true;
		this.image = new Ext.Element(document.createElement('img'));
		this.id = this.image.id = this.generateId();		
		this.image.set({
			id: this.id,
			src: this.imageSrc,
			alt: this.alt,
			title: this.title
		});
		this.image.setStyle({position : 'absolute'});	// This seems to reset image width to 0 on webkit!			
	},

	setUpReflection: function(){
		if (this.reflHeight > 0)
		{	
			this.reflection = Ext.create('Ext.ux.Reflection', {
				imageHeight: this.orgHeight,
				imageWidth: this.orgWidth,
				image: this.image,
				parent: this.container,
				reflHeight: this.reflHeight,
				reflOpacity: this.reflOpacity
			});					
		}
	},

	generateId: function(){
		return Ext.data.UuidGenerator.create().generate();	
	},
	
	getImage: function(){
		return this.image;
	}

});
