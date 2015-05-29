# all_about_git
aprendiendo git de 0 a fondo

instalar git (pagina pricipal esta todo los comandos para cada sistema op..)
(configuracion inicial)
---------------------------------------------------------------------------
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
git init (si no fue inicializado antes)
-------------------------------------------------
git status (cual fueron modificados)
-------------------------------------------------
git add -A   (+)
git status (ya me muestra cabios añadidos listos)
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
----------nota git reset-------------------------
-------------------------------------------------
la unca forma de desaser reser es reniendo el numero de comit
git reset --hard # devuelve hasta el commit
-------------------------------------------------
-------------------------------------------------


