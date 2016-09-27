# all_about_git (sistema de control de versiones)
-----------------aprendiendo git y github de 0 a fondo----------------------

instalar git (pagina pricipal esta todo los comandos para cada sistema op..)
(configuracion inicial)
---------------------------------------------------
-----------------  only git  ----------------------
----------------  git config  ---------------------

git --version

git config --global user.name "nombre usuario"

git config --global user.email "correo"

git config --global color.ui true

git config --global --list

git --help
git help +(comando que desea mirar a fondo)
salir con la tecla (q)
-------------------------------------------------
///////////////   git basico   //////////////////
-------------------------------------------------

git init (si no fue inicializado antes)

git clone la direccion del repo en github

git remote add origin [http or SSH]
-------------------------------------------------
git status (cual fueron modificados)
-------------------------------------------------
git add -A  
            git add --all
            git add nombrearchivo  =(si solo se quiere adisionar uno)
            git add "*.txt"        =(si solo se quiere adisionar todos de una misma extencion)
            git add capt/          =(all files in the directori )

git --rename-section viejonombre nuevonombre

git commit -m "mensaje del commit"

git status (ya me muestra cabios añadidos listos)

------------------------------------------------
-------//-atajo--add--y --commit----//-----------
------------------------------------------------
git commit -am "mesaje del commit"

---------------------------------------------
///////   git commit -m --amend  ////////////
---------------------------------------------

  //se sustituye el ultimo commit por el que se va a hacer
  git commit -m --amend
  git commit -am --amend
  git commit -am "mesaje del commit" --amend

  (sirve para cuando nos falto agregar algo o modificar algo que hace parte del commit que ya haviamos echo para no crear otro commit se hace esto)

----------------------------------------------
///////  eliminar el ultimo commit  //////////
----------------------------------------------

git reset -- hard HEAD~1

----------------------------------------------
/////  eliminar el segimiento de git  ////////
----------------------------------------------

cd carpeta/
rm -rf .git

----------------------------------------------
/// eliminar el segimiento de un archivo /////
----------------------------------------------

git checkout -- nomArchivo.py

cuando se crea un archivo le dan segimiento con git pero se dan de cuenta que no se nesecita y no quieren que quede como se creo y se despues se elimino en el historial de git o commits

----------------------------------------------
//////////////   git stash  //////////////////
----------------------------------------------
guardado provisional > evitar que los cambios se pierdan o se guarden con un commit que no tiene nada que ver

git status
git stash
git status
git list
git stash apply


git status     (hay cambios por guardar)

git stash      (no aparecen los cambios echos pero si estan en un guardado provicional)
               sale(guardado de cambios en git stash)

git status     (vemos que no aparesen cambios pero si estan guardados provisionalmente)

ejecutas las otras tareas pendientes y cuando ya quieras pasar a segir con lo anterior

git list       (salen los guardados provisionales)

git stash apply   (aplica los cambios guardados otravez a git)


si se está trabajando sobre un par de archivos e incluso uno de ellos está ya añadido al área de preparación para un futuro almacenamiento de sus cambios en el repositorio. los guarda con git stash provisionalmente sin tener que hacer un commit y continuar con otra tarea cuando uno desee vuelve a traer el avance o cambios guardados sin generar un commit
 
----------------------------------------------
//////////////   git tag   ///////////////////
----------------------------------------------
Existen 2 formas de crear tags. 
  - Annotated Tags 
  - Lightweight Tags

  git tag [versión]  = git tag v1.0.0

  git tag -a [versión] -m "[mensaje]"
  
  git tag             (Muestra todos los tags creados.)
  git tag -l "[versión]" (Busca la versión que le solicites.)
  git show            (Muestra los detalles del tag. commits creados hasta el git tag.)
  git checkout v1.0.0 (para moverse entre etiquetas. git checkout master = regresar final)

  git tag -a [versión] [commit_id]

  git tag ancestral =(sirve para poner tags a commits ya echos git tag -a v0.9 8e00b40)
  guardar y salir

  --------------
  subir a github
  --------------

  git push origin [tagname]=  git push origin v1.0.0

  subir varios tags a la vez

  git push origin --tags

----------------------------------------------
/////////////    git log    //////////////////
----------------------------------------------

git log (muestra los commit(s) echos all info)

git log --oneline         (quita las fechas y queda solo en commit)
git log --oneline --graph (pone estrellas a los commits quita fechas)
git log --decorate        (muestra en que punto y que rama estamos)
git log --graph --oneline --decorate (muestra en forma de graficas las ramas y otras)
git log --stat            (muestra el numero de lineas que se quitaron y se agregaron y achivos)
git log -p                (muestra que se quito y que se agrego en codigo)
git log -3                (Por cantidad. Limita el número de commits. (ultimos))
git shortlog    (muestra en que branch, que desarrollador y cuantos commits a hecho cada persona)

