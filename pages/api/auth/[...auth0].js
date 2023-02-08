import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
	  async login(req, res) {
		      try {
			      await handleLogin(req, res, {
			       returnTo: '/auth0/profile'
			       });
			       } catch (error) {
			       res.status(error.status || 400).end(error.message);
			                        }
			                          }
			                });
