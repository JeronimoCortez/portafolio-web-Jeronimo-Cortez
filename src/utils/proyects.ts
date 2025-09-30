import type { IProyect } from "../types/IProyect";

export const proyects: IProyect[] = [
    {
        name: "E-ccomerce JEM",
        description: "Aplicación de e-commerce desarrollada en equipo con Java, Spring Boot y MySQL en el backend, y React, Vite y Tailwind CSS en el frontend. Implementa una arquitectura genérica que facilita la reutilización y escalabilidad.",
        technologies: ["Java",
            "Spring Boot",
            "JPA",
            "MySQL",
            "JWT",
            "React",
            "Vite",
            "Tailwind CSS",
            "Formik",
            "Yup"],
        github: ["https://github.com/JeronimoCortez/ECommerceJemFront.git", "https://github.com/JeronimoCortez/ECommerceJemBack.git"],
        imageURL: "/assets/EccomerceJEM.png"
    },
    {
        name: "Todo list app",
        description: "Desarrollé una aplicación de gestión de tareas utilizando el stack MERN (MongoDB, Express, React, Node.js). La aplicación implementa un CRUD completo de tareas, permitiendo crearlas, editarlas, eliminarlas y marcarlas como completadas.",
        technologies: ["MongoDB",
            "Express",
            "React.js",
            "Node.js",
            "zustand",
            "Yup"],
        github: ["https://github.com/JeronimoCortez/TodoList/tree/feature/connectToApi"],
        imageURL: "/assets/todolist.png"
    },
    {
        name: "El buen sabor - FrontEnd",
        description: "Desarrollamos el frontend de El Buen Sabor, un sistema gastronómico con React, Vite y Material UI. Permite gestionar datos mediante formularios validados, selects anidados y carga de imágenes, todo en una interfaz modular y responsiva.",
        technologies: [
            "React.js",
            "Vite",
            "Material UI (MUI)",
            "Formik",
            "Yup",
            "REST API"
        ],
        github: ["https://github.com/JeronimoCortez/ProyectoFinalProg3.git"],
        imageURL: "/assets/BuenSaborFront.jpeg"
    }


]