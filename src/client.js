import * as sapper from '@sapper/app';
import AOS from 'aos';


sapper.start({
	target: document.querySelector('#sapper')
});

AOS.init();