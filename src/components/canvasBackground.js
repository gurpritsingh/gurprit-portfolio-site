import React from 'react';

class CanvasBackground extends React.Component {
    context;
    paint = [];
    size = 22;
    width;
    totalPaints = this.width/550;

    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
    }
    componentDidMount(){
       const canvas = this.canvasRef.current;
       //using window object in componentDidMount else while server rendering window will be undefined
       this.width = window.innerWidth;
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;

       this.context = canvas.getContext('2d');
       console.log(this.context);
       this.init();
    }
    init() {
        for(var i=0; i< this.totalPaints; i++){
            this.addPaint();
        }
         setInterval(this.update.bind(this), 60);

    }

    addPaint() {
        if(this.paint.length <  this.totalPaints){
            this.size = Math.random() * this.size + 20;
            const x = Math.random() * this.width;

            this.paint.push({
              x: x,
              y: -60,
              velocity: (Math.random() * 2),
              size: this.size,
              color:'#' + (Math.random() * 0x313131 + 0xaaaaaa | 0).toString(16)
            })
            
          }
    }

    update() {
        for(var i=0; i < this.paint.length; i++){
            this.paint[i].y = this.paint[i].y + this.paint[i].velocity;
            this.addPaint();
            this.draw( this.paint[i].x, this.paint[i].y, this.paint[i].size, this.paint[i].color );
        }
    }

    draw(x,y,size, color){
        this.context.beginPath();
        this.context.arc(x, y, size, 0 , Math.PI*2, true);
        this.context.fillStyle = color;
        this.context.fill();
        this.context.closePath();
    }

    render(){
        return (
            <canvas ref={this.canvasRef} style={{position: 'absolute', zIndex: -9}}></canvas>
        )
    }
}


export default CanvasBackground;