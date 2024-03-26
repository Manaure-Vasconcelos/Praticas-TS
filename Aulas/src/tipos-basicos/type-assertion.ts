// Ao passar o mouse por cada elemento é possível observar o tipo.
// Normal => Body pode ser null então o ts informa erro.
const body = document.querySelector('body');
body.style.background = 'transparent';

// type assertion => Mais usado, informa que o elemento não pode ser nulo.
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'transparent';

// Condicional => Ao implementar a condicional, entende-se que se passar na condição ele não será nulo.
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'transparent';

// Non-null assertion (!) => Não muito usado, mas serve para informar que o elemento não pode ser nulo.
const body3 = document.querySelector('body')!; 
body3.style.background = 'transparent';