git log --pretty=format:"string" (Nos permite mostrar mensajes personalizados de los commits.)
ejemplo =     git log --pretty=format:"%cn hizo un commit %h el día %cd"

git log --author="juankparis" (todos los commits echos por este author)
git log --after="today"       (todos antes de hoy se puede por fecha etc)
git log --index.html          (por archivo, commits y cuando fue creado)
git log --grep="nombre_commit" -i (filtra por nombre o palabra encontrada en los commits) 
                                -i =es para no tener en cuenta las mayusculas o minusculas
git log -S"mensaje"           (por contenido)

-------------------------
    alias a comandos
-------------------------

git config --global alias.nom_que_quiera 'log --oneline --graph --all'

git nom_que_quiera   (ejecuta el comando de arriba)

              -------------------------------------
              //////// los mejores  logs  /////////
              -------------------------------------

git log --oneline --graph --all
    git config --global alias.nicelog "log --oneline --graph --all"

    git nicelog (ya se puede ejecutar)


git log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
    
    git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
    
    git superlog

--------------------------------------------------------
/////////////////   git ignore   ///////////////////////
--------------------------------------------------------

crear un archivo con nombre  .gitignore

editar y poner los nombres de los achivos que no deseas subir a github

archivoejemplo.txt     (achivos)
node_modules           (toda una carpeta)
build/img/img.jpg      (una imagen o sin img.jpg toda la carpeta de img)
*.txt                  (todos los archivos que terminen en dicha extencion)     

-------------------------------------------------
///////////////    git checkout   ///////////////
-------------------------------------------------

git checkout (mas numerodel commit)
git checkout master  (reguersar al ultimo commit)
git checkout 01  (pimercommit)

-------------------------------------------------
//////////////    git diff    ///////////////////
-------------------------------------------------

git diff HEAD
git diff --staged =(ultimos dos commits )
git diff 01..02  (diferencia entre uno y el otro commit)(pimercommit..segundocommit)
git diff v1.0.0..v1.1.0 (tambien tags)

-------------------------------------------------
//////////////    git reset    //////////////////
-------------------------------------------------
(tener cuidado con estos si no sabes utilizarlos bien)

