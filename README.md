# React-Calculator
 
## Principais regras de negócio abrangidas

- (Novo) Inicia com o valor zero por *default* e após apertar o botão *Clear (AC)*
    - Evita o crash após digitar apenas o dígito "."
- Mantém apenas a regra padrão: OPERANDO OPERADOR OPERANDO
    - 1 + 1    
- Após adicionar outro operador, já respeitando a regra acima, a operação anterior será computada e o resultado inserido como próximo operador
    - 1 + 1 => **(1 + 1)** + => 2 + ...
- A vírgula é adicionada automaticamente para separação decimal
- Divisão por zero e entre zeros foi deixado como padrão da linguagem
