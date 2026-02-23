Comandos Básicos de Git

1. Inicializar y Configurar

git init: Crea un nuevo repositorio local en la carpeta donde estés parado.

git status: El comando más importante; te dice en qué estado están tus archivos 

2. Agregar y Commitear

git add <archivo>: Prepara un archivo específico para el commit.

git add .: Prepara todos los archivos que tengan cambios.

git commit -m "description": Guarda los cambios en el historial con un mensaje descriptivo.

3. Ramas (Branches)

git branch <nombre-rama>: Crea una nueva rama.

git checkout <nombre-rama>: Te mueve a la rama que creaste.

Tip: Puedes usar git checkout -b <nombre-rama> para crearla y moverte a ella en un solo paso.

git branch: Lista todas tus ramas y te indica en cuál estás.

4. Unir Ramas (Merge)

Regresa a la principal: git checkout main

Trae los cambios de la otra rama: git merge <nombre-rama>