function hasClass(el, cl){
	return (' ' + el.className + ' ').indexOf(' ' + cl + ' ') > -1;
}

export const formFun = {
  methods: {
    showForm(e){
      if(e === true){
        document.body.classList.add('show-form')
      } else {
        document.body.classList.remove('show-form')
      }
    },
    handleScroll: function(evt, el) {
      let elem = el;
    	if( !hasClass(elem, 'anim') ){
    		let elPos = el.offsetTop + el.offsetHeight + 100 - window.outerHeight;
        console.log(elPos);
	    	if(window.scrollY >= elPos){
	    		el.classList.add('anim')
	    	}
    	}
    }
  }
}