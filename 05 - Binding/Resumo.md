### Binding

Ligação entre valores dos componentes e templates.

#### Property Binding

Nos permite alterar o valor de uma propriedade. Usa-se "[]" em volta do nome da propriedade, e passamos o nome de uma variável com tal valor.

```html
<p [hide]="isVisible">TreinaWeb</p>
```

#### Event Binding

Permite que enviemos eventos da template para o componente. O nome dos eventos deve ficar entre "()".

```html
<button (click)="handleClick()">Click Me</button>
```

#### Two-way Data Binding

Permite manter atualizado algum valor entre componente e template. Para isso usamos "()" e "[]" juntos, resultando em "[()]". Por causa desse formato, isso é chamado de "banana in a box" (banana na caixa), que é uma boa dica para lembrar se são colchetes ou parênteses que vem primeiro.
