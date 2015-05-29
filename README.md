# all_about_git
aprendiendo git de 0 a fondo

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
la unca forma de deshacer reser es reniendo el numero de comit
git reset --hard # devuelve hasta el commit
-------------------------------------------------
-------------------------------------------------
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
----------------------------------------------------
git branch   (para fucionar toca estar en la master)
git merge nombredelarama

---------formas de fusion----------------------------
1 -fast forward  (trabajan en diferente codigo)
2 -manual merge  (commits que se enciman codigo)

-----------------------------------
1 -fast forward 
pide el commit 
oprime la tecla o  (sale INSERT)
escribe el commit
se da ESC   ( se borra insert)
se ( :x ) que significa salvar y salir
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
git branch -d nombredelarama (borrar rama)