git reset --hard  (+ el #)
git reset --mixed   (+ el #)
git reset --soft  (+ el #) 

hard= borra todo hasta lo de sublime(hasta donde se le diga)
mixed= borra todos los commits, pero deja camibios sublime y no guarda cambios en git (git add) (sirve cuando se an echo varios commits pero se dan de cuenta que se puede hacer en un solo commit ),
soft= borra todos los comits arriba de donde se ponga el # de commit (deja cambios en sublime pero si quedan agregados en git (git add -A) es paresido al git reset mixed pero este deja listos y/o agregados los archivos para hacer el commit)

----------------nota git reset-------------------
-------------------------------------------------
la unca forma de deshacer reser es teniendo el numero de comit
git reset --hard # devuelve hasta el commit

cundo se ejecute git reset comando es bueno guardar los ids de los commits que se van a borrar uno antes con git log y se guerdan en un archivo aparte 

git rm archivo     (remove = lo borra totalmente)
git --remove-section nombre
git rm "*.txt"   (todos .estencion)

-------------------------------------------------
//////////  ramas or branches    ////////////////
-------------------------------------------------

git branch experimental=(es el nombre de la rama)
git brach            (listado de todas las ramas)

git checkout experimental (meverse a rama expe..)
git branch               =(ya estamos en expe...)
--------------------------------------------------
git log --online --graph --all (ver todas las ramas con su commits)
---------------------------------------------------
Eliminar Rama Local

  git branch -D nombre_rama  =(es para eliminar una rama)

Eliminar Rama Remota
  git push origin --delete nombre_rama

--------------------------------------------------
//////////////   fuciones   //////////////////////
--------------------------------------------------

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
(cual quiere dejar y cual quiere borrar)(se borra todo los otro y solo se deja (git nom_que_quiera) de los dos codigos )

<<<<<<< HEAD
git nom_que_quiera   (ejecuta el comando de arriba)
=======
git nom_que_quiera   (ejecuta el comando de arriba)
>>>>>>> experimental

despues de borrar y elejir el codigo que queda si damos git status vemos que esta modificado
git add -A
git commit -m "fucion ejecutada"

------------------------------------------------------
git branch --merge (para saber que ramas se fucionaron)
git branch -a   (mirar todas las ramas)

------------------------------------------------------
//////////////   borrar ramas   //////////////////////
------------------------------------------------------
git branch -D nombredelarama (borrar rama)

------------------------------------------------------
////////////////////   rebase   //////////////////////
------------------------------------------------------

git rabase master   (desde la rama que se ba a empujar a master (experimental))
git checkout master
git merge experimental


rebase :ejemplo
  si se tiene dos ramas una master y otra experimental y no se quiere fucionar si no dejar todos los commits echos en la rama experimental en la rama principal se hace con rebase  
  git raverse (encimar rama experimental a la master se situa en la rama que desea empujar a master) (no recomendada de repo publicos(nunca))

  desde experimental

git rebase master

  quedan adelante de los utimos commits de master pero master sige en el utimo commit echo en el punto de la rama master

git checkout master

git merge experimental

listo queda fucionada y el master queda en el ultimo commit con el rebase traido de la rama experimental

              --------------------------------------------------
              --------------------------------------------------
              ////////////////    github    ////////////////////
              --------------------------------------------------
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

(decargar mas ramas)
git pull origin (nombre_de_la_rama)
git checkout (nombre_de_la_rama)
y se crea la rama

----------------------------------------------------
---------repos propios con mi equipo---------------- 
---------------actulizar cambios -------------------

----------------------------------------------------
////////////   Git Fetch + Git Merge    ////////////
///////////           git pull          ////////////
----------------------------------------------------

cuando hacen cambios en github 

git fetch descargar los archivos a mi pc de github

git remote add origin [http or SSH]   (si es la primera vez)
git fetch origin 
git branch -a                         (se ve las ramas escondidas)
git merge origin/master

(actualiza archibos de otros colaboradores)

hace los dos comandos a la vez pero toca saber que pasa antes con los comandos arriba
git pull    (esta en la rama que deseacatualizar) 

git pull origin (rama a actualizar)

--------------------------------------------------------
///////////   agregar colaboradores   //////////////////
--------------------------------------------------------

en github > entrar al repositorio > Settings > Collaborators > pass 

en: Search by username, full name or email address
y add collaborator
listo    

--------------------------------------------------------
/////////////////   forked   ///////////////////////////
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
git remote add origin [http o ssh]    (propio) 
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

Crear ó entrar a la carpeta del proyecto
  $ git remote add origin [HTTPS ó SSH del proyecto forked]
  $ git remote add upstream [HTTPS ó SSH del proyecto principal]
  $ git fetch upstream
  $ git merge origin/upstream
  $ git fetch origin
  $ git merge origin/master
  Hacer cambios en local
  $ git fetch upstream
  $ git merge origin/upstream
  $ git push origin master

-------------------------------------------------------
////////  hacer propuestas a repos principales   //////
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
///////////  aceptar propuestas de fork   /////////////
-------------------------------------------------------
aceptar propuestas de personas ajenas al repo

en la barra de navegacion de code setings etc

  sale: pull requests (1)  =num de pull requests
  salen las propuestas

entra en cada una

  al final se puede commentar y se envia
  y se oprime el boton que se avilita = merge pull requests
  y comfirm merge

-------------------------------------------------------
////////////////////   llave SSH   ////////////////////
-------------------------------------------------------

Instalar llave SSH

La llave SSH te va a permitir conectarte con tu cuenta de Github. Una vinculación de tu área local(tu ordenador en este caso) y el área remota(los servidores de Github).
en la raiz

  ssh-keygen
  o
  ssh-keygen -t rsa -b 4096 -C "[email de GitHub]"

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
git pull origin
git pull origin master    (con todas las ramas)
pregunta el pass de la llave ssh
enter
--------listo-------

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
//////////////   gestion de proyectos    ///////////////
--------------------------------------------------------
--WIKI--------------------------------------------------

en github buscar una area que se llama:  wiki 

crea tu wiki titulo y contenido 
    imagenes
    videos
    etc

(-----DOCUMENTACION DEL PROYECTO-----)

los vikis  son para esplicar a tu equipo como se va a gestionar tu proyecto y/o a tu colaboradores.

la mejor forma es subir la imgs a http://imgur.com/ (le dan una url) 
y se copea la url de la img en la pestaña de img de wiki > save page
listo

-----pulse----
que objetivos se estan cumpliendo y avances
-----graphs---
 todo lo que susedio a lo largo de proy

-----------------------------------------------------
///////////////////  milestone   ////////////////////
--modulos--------------------------------------------

titulo + descripcion
fecha para desarrollar y/o solucionar una parte del proyecto 
create milestone
se agrega el label      (etiquetas de caracteristica)
y los agrega al issues de la persona a sulucionar

(el porcentaje de issues resultos asociados y catidad de issues abiertos y cerrados )(agrupacion de tareas)

------------------------------------------------------
////////////////  issues    //////////////////////////
------------------------------------------------------

gestor de proyectos (adelantos o trabajos asignados)

crear issues
titulo + descripcion 
labels = tipo de issues
millestone (asociar)
a quien se lo va asignar
submit issues

se pueden poner imagenes para una mayor descrpcion

sive para que el gestor de proyectos(persona) vaya haciendo el deployment segun los issues resueltos)(ayuda a asignar una tarea a una persona y asi no se enciman codigo entre desarrolladores

para sulucionar el issues 
  1- se desarrolla el tema y se guardan en github 
  2- se copia el url del commit y/o la direccion del commit  (commit_id) 
  3- close a comment

------------------------------------------------------
////////////////  organizaciones    //////////////////
---------------------en github------------------------

grupo de personas que se dedican a formar proyectos  o (empresas)

menu de perfili > settings > organizations > new oranization > name_organization + billing email > create organization (boton) > agregar usuarios que van a colaborar > finish

create_new_repository > name etc..> create

settings > collaborators & teams > agregar collaborators. 
                            (con teams es lo mismo ejem (frontend) y agregar los collaborators)

              agregar la url del proyecto

readme:
  name_proyect
  descripcion_proyecto
  instalacion
  requisitos
  vercion
  encargados
  uso
  documentacion
  roadmap
  licence
            (travis) https://travis-ci.org/


--------------------------------------------------------
--------------------------------------------------------
/////////////////   deployment   ///////////////////////
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

------------------------------------------------------
////////////////   manual deployment   ///////////////
------------------------------------------------------

(el recomendado)

1-configurar con su probedor de dominio la app y iniciar un site

(entran con la direccion que le proporciona su probedor de dominios)==(juan@web396.webfaction.com)=ejemplo

2- ssh juanwe@b396.webfaction.com

3- pide el pass del servidor y entra al servidor de forma remota

4- ls (buscamos la carpeta)

5- cd (ruta donde estan las aplicaciones en el servidor y entran y buscamos la carpeta creada en el primer paso)   (webapps o pulbic  segun el server)

conectar via ssh desde el servidor a github
(mirar arriba como crear llaves ssh)(la llave se crea en elservidor no en dovelopment)(estando conectado al servidor)
y se copia a github la llave publica a github

6- desde terminal del sevidor forma remota

	borra archivo creado por inicio del sever
	git init
	git remote add origin (pegar url de github de llave ssh)
  git remote -v (verifica si esta la rama)
  git pull origin master

y se crea el deployment

(cada vez que se hace un cambio en development y se suben a github se conecta remotamente al servidor para hacer el pull correspondiente)(si se quiere subir los cambios)

------------------------------------------------------
/////////////   shell scripts    /////////////////////
/////////////     git hooks      /////////////////////
------------------------------------------------------

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

------------------------------------------------------
///////////////   git hooks   ////////////////////////
------------------------------------------------------


LOS HOOKS SON ARCHIVOS SHELL SCRIPTS

los git hooks son shell scripts sin que son ejecutados bajo sierta condicion
(existen 17 hooks en git hub)documentacion de cada hooks en github


mkdir probandohhoks
git init
cd .git (es una carpeta escondida)
cd hooks
ls (salen todos los hooks .sample)
touch post-commit
vim post-commit    (vim editor de texto en la terminal)
o (para poder escribir)

  #!/bin/sh
  git push origin master

guardar

cat post-commit (se puede revisar)
cmod +x post-commit    (permisos)
cd ..              (salir)
cd ..

listo el shel script (git hooks) y con comandos para git hub
si se hace un cambio y el commit en git se atomatiza el push

git remote add origin (llave ssh)
git remote -v
git add -A
git commit -m "se hace el commit y se automatizan el push"
listo

------------------------------------------------------
/////////////   automatic deployment   ///////////////
------------------------------------------------------

(consola = remoto server)

1-configurar con su probedor de dominio la app y iniciar un site

(entran con la direccion que le proporciona su probedor de dominios)==(juanwe@b396.webfaction.com)=ejemplo

2- ssh juanwe@b396.webfaction.com

3- pide el pass del servidor y entra al servidor de forma remota

4- ls (buscamos la carpeta)

5- cd (ruta donde estan las aplicaciones en el servidor y entran y buscamos la carpeta creada en el primer paso)

    (IMPORTANTE la llave ssh no sele pone pass para poder hacer el atomatic deployment)

conectar via ssh desde el servidor a github
(mirar arriba como crear llaves ssh)(la llave se crea en elservidor no en dovelopment)(estando conectado al servidor)
y se copia a github la llave publica

ya esta connectado el server via ssh con gihub

6- desde terminal del sevidor forma remota

    borra archivo creado por inicio del sever
    git init
    git remote -v (verifica si esta la rama)
    git pull origin master

(consola = pc)

tener sincronizado git y github
crear
    touch .gitignore  (el . = archivo escondido)
    vim .gitignore    (vim = editar archivos)
    tecla o
    escribimos   
        *.sh
    guardamos   
    (que archivos devemos ignorar para que no se suban al repo)

cd .git 
cd hooks
touch post-commit
vim post-commit
    #!/bin/sh
    git push origin master
    ssh direccionremota_server 'bash -s' < deploy.sh
guardar

(bash -s = abrir una terminal tempotar con el mismo hook)
(< deploy.sh = para que ejecute el deplo.sh )

cat post-commit
chmod +x post-commit      =(autorizar)
cd ..
cd ..

crear
    touch deploy.sh

(~ = situarse en la raiz)
(webapps = carpeta del server donde se ponen la apps (es diferente el nombre segun su probedor de hosting))

vim deploy.sh
    (tecla o)
    #!/bin/sh
    cd ~/webapps/nombre_del_repo
    git init
    git remote (ssh)
    git pull origin master

guardar

listo

cuando se ejecuta el atomatic deployment pide el pass
del server
(es mas utilizado para testing (servidor de pruevas))

info extra
-----------------------------------------------------
///////////   deploy total en server   //////////////
-----------------------------------------------------
(consola server)

es utilizado para tener nuestros repos en el server sin utilizar github todos los cambios se guardan en el server
git = repo normal
bare_repositorio = esta en el server (guada como github)
repo_normal  = deployment final en server

se crean dos carpetas en el server:
    1- para la app y/o pagina
    2- para el git_central (bare_repo)
    3- se eliminan los index creados de cada uno

en git_central
    git init --bare --share

y se generan los archivos como en git

(bare = va a recibir y enviar contenidos de repos)
(share = lo puedan push diferentes usuarios)

(consola pc)

crear repo (normal en git)

git remote add origin juanwe@b396.webfaction.com:/home/juanwe/webapps/gitcentral

(entran con la direccion que le proporciona su probedor de dominios)==(juanwe@b396.webfaction.com)=ejemplo

git push origin master
pass server

si hacemos un push se sube al git_central (bare_repo)

(consola server)

(guarda el contenido pero no pueden verlo)

git log 
    aparecen los archivos

vamos a la carpeta donde se va a hacer el deployment

git init
git remote add origin ../git_central
git pull origin master

se hace una ruta relativa porque el repo esta en el mismo server
listo
tambien se puede hacer atomatico de la misma forma que en atomatic deployment con github

<<<<<<< HEAD
-----------------------------------------------------
/////////////////   bare repositories    ////////////
-----------------------------------------------------
=======
------------------------------------------------
////////////   bare repositories    ////////////
------------------------------------------------
>>>>>>> e18555fd4330df9e54c98f4365f3a0b9dce57a5f
son repositorios si utilizar github y estan guardados en el server o en tu pc

en pc

mkdir server_bare           (creamos carpeta en el server donde se van a alojar los repos bare)
cd server                   (entramos)

git init --bare repo.git    (se inicializa y se crea el repo bare)

en local se situa donde se quiere el repo local y se clona

git clone ruta nombredelrepo  =   git clone ../server/repo.git barerepolocal

y listo

ya puedes hacer push y pull a tu repo bare

github lo que hace es ejecutar bare repositories y subirlos a un server pero en teoria es lo mismo

----------------
///en server ///
----------------

se entra al server por ssh y sebusca donde se alojan las webapps (segun su servicio de servidor es diferente)
direccion para conectarse remoto a su server
pass

es lo mismo que arriva pero en el server

mkdir nombreX
cd NombreX
git init --bare repo.git

en local se situa donde se quiere el repo local y se clona

git clone ruta_al_sever nombredelrepo  =   git clone juan@web392.webfaction.com:webapps/nombreX/repo.git barerepolocal

ingresan pass
y listo
cada vez que se hagan push al server pide pass

<<<<<<< HEAD
------------------------------
//// despliegue repo bare ////
------------------------------

entramos al server via ssh entramos a la carpeta y clonamos el repo bare pero dentro del mismo server

git clone nombreRepo nomcarpetaclonada =   git clone repo.git deploy

listo
=======
>>>>>>> e18555fd4330df9e54c98f4365f3a0b9dce57a5f
