import { Router, Request, Response } from 'express';
import Mysql from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {
	const query = `SELECT * FROM heroes`;
	Mysql.query(query, (err: Error, heroes: Object[]) => {
		if (err) {
			res.status(400).json({
				ok: false,
				message: err,
			});
		}
		res.status(200).json({
			ok: true,
			heroes,
		});
	});
});

router.get('/hero/:id', (req: Request, res: Response) => {
	const id = req.params.id;
	const escapedId = Mysql.instance.connection.escape(id);
	const query = `SELECT * FROM heroes WHERE id = ${escapedId}`;
	Mysql.query(query, (err: Error, hero: Object[]) => {
		if (err) {
			res.status(400).json({
				ok: false,
				message: err,
			});
		} else {
			res.status(200).json({
				ok: true,
				hero: hero[0],
			});
		}
	});
});

export default router;
