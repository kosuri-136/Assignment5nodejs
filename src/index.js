var http = require("http");

const port = 8081;

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {

    res.setHeader('Content-Type', 'text/html');

    if(req.url==="/welcome"){
        res.writeHead(200)
        res.end("WELOCOME TO DOMINOS");
    }
    else if(req.url==="/contact"){

        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200)
          
            res.end(  JSON.stringify({  
                phone: '18602100000', 
                email: 'guestcaredominos@jublfood.com' 
            })
            );
           
    }
    else{
        res.writeHead(404);
        res.end();

    }
  
}

httpServer.listen(port , ()=>{
    console.log("server is started");
})

module.exports = httpServer;