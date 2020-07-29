const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
const yup=require('yup');


app=express();
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());//we only accept json data no form data
app.use(express.static('./public'));


const schema=yup.object().shape(
							     {
							     	slug: yup.string().trim().matches(/[\w\-]/i),
							     	url: yup.string().trim().url().required(),
							     }
	                           );

/* 
app.get('/',
		    (req,res)=>
		              {
		              	res.json(
		              			  {
		              			  	message:'Short URLs for you my man',
		              			  }
		              		    );
		              }
	   );
app.get('/url/:id',
	               (req,res)=>{
	               				//TODO: get a short URL by ID
	                          }
	   );
app.post('/url',(req,res)=>
						   {
						   	//TODO create a short URL
						   }
	    );
	    */
const port=process.env.PORT || 1337;
app.listen(port,()=>
					{
						console.log(`listening at port ${port}`);
					}
	      );
