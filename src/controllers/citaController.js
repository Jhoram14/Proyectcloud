const controller = {};

controller.list = (req,res) => {
   req.getConnection((err, conn)=> {
    conn.query('SELECT * FROM cita', (err, citas)=>{
        if(err) {
            res.json(err);
        }
        res.render('citas', {
            data: citas
        });
    });
   });
};

controller.save = (req,res)=>{
    const data = req.body;
   req.getConnection((err, conn)=>{
    conn.query('INSERT INTO cita set ?', [data], (err, cita) =>{
        console.log(cita);
        res.redirect('/');
    });
   });
};

controller.edit = (req,res) => {
    const { idcita } = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM cita WHERE idcita = ?',[idcita], (err, cita)=> {
            res.render('citas_edit', {
                data: cita[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { idcita } = req.params;
    const newcita = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cita set ? WHERE idcita = ?', [newcita, idcita], (err, rows) =>{
            res.redirect('/');
        });
    });
};

controller.delete = (req,res)=>{
    const { idcita } = req.params;
  req.getConnection((err, conn) =>{
    conn.query('DELETE FROM cita WHERE idcita = ?',[idcita], (err, rows) => {
        res.redirect('/');
    });
  });
};

module.exports = controller;