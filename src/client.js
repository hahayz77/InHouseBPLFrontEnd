import * as sapper from '@sapper/app';
import AOS from 'aos';
import 'aos/dist/aos.css';

sapper.start({
	target: document.querySelector('#sapper')
});

AOS.init();