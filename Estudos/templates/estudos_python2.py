#Q1 - 
# #Utilizando if/else simular a operação de uma calculadora 
#deverá receber dois numeros e um operador 
#se o operador for +, -, * e / 
#Você deverá imprimir o resultado 
#você deverar validar se o divisor for igual a zero, se sim, colocar uma mensagem.

# print("BEM-VINDO A CALCULADORA, INSIRA SEUS NÚMEROS PARA INICIAR A OPERAÇÃO")
# n1 = float(input("Digite o primeiro número: "))
# n2 = float(input("Digite o segundo número: "))
# operador = input("Qual a operação que deseja? (soma, subtração, multiplicação ou divisão): ")

# if operador == "soma":
#     print("A soma dos dois números é: ",n1 + n2)
# elif operador == "subtração":
#     print("A subtração dos dois números é: ",n1 - n2)
# elif operador == "multiplicação":
#     print("A multiplicação entre os dois números é:",n1 * n2)
# elif operador == "divisão":
#     if n2 == 0:
#         print("Operação inválida, não é possível fazer divisão por 0")
#     else:
#         print("A divisão entre os dois números é: ",n1 / n2)
# else: 
#     print("Operação inválida")

#Q2 - Receba as notas dos 4 bimestres de um aluno, calcule a média dele 
# e informe se ele está aprovado (média>=6),
# em recuperação (média>= 3 e media< 6),
# ou reprovado(media < 3)

nt1 = float(input("Nota do 1° bimestre: "))
nt2 = float(input("Nota do 2° bimestre: "))
nt3 = float(input("Nota do 3° bimestre: "))
nt4 = float(input("Nota do 4° bimestre: "))
media = (nt1 + nt2 +nt3 + nt4)/4

if media >= 6:
    print("O Alunos está aprovado!")
elif media >= 3 and media <6:
    print("O aluno está em recuperação.")
else:
    print("O aluno está REPROVADO!")



