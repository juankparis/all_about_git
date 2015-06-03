# all_about_git
aprendiendo git y github de 0 a fondo

instalar git (pagina pricipal esta todo los comandos para cada sistema op..)
(configuracion inicial)
---------------------------------------------------
-----------------only git--------------------------
---------------------------------------------------

git --version

git config --global user.name "nombre usuario"

git config --global user.email "correo"

git config --global color.ui true

git config --global --list

git --help
git help +(comando que desea mirar a fondo)
salir con la tecla (q)
-------------------------------------------------
-------------------------------------------------
git init (si no fue inicializado antes)

git remote add origin [http or SSH]
-------------------------------------------------
git status (cual fueron modificados)
-------------------------------------------------
git add -A   (+)
git commit -m "mensaje del commit"
git status (ya me muestra cabios añadidos listos)
------------------------------------------------
-------//-atajo--add--y --commit----//-----------
------------------------------------------------
git commit -am "mesaje del commit"
----------------------------------------------
git log (muestra los commit(s) echos all info)
-------------------------------------------------
git log
git checkout (mas numerodel commit)
git checkout master  (reguersar al ultimo commit)
-------------------------------------------------
(tener cuidado con estos si no sabes utilizarlos bien)

git reset --soft  (+ el #) 
git reset --mix   (+ el #)
git reset --hard  (+ el #)

soft= borra todos los comits arriba de donde se ponga el # de commit (deja cambios en sublime)
mix= borra todos los commits, pero deja camibios sublime,
hard= borra todo hasta lo de sublime(hasta donde se le diga)
----------------nota git reset-------------------
-------------------------------------------------
la unca forma de deshacer reser es teniendo el numero de comit
git reset --hard # devuelve hasta el commit

-------------------------------------------------
---------------------------------------------------
--ramas or branches------------------------------
-------------------------------------------------

git branch experimental=(es el nombre de la rama)
git brach            (listado de todas las ramas)

git checkout experimental (meverse a rama expe..)
git branch               =(ya estamos en expe...)
-------------------------
git log --online --graph --all (ver todas las ramas con su commits)
-------------------------
alias a comandos
--------mirrarbranch-------------
git config --global alias.nom_que_quiera 'log --oneline --graph --all'

git nom_que_quiera   (ejecuta el comando de arriba)

---------------------------------------------------
--------------------fuciones------------------------
----------------------------------------------------

(para fucionar toca estar en la master si desea uno dejar la fusion final en master si desea fucionar dos ramas diferentes a master se puede, situarse en la rama donde va a quedar la fucion)

git branch

git merge nombredelarama

---------formas de fusion----------------------------
1 -fast forward  (trabajan en diferente codigo)
2 -manual merge  (commits que se enciman codigo)

-----------------------------------
1 -fast forward 
pide el commit 
oprime la tecla ctrl + o  (sale INSERT)
escribe el commit
se da ENTER
se ( CTRL + X ) que significa salvar y salir
se da ENTER
-------------------------------------

2 -manual merge

dice que hay un conflicto
(cual quiere dejar y cual quiere borrar)
head=master  y  rama expe...

<<<<<<< HEAD
git nom_que_quiera   (ejecuta el comando de arriba)
=======
git nom_que_quiera   (ejecuta el comando de arriba)
>>>>>>> experimental

------------------------------------------------------
git branch --merge (para saber que ramas se fucionaron)
git branch -a   (mirar todas las ramas)
------------------------------------------------------
borrar ramas
------------------------------------------------------
git branch -D nombredelarama (borrar rama)

---------------------------------------------------
----git raverse----(encimar rama experimental a la master) (no recomendada de repo publicos(nunca))

---------------------------------------------------
--------------------------------------------------
---------------github-----------------------------
---------------------------------------------------
--------------------------------------------------

mover a desktop
y
git clone la direccion del repo en github

(clone viene todo incluido hasta los commits del proyecto a clonar)
--------------------------------------------------
(enlazar servidores pc-git/github)
para proyectos propios

git remote add origin enlace_de_github

git push origin master   (enpujar cambios(commits))
                (master)=a cual rama guarda los cambios 

----------------------------------------------------
---------repos propios con mi equipo---------------- 
-----------actulizar cambios -----------------------
-----------------------------------------(*)-----------

cuando hacen cambios en github 

git fetch descargar los archivos a mi pc de github

git fetch origin
git branch -a 
git merge origin/master

(actualiza archibos de otros colaboradores)

hace los dos comandos a la vez pero toca saber que pasa antes con los comandos arriba
git pull    (esta en la rama que deseacatualizar) 

git pull origin (rama a actualizar)
--------------------------------------------------------
-----------------------forked----------------------------
--------------------------------------------------------

ramas basicas 
//////////////////////
master
origin/master
upstreram/master
//////////////////////

para conectar repos forkeados

hay dos repo principal (que uno no puede hacer cambios)
y el pripio que es un clon donde uno puede hacer cambios
--------------------------------------------------------
se da fork en github (se clona a github)
git clone [http o ssh]      (se clona a git)
--------------------------------------------------------

(cundo uno clona el repo no hay nesecidad de estos dos comandos  siguientes porque ya viene incluido el origin)
git remote add origin [http o ssh] 
git remote -v

---------------------------------------------------------
solamente faltaria el upstream
(upstream es para espejear el repo de propeterio)
---------------------------------------------------------

git remote add upstream [http]  (ojo) 

(se pone el de propietario de repo, No el clon que hay en nuestro github)

git remote -v     (se ve la adicion de upstream)

git fetch origin  (repo fork pricipal)

git fetch upstream (actualiza cambios de repo propetario)

git branch -a  

git merge upstream/master

(se hace la fusion de uptream/master con master de mi repo en git)

git push origin master

actualizar nuestro github (de repo que forkeamos del pricipal) 
-------------------------------------------------------
hacer propuestas a repos principales
-------------------------------------------------------
1 estar aztualizados del repo pricipal siempre
2 gardar los cambios en nuestro repo fork de principal
3 se hace el pull request desde guthub (boton)

(solo sale en los repos que son fork aparecen los cambios  )

4 se da create pull request

5 se hace el commit o description de la prupuesta a cambiar

6 pull request (aceptar)

7 si el propietario del repo quiere acepta su propuesta

-------------------------------------------------------
-------------llave SSH---------------------------------
-------------------------------------------------------

Instalar llave SSH

La llave SSH te va a permitir conectarte con tu cuenta de Github. Una vinculación de tu área local(tu ordenador en este caso) y el área remota(los servidores de Github).

  ssh-keygen
  SALE:
  Generating public/private rsa key pair.
  Enter file in which to save the key (/home/you/.ssh/id_rsa):
  
Le das ENTER y después te pedirá que agregues una contraseña, el cual es recomendable:

Enter passphrase (empty for no passphrase): [Contraseña]
Enter same passphrase again: [Repetir contraseña]
  
El cual te aparecerá un mensaje con la llave ssh

Después, para ver la llave SSH, vas a teclear:

cd .ssh

cat id_rsa.pub

Finalmente, copiarás toda la llave "ssh-rsa" hasta el final y la copiarás en tu perfil de Github -> 

en Account Settings -> SSH Keys

finalmente le darás "Add SSH Key" para pegarlo.

para conectarse por ssh se copea la llave en github en el mismo lugar de hhtp pero se da click en ssh y hay si se copea la direccion ssh

en la terminal parado en el repo se hace:

git init
git remote add origin (direccion ssh)
git pull origin master
pregunta el pass de la llave ssh
enter
--------listo-------

(decargar mas ramas)
git pull origin (nombre_de_la_rama)
git checkout (nombre_de_la_rama)
y se crea la rama

-------------------------------------------------------
-------------------github pages------------------------
-------------------------------------------------------

1- crear un branch llamado gh-pages
2- ir a github parace en la rama gh-pages 
3- dar en editar (esta abajo del nombre del repo)
4- website se pone: 
	http://nombre_del_usurio.github.io/nombre_del_repo
5- se da save

    (y listo este es un deployment con github pages)  
--------------------------------------------------------
--------------------------------------------------------
-----------------deployment-----------------------------
---despliegue basico------------------------------------
--------------------------------------------------------

existen 3 ambientes
--------------
1- development
2- production
3- testing
4- staging
-----------

el 1 y 2 son los mas usados,
lo correcto es 1- 3- 4- y hay si el 2-

(primero se puebe el codigo en las areas de testing y staing y hay si se sube a pruduction (son filtros))

-----------------------------------------------
development -- testing --gitgub -- pruduction
(es el mas usado)
-----------------------------------------------

ftp solamente es solo para binarios y github es para control de verciones

-----------------------------------------------------------
-------------------manual deployment-----------------------
-----------------------------------------------------------
(el recomendado)

1-configurar con su probedor de dominio la app y iniciar un site

(entran con la direccion que le proporciona su probedor de dominios)==(juanwe@b396.webfaction.com)=ejemplo

2- ssh juanwe@b396.webfaction.com

3- pide el pass del servidor y entra al servidor de forma remota

4- ls (buscamos la carpeta)

5- cd (ruta donde estan las aplicaciones en el servidor y entran y buscamos la carpeta creada en el primer paso)

conectar via ssh desde el servidor a github
(mirar arriba como crear llaves ssh)(la llave se crea en elservidor no en dovelopment)(estando conectado al servidor)
y se copia a github la llava publica

6- desde terminal del sevidor forma remota

	borra archivo creado por inicio del sever
	git init
	git remote add origin (pegar url de github de llave ssh)
  git remote -v (verifica si esta la rama)
  git pull origin master

y se crea el deployment

(cada vez que se hace un cambio en development y se suben a github se conecta remotamente al servidor para hacer el pull correspondiente)(si se quiere subir los cambios)
--------------------------------------------------------
-------------gestion de proyectos-----------------------
--------------------------------------------------------
--WIKI--------------------------------------------------

en github buscar una area que se llama:  wiki 

crea tu wiki titulo y contenido 
    imagenes
    videos
    etc

(-----DOCUMENTACION DEL PROYECTO-----)

los vikis  son para esplicar a tu equipo como se va a gestionar tu proyecto y/o a tu colaboradores.    

---------------------------------------------------------
---------------------------------------------------------
----issues------------------------------------------------

gestor de proyectos (adelantos o trabajos asignados)

crear issues
a quien se lo va asignar
labels = tipo de issues
titulo + descripcion 
submit issues

se pueden puner imagenes para una mayor descrpcion

sive para que el gestor de proyectos(persona) vaya haciendo el deployment segun los issues resueltos)(ayuda a asignar una tarea a una persona y asi no se enciman codigo entre desarrolladores

----milestone----

titulo + descripcion
fecha para desarrollar y/o solucionar una parte del proyecto 
create milestone
y los agrega al issues de la persona a sulucionar

(el porcentaje de issues resultos asociados y catidad de issues abiertos y cerrados )(agrupacion de tareas)

para sulucionar el issues 
  1- se desarrolla el tema y se guardan en github 
  2- se copia el url del commit y/o la direccion del commit  
  3- close a comment 

-------------------------------------------------------------
-------------------------------------------------------------
------------------automatic deployment-----------------------
-------------------------------------------------------------

que es shell scripts:

serie de comandos encapsulados dentro en un archivo.sh
crear
ejercicio.sh

#!/bin/sh
git init
touch readme.txt
git add -A
git commit -m "primer commit"
git status
echo "se ejecutaron todos los comandos"

como se ejecuta el archivo: sh ejercicio.sh

se ejecutan los comandos en orden desendente(ya sabiendo lo que es son los achivos shell scripts vamos con)  
-------------------------------------------------------------
--------git hooks--------------------------------------------

los git hooks son shell scripts sin que son ejecutados bajo sierta condicion






