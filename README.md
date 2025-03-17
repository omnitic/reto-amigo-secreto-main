# Amigo Secreto:

Este proyecto es una aplicación web sencilla para organizar sorteos de "Amigo Secreto". 
Permite a los usuarios ingresar nombres de amigos, realizar un sorteo aleatorio y mostrar el resultado.

![Vista_general](https://github.com/user-attachments/assets/a29719a5-cc39-452a-ac8a-1afac646ad10)


## Características:

* **Agregar nombres:** Los usuarios pueden agregar nombres a una lista a través de un campo de texto.
* **Validación de entrada:**
    * Evita agregar nombres repetidos.
      
      ![Validacion_nombres_repetidos](https://github.com/user-attachments/assets/4a729b9d-035b-49d0-9c16-e662ecb9a1c3)

    * Impide agregar nombres que contengan números.
      
      ![Validacion_numeros](https://github.com/user-attachments/assets/1bf46c2b-d0bc-4d18-a523-1f7a3c85742e)

    * Muestra mensajes de error si no se agrega ningún nombre.
 
      ![Validacion_campo_vacio](https://github.com/user-attachments/assets/eb0d2e23-0284-47a6-b20c-471d986ca962)

* **Visualización de la lista:** Los nombres ingresados se muestran en una lista en la página.
  
  ![Nombres_anadidos](https://github.com/user-attachments/assets/40cc2eb0-16ec-4ee6-a839-a87b3aafee6f)

* **Sorteo aleatorio:** Un botón "Sortear Amigo" selecciona un nombre aleatorio de la lista y lo muestra como
   el "Amigo Secreto".

  ![Sorteo](https://github.com/user-attachments/assets/04252b50-5ebe-468b-aa78-5465b567f8f8)

* **Limpieza de la interfaz:**
    * El campo de texto se borra después de agregar un nombre o mostrar un error.
    * La lista de nombres se vacía antes de mostrar el resultado del sorteo.
    * El resultado del sorteo desaparece al ingresar un nuevo nombre.

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)

## Cómo Funciona

1.  **Agregar Nombres:**
    * El usuario ingresa el nombre de un amigo en el campo de texto.
    * Al hacer clic en el botón "Añadir", el nombre se agrega a la lista que se muestra en la página.
    * El sistema realiza validaciones para asegurar que el nombre no esté repetido y no contenga números.

2.  **Realizar el Sorteo:**
    * Después de ingresar todos los nombres, el usuario hace clic en el botón "Sortear Amigo".
    * El sistema selecciona un nombre aleatorio de la lista.
    * El nombre seleccionado se muestra como el "Amigo Secreto".
    * La lista de nombres se borra para preparar la aplicación para un nuevo sorteo.
    * Si el usuario comienza a ingresar nuevos nombres, el resultado del sorteo anterior desaparece.

## Configuración

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/omnitic/reto-amigo-secreto-main.git
    ```

2.  **Abrir el archivo `index.html`:**

    Simplemente abre el archivo `index.html` en tu navegador web.

## Autor
Jonny Javier Rojas




