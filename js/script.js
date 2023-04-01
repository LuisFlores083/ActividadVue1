 const app = new Vue({
    el: '#seccion',

    data: {
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero suscipit dicta atque repellendus omnis, eaque culpa incidunt aspernatur debitis laborum, facere dolor iste sint fugit obcaecati praesentium assumenda vitae quo.',
      width: 0,
      /*ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */
      completados: 0,
      tareas: [
        {
          id: 1,
          tarea:'Bañarme',
          mensaje: 'Incompleto',
          classCompletado: 'incompleto', 
          estado: false,
        },
        {
          id: 2,
          tarea:'almorzar',
          mensaje: 'Incompleto',
          classCompletado: 'incompleto', 
          estado: false,
        },
        {
          id: 3,
          tarea:'Atender mis clases',
          mensaje: 'Incompleto',
          estado: false,
        },
        {
          id: 4,
          tarea:'Hobby',
          mensaje: 'Incompleto',
          classCompletado: 'incompleto', 
          estado: false,
        },
        {
          id: 5,
          tarea:'Correr',
          mensaje: 'Incompleto',
          classCompletado: 'incompleto', 
          estado: false,
        },
      ],
    },

    methods:{
      Subir:function(){
        if(this.width<100)
          this.width += 1;
      },
      Bajar:function(){
        if(this.width>0)
          this.width -= 1;
      },
      /*ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */
      CambiarEstado:function(tarea){
        if(tarea.estado){
          this.completados-=1;
          tarea.classCompletado = 'incompleto';
        }
        else{
          this.completados+=1;
          tarea.classCompletado = 'completado';
        }
        tarea.estado = !tarea.estado;
        tarea.mensaje = tarea.estado ? 'Completado' : 'Incompleto';

      },
    }
 });