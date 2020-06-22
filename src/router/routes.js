import { render } from '~/libs/fundmylaptop'
/** will work on the folowing later */
import home from '~/pages/home'

const routes = {
  login: async () => {
    await render('/login.html')
    home.display()
  },
  signup: async () => {
    await render('/signup.html')
    home.display()
	const validateEmail = (email) => {
		/*email validation regex. add this*/
	}
	const submit = {
		validate:form => {
			let status = true
			const email = form.querySelector('input[type="email"]')
			if(!validateEmail(email.value)){
				email.classList.add('has-error')
				status = false
			}
			const password = form.getElementById('password')
			if(!password.length > 5){
				password.classList.add('has-error')
				status = false
			}
			const confirmPassword = form.getElementById('confirmPassword')
			if(password.value !== confirmPassword.value){
				status = false
			}
			return status
		}
		send:form => {
			if(!submit.validate(form))
				return fetch('api/users/login',{
					method: 'POST',
					headers: {
						'Accept':'application/json',
						'Content-Type':'application/json'
					},
					body:JSON.stringify({
						email:email.value, 
						password: password.value
					})
						.then(res => res.json())
						.then(data => {
							/* check if data.success is true*/
						})
						.catch(err => /* show err.message */)
				})
		}
	}
	document.querySelector('button[type="submit"]')
		.addEventListener('click', e => {
			e.preventDefault()
			const form = e.target.parentNode.parentNodesubmit(form)
		})
	
  },
  about: async () => {
    await render('/about.html')
    home.display()
  },
  contact: async () => {
    await render('/contact.html')
  },
  invest: async () => {
    await render('/invest.html')
  },
  loan: async () => {
    await render('/loan.html')
  },
  faq: async () => {
    await render('/faq.html')
  },
  privacy: async () => {
    await render('/privacy.html')
  },
  home: async () => {
    await render('/home.html')
    home.display()
  },
  '': async () => {
    await render('/home.html')
    home.display()
  }
}

/* const routes = [
  {
    path: '', component: 'home.html', name: 'home'
  },
  {
    path: '/about', component: 'about.html', name: 'about'
  },
  {
    path: '/contact', component: 'contact.html', name: 'contact'
  },
  {
    path: '/login', component: 'login.html', name: 'login'
  },
  {
    path: '/signup', component: 'signup.html', name: 'signup'
  },
  {
    path: '/signup', component: 'signup.html', name: 'signup'
  },
  {
    path: '/faq', component: 'faq.html', name: 'faq'
  },
  {
    path: '/privacy-policy', component: 'privacy-policy.html', name: 'privacy-policy'
  },
  {
    path: '/tos', component: 'tos.html', name: 'tos'
  } WILL REIMPLEMENT THE ROUTER
] */

export default routes
