# all_about_git
aprendiendo git y github de 0 a fondo

instalar git (pagina pricipal esta todo los comandos para cada sistema op..)
(configuracion inicial)
-----------------only git--------------------------
git --version

git config --global user.name "nombre usuario"

git config --global user.email "correo"

git config --global color.ui true

git config --global --list

git --help
git help +(comando que desea mirar a fondo)
salir con la tecla (q)
-------------------------------------------------
ssh Keygen
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
------------------------------------------------------
borrar ramas
------------------------------------------------------
git branch -d nombredelarama (borrar rama)

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








