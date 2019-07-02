import { Request, Response } from 'express';


export class AuthController{
	
	// Fake authentication
	public getToken (req: Request, res: Response) {
		let key = `-----BEGIN PUBLIC KEY-----
		MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFziZlz1VnGhqISYCoKet7ED8pEJ
		U5Y3XoZ7Pep8LCFUlKZ+bZTmgq4gawbpVtUCMJlTIDyQcT2zlzyBDLbBPgsDdEw8
		68F9TioOjbQ+l6dfrXIuaRR3n8+IKEx2NIP0HtwtIjwKNv1nhbmEttYau/fAtxi/
		Xvw2mmAXi+e3kFJPAgMBAAE=
		-----END PUBLIC KEY-----`;

		res.json({key: key});
	}
}