const Express = require('express');
const app = Express();
const port = 8080;
const connection = require('./database/database.js');
const Autor = require('./database/Autor.js');
const Obra = require('./database/Obra.js');

const Autores = [
	{	
		id:0,
		nome: "Pagu",
		datNasc: "DD/MM/AAAA",
		datMort: "DD/MM/AAAA",
		bio: "Essa é uma biografia",
		obras: "Obras estarão linkadas no banco",
		foto: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Pagu.jpg"
	},
	{	
		id:1,
		nome: "Tarsila do Amaral",
		datNasc: "01/09/1886",
		datMort: "17/01/1973",
		bio: "Tarsila do Amaral foi uma pintora e desenhista brasileira, uma das artistas centrais da pintura brasileira e da primeira fase do movimento modernista brasileiro, ao lado de Anita Malfatti. Seu quadro Abaporu, de 1928, inaugurou o movimento antropofágico nas artes plásticas.",
		obras: "Obras estarão linkadas no banco",
		foto: "https://static.dw.com/image/19447239_605.jpg"
	},
	{	
		id:2,
		nome: "Anita Malfatti",
		datNasc: "01/09/1886",
		datMort: "17/01/1973",
		bio: "Anita Malfatti",
		obras: "Obras estarão linkadas no banco",
		foto: "https://static.dw.com/image/19447239_605.jpg"
	}
];

const Obras = [
	{name: 'O Mamoeiro', id: 0, autId: 1, foto: 'https://d3swacfcujrr1g.cloudfront.net/img/uploads/2000/01/007019001019.jpg'},
	{name: 'Urutu', id: 1, autId: 1, foto: 'https://assets.passeiweb.com/wp-content/uploadedfiles/uploads/psweb/galeria/tarsila_do_amaral/1928_o_ovo_urutu.jpg'},
	{name: 'Os Operários', autId: 1, id: 2, foto: 'https://upload.wikimedia.org/wikipedia/pt/1/16/Operarios.jpg'},
	{name: 'A Onda', id: 3, autId:2, foto: 'https://i0.wp.com/virusdaarte.net/wp-content/uploads/2015/04/A-ONDA.jpg'}
];

app.set('view engine', 'ejs');
app.use(Express.static('public'));

connection
	.authenticate()

	.then(() => {
		console.log("Successful connection.");
	})

	.catch((e)=>{
		console.log(e);
	});

app.get('/', (req,res)=>{
	res.render('index.ejs');
});

app.get('/historia', (req, res)=>{
	res.send('Rota sobre a história do modernismo');
});

app.get('/obras', (req,res)=>{
	res.render('obras', {obras: Obras, autores: Autores});
});

app.get('/autores', (req,res)=>{
	res.render('autores', {autores: Autores});
});

app.get('/obras/:id', (req,res)=>{
	let id = req.params.id;
	if(!isNaN(id)){
		if(id==undefined){
			res.redirect('/autores');
		}else{
			res.render('obra', {id: id, nome: (Obras[id].name)});
		}
	}
});

app.get('/autores/:id', (req,res)=>{
	let id = req.params.id;
	if(!isNaN(id)){
		if(id==undefined){
			res.redirect('/autores');
		}else{
			res.render('autor', {autor: Autores[id]});
		}
	}
});

app.listen(port, ()=>console.log(`Server runing in ${port} port`));