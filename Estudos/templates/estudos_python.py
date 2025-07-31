## 01 - Se o usuário tiver + 18 anos (imprimir mensagem)
## se menor de 18 (imprimir mensagem)
#menor de 18 e maior que 16, e estiver acompanhado ele podera entrar
# se a idade negativa 
# Checar a idade do acompanhante 

idade = int(input("Digite sua idade: "))


if idade >= 18:
    print("Acesso Concedido")

elif idade <= 0:
    print("Idade Inválida")

elif idade < 18 and idade >= 16 :
    acompanhado = bool(input("Está acompanhado? "))
    if acompanhado == True:
        idade_acompanhante = int(input("Digite a idade do acompanhante para verificarmos: "))
        if idade_acompanhante >= 18:
            print("Acesso concebido com acompanhante maior de idade")
        else:
            print("Acesso Negado, acompanhante também é menor de idade")

else:
    print("Acesso Negado - Menor de idade")




