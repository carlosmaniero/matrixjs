# Explicação

Dada um canvas de tamanho WxH na qual cada elemento represente um pixel, crie
um programa que leia uma sequência de comandos e os interprete manipulando o canvas de acordo com a descrição abaixo de cada comando.

## Comandos

### new <largura> <altura> <cor>
Cria um novo canvas MxN, com uma cor padrão

### clean
Limpa a matriz. O tamanho permanece o mesmo. Todos os pixels ficam com a cor padrão.

### paint <x> <y> <cor>
Colore um pixel de coordenadas (X,Y) com uma determinada cor.

### paint-vertical <coluna> <linhaInicial> <linhaFinal> <cor>
Desenha uma linha vertical na coluna X nas linhas de Y1 a Y2 (intervalo
inclusivo) com determinada cor.

### paint-horizontal <linha> <colunaInicial> <colunaFinal> <cor>
Desenha uma linha horizontal na linha Y nas colunas de X1 a X2 (intervalo
inclusivo) com determinada cor.

### paint-rectangle <linhaInicial> <colunaInicial> <linhaFinal> <colunaFinal> <cor>
Desenha um retangulo de cor C. <linhaInicial> <colunaInicial> é o canto superior esquerdo e <linhaFinal> <colunaFinal> o
canto inferior direito.

### fill <linha> <coluna> <cor>
Preenche a região com a cor determinada. A região é definida da seguinte forma:
O pixel (X,Y) pertence à região. Outro pixel pertence à região, se e somente se,
ele tiver a mesma cor que o pixel (X,Y) e tiver pelo menos um lado em comum com
um pixel pertencente à região.

### exit
Encerra o programa.

### help
Exibe a lista de comandos

## Considerações
Comandos diferentes dos que foram informados devem exibir um erro.

## Testes
Entrada 01:

I 5 6
L 2 3 A
S one.bmp
G 2 3 J
V 2 3 4 W
H 3 4 2 Z
F 3 3 J
S two.bmp
X

Saida 01:

one.bmp
OOOOO
OOOOO
OAOOO
OOOOO
OOOOO
OOOOO

two.bmp
JJJJJ
JJZZJ
JWJJJ
JWJJJ
JJJJJ
JJJJJ

Entrada 02:

I 10 9
L 5 3 A
G 2 3 J
V 2 3 4 W
H 1 10 5 Z
F 3 3 J
K 2 7 8 8 E
F 9 9 R
S one.bmp
X

Saida 02:

one.bmp
JJJJJJJJJJ
JJJJJJJJJJ
JWJJAJJJJJ
JWJJJJJJJJ
ZZZZZZZZZZ
RRRRRRRRRR
REEEEEEERR
REEEEEEERR
RRRRRRRRRR
