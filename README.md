# Move edzésnapló

## Modell
A programban lejegyezhetjük az elvégzett konditermes edzéseinket, le tudjuk írni, hogy milyen gyakorlatokból hány kört és milyen ismétlésszámmal végeztünk, milyen testsúlyt mértünk az edzés után. Az edzés adatait nyilvánvalóan utólag lehet szerkeszteni, akár törölni is. Ezen adatokból meg lehet tekinteni egyszerűbb statisztikákat, mint például a testtömegünk alakulása az időben, vagy a fekvenyomásunk haladása.
A modellezett környezet a következő entitásokból áll: Edzés (Workout), az attribútumai az alábbi diagramon láthatóak. Az edzés körökből (Set) áll, a körhöz pedig kapcsolódik egy Gyakorlat (Excercise), egy edzés több körből áll, egy kör csak egy edzéshez kapcsolódik, egy körben egy gyakorlatot végzünk, de egy gyakorlat több körhöz tartozhat.
Jelenleg úgy tervezem, hogy a nézetekben minden látott adat közvetlen szerkeszthető (kivéve persze a statisztikákat, amely az adatokból táplálkozik), szóval a CRUD műveleteket teljesíteni fogja a program.

![szerveroldalijs drawio](https://user-images.githubusercontent.com/77408486/189549799-e72f3f37-ec3a-44b9-a43b-78a938eae31f.png)

## Nézetek
A tervezett nézetek Figma linkje alább látható:
https://www.figma.com/file/PfuIN2sh5FGtoYBuZQVylU/Szerveroldali-JavaScript-Sketches?node-id=0%3A1
A nézetek a következőek lesznek: létrehozhatunk új edzést, aminek a további attribútumait kívánjuk lejegyezni. Az edzés gyakorlatait a meglévő adatbankból tudjuk kiválasztani, amelyre példa a 3. screen-en látható, s a gyakorlat kiválasztása után lehet megadni a pontos ismétlésszámokat és a körök számát. A törlés opció a három függőlegesen elhelyezkedő körnél (legyen ennek a továbbiakban a neve egyéb opciók menü) lesz elérhető.

![image](https://user-images.githubusercontent.com/77408486/189549687-ec5269a8-028c-4532-b83d-283c54555985.png)

 létező edzéseket egy hasonló nézetben lehet megtekinteni és közvetlenül szerkeszteni.
 
 ![image](https://user-images.githubusercontent.com/77408486/189549705-6998f78b-186a-4e06-83e1-e72aad47d1c3.png)

A programnak van egy alapvető gyakorlatismerete, de ezt kézzel lehet bővíteni:

![image](https://user-images.githubusercontent.com/77408486/189549720-02eb99ed-f7f9-4782-9bea-6560ff214dfb.png)

Végül pedig meg lehet tekinteni az alapvető statisztikákat:

![image](https://user-images.githubusercontent.com/77408486/189549728-36031dc0-ec8c-44af-91e0-cfddbea61df6.png)
