export function Prueba({Nombre, Apellido}) {
    const products = [
        { title: 'Col', id: 1, descripcion: 'Nose que es una col profe' },
        { title: 'Ajo', id: 2, descripcion: 'Tiene muchos dientes *Sonido de platillos*' },
        { title: 'Manzana', id: 3, descripcion: 'La piel puede ser de color verde, amarilla o rojiza, y la pulpa, harinosa o crujiente, presenta un sabor que varía entre el agrio y el dulce.' },
        { title: 'Banana', id: 4, descripcion: '' },
        { title: 'Naranja', id: 5, descripcion: '' },
        { title: 'Mandarina', id: 6, descripcion: '' },
        { title: 'Kiwi', id: 7, descripcion: '' },
        { title: 'Papaya', id: 8, descripcion: '' },
        { title: 'Pepino', id: 9, descripcion: '' },
      ];

    return (
        <>
        <h1>
            Prueba {Nombre} {Apellido}
        </h1>

        { 
            products.map((producto, i) => {
                return(
                <div class="grilla">
                    <div class="fondo-caja alinear-caja">
                        <h2>{producto.title}</h2>
                        <p>{producto.id}</p>
                        <p>{producto.descripcion}</p>
                    </div>
                </div>
                )
            })
        }
        </>
    ) 
}
